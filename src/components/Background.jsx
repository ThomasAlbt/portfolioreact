import { useEffect, useRef } from "react";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";
import { useLocation } from "react-router";

const getVantaColors = (pathname) => {
  switch (pathname) {
    case "/":
      return {
        highlightColor: 0x72e3cc,
        midtoneColor: 0x607089,
        lowlightColor: 0x291f46,
        baseColor: 0x0,
        blurFactor: 0.90,
      };
    case "/About":
      return {
        highlightColor: 0xffc3a0,
        midtoneColor: 0xb07a6a,
        lowlightColor: 0x4a2a3a,
        baseColor: 0x1a0a0f,
        blurFactor: 0.90,
      };
    case "/Stack":
      return {
        highlightColor: 0xd4a8c0,
        midtoneColor: 0x7a6a8a,
        lowlightColor: 0x2a2a4a,
        baseColor: 0x1a0a0f,
        blurFactor: 0.90,
      };
    case "/Project":
      return {
        highlightColor: 0x8ae2f2,
        midtoneColor: 0x4a6b8a,
        lowlightColor: 0x1a2a4a,
        baseColor: 0x0a0e1a,
        blurFactor: 0.90,
      };
    case "/Formations":
      return {
        highlightColor: 0xd4a8f0,
        midtoneColor: 0x7a6a8a,
        lowlightColor: 0x2a1a3a,
        baseColor: 0x0a050f,
        blurFactor: 0.90,
      };
    case "/Contact":
      return {
        highlightColor: 0xffb3cb,
        midtoneColor: 0xffb3cb,
        lowlightColor: 0x4a2a5a,
        baseColor: 0x0a050f,
        blurFactor: 0.90,
      };
    default:
      return {
        highlightColor: 0xffc3a0,
        midtoneColor: 0xb07a6a,
        lowlightColor: 0x4a2a3a,
        baseColor: 0x1a0a0f,
        blurFactor: 0.90,
      };
  }
};

function lerpColor(a, b, t) {
  const ar = (a >> 16) & 0xff, ag = (a >> 8) & 0xff, ab = a & 0xff;
  const br = (b >> 16) & 0xff, bg = (b >> 8) & 0xff, bb = b & 0xff;
  const rr = Math.round(ar + (br - ar) * t);
  const rg = Math.round(ag + (bg - ag) * t);
  const rb = Math.round(ab + (bb - ab) * t);
  return (rr << 16) | (rg << 8) | rb;
}

const VantaBackground = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
  const prevColors = useRef(getVantaColors("/"));
  const location = useLocation();
  const {
    highlightColor,
    midtoneColor,
    lowlightColor,
    baseColor,
    blurFactor
  } = getVantaColors(location.pathname);

  useEffect(() => {
    if (!vantaEffect.current) {
      vantaEffect.current = FOG({
        el: vantaRef.current,
        THREE: THREE,
        highlightColor,
        midtoneColor,
        lowlightColor,
        baseColor,
        blurFactor
      });
    }
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!vantaEffect.current) return;

    const steps = 24;
    const duration = 200;
    const interval = duration / (steps + 1);

    const from = prevColors.current;
    const to = { highlightColor, midtoneColor, lowlightColor, baseColor, blurFactor };

    let step = 0;

    function animateStep() {
      step++;
      const t = step / (steps + 1);
      vantaEffect.current.setOptions({
        highlightColor: lerpColor(from.highlightColor, to.highlightColor, t),
        midtoneColor: lerpColor(from.midtoneColor, to.midtoneColor, t),
        lowlightColor: lerpColor(from.lowlightColor, to.lowlightColor, t),
        baseColor: lerpColor(from.baseColor, to.baseColor, t),
        blurFactor: from.blurFactor + (to.blurFactor - from.blurFactor) * t
      });
      if (step < steps + 1) {
        setTimeout(animateStep, interval);
      } else {
        vantaEffect.current.setOptions(to);
        prevColors.current = to;
      }
    }

    animateStep();
  }, [highlightColor, midtoneColor, lowlightColor, baseColor, blurFactor]);

  return (
    <div
      ref={vantaRef}
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        top: 0,
        left: 0
      }}
    />
  );
};

export default VantaBackground;