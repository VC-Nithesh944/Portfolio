"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { twMerge } from "tailwind-merge";

const MOVEMENT_DAMPING = 1400;

const DEFAULT_GLOBE_CONFIG = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
  ],
};

export default function Globe({ className = "", config = DEFAULT_GLOBE_CONFIG }) {
  const canvasRef = useRef(null);
  const lastPointerXRef = useRef(null);
  const widthRef = useRef(0);
  const autoplayPhi = useRef(0);

  const rot = useMotionValue(0);
  const rotSpring = useSpring(rot, { mass: 1, damping: 30, stiffness: 100 });

  const setCanvasCursor = (isGrabbing) => {
    if (!canvasRef.current) return;
    canvasRef.current.style.cursor = isGrabbing ? "grabbing" : "grab";
  };

  const applyPointerDelta = (clientX) => {
    if (lastPointerXRef.current === null) return;
    const delta = clientX - lastPointerXRef.current;
    rot.set(rot.get() + delta / MOVEMENT_DAMPING);
    lastPointerXRef.current = clientX;
  };

  useEffect(() => {
    const handleResize = () => {
      if (!canvasRef.current) return;
      widthRef.current = canvasRef.current.offsetWidth || 300;
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    const globe = createGlobe(canvasRef.current, {
      ...config,
      width: Math.max(200, widthRef.current) * 2,
      height: Math.max(200, widthRef.current) * 2,
      onRender: (state) => {
        if (lastPointerXRef.current === null) autoplayPhi.current += 0.005;
        state.phi = autoplayPhi.current + rotSpring.get();
        state.width = Math.max(200, widthRef.current) * 2;
        state.height = Math.max(200, widthRef.current) * 2;
      },
    });

    if (canvasRef.current) canvasRef.current.style.opacity = "1";

    return () => {
      globe.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, [rotSpring, config]);

  const handlePointerDown = (e) => {
    lastPointerXRef.current = e.clientX;
    setCanvasCursor(true);
    try {
      canvasRef.current?.setPointerCapture?.(e.pointerId);
    } catch (err) {}
  };

  const handlePointerUp = (e) => {
    lastPointerXRef.current = null;
    setCanvasCursor(false);
    try {
      canvasRef.current?.releasePointerCapture?.(e.pointerId);
    } catch (err) {}
  };

  const handlePointerMove = (e) => applyPointerDelta(e.clientX);

  const handleTouchMove = (e) => {
    if (!e.touches?.length) return;
    applyPointerDelta(e.touches[0].clientX);
  };

  return (
    <div className={twMerge("mx-auto aspect-[1/1] w-full max-w-[600px]", className)}>
      <canvas
        ref={canvasRef}
        className={twMerge(
          "size-[30rem] opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        )}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onPointerOut={handlePointerUp}
        onPointerMove={handlePointerMove}
        onTouchMove={handleTouchMove}
      />
    </div>
  );
}
