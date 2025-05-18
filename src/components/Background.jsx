import React, { useEffect, useRef } from "react";
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

const VantaBackground = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
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
  } else {
    // Only update options, don't destroy/recreate
    vantaEffect.current.setOptions({
      highlightColor,
      midtoneColor,
      lowlightColor,
      baseColor,
      blurFactor
    });
  }
  // Only clean up on unmount
  return () => {
    if (vantaEffect.current) {
      vantaEffect.current.destroy();
      vantaEffect.current = null;
    }
  };
  // Only run on mount/unmount
  // eslint-disable-next-line
}, []);

// Add a separate effect to update options when colors change
useEffect(() => {
  if (vantaEffect.current) {
    vantaEffect.current.setOptions({
      highlightColor,
      midtoneColor,
      lowlightColor,
      baseColor,
      blurFactor
    });
  }
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