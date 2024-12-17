"use client";
import React from "react";

const Hexagon: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "200px", // Hexagon size
        height: "200px",
        margin: "50px auto",
        backgroundColor: "transparent",
        position: "relative",
      }}
    >
      {/* Hexagon SVG */}
      <svg
        id="hex"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        viewBox="0 0 84 96"
        style={{
          width: "100%",
          height: "100%",
        }}
        className="hexagon-svg"
      >
        <title>Hexagon</title>
        <g transform="translate(-8.000000, -2.000000)">
          <g transform="translate(11.000000, 5.000000)">
            {/* Default Hexagon */}
            <polygon
              className="hexagon-shape"
              stroke="#00e5ff"
              strokeWidth="2.5" /* Normal border width */
              strokeLinecap="round"
              strokeLinejoin="round"
              points="39 0 0 22 0 67 39 90 78 68 78 23"
              fill="#001433" // Inner fill color
            ></polygon>

            {/* Right Border Overlay for Hover Effect */}
            <polyline
              className="hexagon-right-border"
              points="39 0, 78 23, 78 68, 39 90"
              stroke="#00e5ff"
              strokeWidth="2.5" /* Default border width */
              fill="none"
            />
          </g>
        </g>
      </svg>

      {/* Centered "T" */}
      <div
        style={{
          position: "absolute",
          color: "#00e5ff", // Cyan color for the text
          fontSize: "5rem", // Text size
          fontWeight: "bold",
        }}
      >
        T
      </div>

      <style jsx>{`
        .hexagon-svg .hexagon-right-border {
          transition: stroke-width 0.3s ease; /* Smooth hover effect */
        }

        .hexagon-svg:hover .hexagon-right-border {
          stroke-width: 8px; /* Increase border width of the right side */
        }
      `}</style>
    </div>
  );
};

export default Hexagon;
