import { useEffect, useRef } from "react";
import { Renderer, Transform, Vec3, Color, Polyline } from "ogl";

const Mousemove = ({
  colors = ["blue"],
  baseSpring = 0.03,
  baseFriction = 0.9,
  baseThickness = 30,
  offsetFactor = 0.05,
  maxAge = 500,
  pointCount = 50,
  speedMultiplier = 0.6,
  enableFade = false,
  enableShaderEffect = false,
  effectAmplitude = 2,
  backgroundColor = [0, 0, 0, 0],
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    /* ================= Renderer ================= */
    const renderer = new Renderer({
      dpr: Math.min(window.devicePixelRatio, 2),
      alpha: true,
    });

    const gl = renderer.gl;

    if (Array.isArray(backgroundColor) && backgroundColor.length === 4) {
      gl.clearColor(
        backgroundColor[0],
        backgroundColor[1],
        backgroundColor[2],
        backgroundColor[3]
      );
    } else {
      gl.clearColor(0, 0, 0, 0);
    }

    Object.assign(gl.canvas.style, {
      position: "absolute",
      inset: "0",
      width: "100%",
      height: "100%",
      pointerEvents: "none",
    });

    container.appendChild(gl.canvas);

    /* ================= Scene ================= */
    const scene = new Transform();
    const lines = [];

    /* ================= Shaders ================= */
    const vertex = `
      precision highp float;

      attribute vec3 position;
      attribute vec3 next;
      attribute vec3 prev;
      attribute vec2 uv;
      attribute float side;

      uniform vec2 uResolution;
      uniform float uDPR;
      uniform float uThickness;
      uniform float uTime;
      uniform float uEnableShaderEffect;
      uniform float uEffectAmplitude;

      varying vec2 vUV;

      vec4 getPosition() {
        vec4 current = vec4(position, 1.0);
        vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);

        vec2 nextScreen = next.xy * aspect;
        vec2 prevScreen = prev.xy * aspect;
        vec2 tangent = normalize(nextScreen - prevScreen);
        vec2 normal = vec2(-tangent.y, tangent.x);

        normal /= aspect;
        normal *= mix(1.0, 0.1, pow(abs(uv.y - 0.5) * 2.0, 2.0));

        float dist = length(nextScreen - prevScreen);
        normal *= smoothstep(0.0, 0.02, dist);

        float pixelWidth = current.w / (uResolution.y / uDPR);
        normal *= pixelWidth * uThickness;

        current.xy -= normal * side;

        if (uEnableShaderEffect > 0.5) {
          current.xy += normal * sin(uTime + current.x * 10.0) * uEffectAmplitude;
        }

        return current;
      }

      void main() {
        vUV = uv;
        gl_Position = getPosition();
      }
    `;

    const fragment = `
      precision highp float;

      uniform vec3 uColor;
      uniform float uOpacity;
      uniform float uEnableFade;

      varying vec2 vUV;

      void main() {
        float fade = 1.0;
        if (uEnableFade > 0.5) {
          fade = 1.0 - smoothstep(0.0, 1.0, vUV.y);
        }
        gl_FragColor = vec4(uColor, uOpacity * fade);
      }
    `;

    /* ================= Resize ================= */
    const resize = () => {
      renderer.setSize(container.clientWidth, container.clientHeight);
      lines.forEach((l) => l.polyline.resize());
    };
    window.addEventListener("resize", resize);

    /* ================= Lines ================= */
    const center = (colors.length - 1) / 2;

    colors.forEach((color, index) => {
      const points = Array.from({ length: pointCount }, () => new Vec3());

      const line = {
        spring: baseSpring + (Math.random() - 0.5) * 0.05,
        friction: baseFriction + (Math.random() - 0.5) * 0.05,
        mouseVelocity: new Vec3(),
        mouseOffset: new Vec3(
          (index - center) * offsetFactor,
          (Math.random() - 0.5) * 0.1,
          0
        ),
        points,
      };

      line.polyline = new Polyline(gl, {
        points,
        vertex,
        fragment,
        uniforms: {
          uColor: { value: new Color(color) },
          uThickness: { value: baseThickness },
          uOpacity: { value: 1 },
          uTime: { value: 0 },
          uEnableShaderEffect: { value: enableShaderEffect ? 1 : 0 },
          uEffectAmplitude: { value: effectAmplitude },
          uEnableFade: { value: enableFade ? 1 : 0 },
        },
      });

      line.polyline.mesh.setParent(scene);
      lines.push(line);
    });

    resize();

    /* ================= Mouse ================= */
    const mouse = new Vec3();

    const updateMouse = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouse.set(x * 2 - 1, -y * 2 + 1, 0);
    };

    window.addEventListener("mousemove", updateMouse);

    /* ================= Animation ================= */
    const tmp = new Vec3();
    let raf;

    const update = (time) => {
      raf = requestAnimationFrame(update);

      lines.forEach((line) => {
        tmp.copy(mouse).add(line.mouseOffset).sub(line.points[0]).multiply(line.spring);
        line.mouseVelocity.add(tmp).multiply(line.friction);
        line.points[0].add(line.mouseVelocity);

        for (let i = 1; i < line.points.length; i++) {
          line.points[i].lerp(line.points[i - 1], speedMultiplier);
        }

        line.polyline.mesh.program.uniforms.uTime.value = time * 0.001;
        line.polyline.updateGeometry();
      });

      renderer.render({ scene });
    };

    update(0);

    /* ================= Cleanup ================= */
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", updateMouse);
      container.removeChild(gl.canvas);
    };
  }, [
    colors,
    baseSpring,
    baseFriction,
    baseThickness,
    offsetFactor,
    maxAge,
    pointCount,
    speedMultiplier,
    enableFade,
    enableShaderEffect,
    effectAmplitude,
    backgroundColor,
  ]);

  return <div ref={containerRef}     className="fixed inset-0 z-50 pointer-events-none"
 />;
};

export default Mousemove;
