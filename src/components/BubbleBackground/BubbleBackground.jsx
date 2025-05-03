import React, { useEffect, useRef } from "react";
import patternImage from "../../assets/pattern.jpg"; // Adjust path based on file location

export default function BubbleBackground() {
  const bubbleRef = useRef(null);

  useEffect(() => {
    const bubble = bubbleRef.current;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      const zoomSize = 2; // zoom level

      bubble.style.left = `${clientX}px`;
      bubble.style.top = `${clientY}px`;

      // Shift background inside the bubble to simulate zoom
      bubble.style.backgroundPosition = `-${clientX * zoomSize - 128}px -${
        clientY * zoomSize - 128
      }px`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      style={{
        backgroundImage: 'url( ${patternImage})',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        ref={bubbleRef}
        className="pointer-events-none absolute w-64 h-64 rounded-full border-2 border-white z-10"
        style={{
          transform: "translate(-50%, -50%)",
          backgroundImage: "url( )",
          backgroundSize: "200%", // matches zoomSize
          backgroundRepeat: "no-repeat",
          mixBlendMode: "normal",
        }}
      />
    </div>
  );
}
