import React from "react";

const stars = [
  { top: "8%", left: "12%", size: 78, rotate: 12 },
  { top: "18%", left: "80%", size: 46, rotate: 33 },
  { top: "30%", left: "60%", size: 73, rotate: -18 },
  { top: "55%", left: "10%", size: 98, rotate: 44 },
  { top: "70%", left: "85%", size: 80, rotate: -8 },
  { top: "80%", left: "30%", size: 83, rotate: 25 },
  { top: "90%", left: "60%", size: 50, rotate: -30 },
  { top: "15%", left: "50%", size: 35, rotate: 60 },
  { top: "60%", left: "70%", size: 91, rotate: -45 },
  { top: "40%", left: "25%", size: 60, rotate: 15 },
  // Add more stars if you want!
];

export default function StarryBackground() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: "none",
        width: "100vw",
        height: "100vh",
        border: "2px solid red", 
      }}
    >
      {stars.map((star, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            top: star.top,
            left: star.left,
            fontSize: `${star.size}px`,
            transform: `rotate(${star.rotate}deg)`,
            opacity: 0.4,
            userSelect: "none",
            filter: "drop-shadow(0 2px 6px #e75480aa)",
          }}
        >
          ⭐
        </span>
      ))}
    </div>
  );
}