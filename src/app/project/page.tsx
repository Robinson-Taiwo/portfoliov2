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
            
            {/* Border Segments */}
            <line
              className="hexagon-border hexagon-top"
              x1="39"
              y1="0"
              x2="0"
              y2="22"
              stroke="#00e5ff"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            <line
              className="hexagon-border hexagon-top-right"
              x1="0"
              y1="22"
              x2="0"
              y2="67"
              stroke="#00e5ff"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            <line
              className="hexagon-border hexagon-bottom-right"
              x1="0"
              y1="67"
              x2="39"
              y2="90"
              stroke="#00e5ff"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            <line
              className="hexagon-border hexagon-bottom"
              x1="39"
              y1="90"
              x2="78"
              y2="68"
              stroke="#00e5ff"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            <line
              className="hexagon-border hexagon-bottom-left"
              x1="78"
              y1="68"
              x2="78"
              y2="23"
              stroke="#00e5ff"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            <line
              className="hexagon-border hexagon-top-left"
              x1="78"
              y1="23"
              x2="39"
              y2="0"
              stroke="#00e5ff"
              strokeWidth="2.5"
              strokeLinecap="round"
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
        .hexagon-border {
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        /* Continuous Animation with Loop */
        .hexagon-svg .hexagon-top {
          animation: drawTop 1s forwards infinite;
        }

        .hexagon-svg .hexagon-top-right {
          animation: drawTopRight 1s forwards infinite;
        }

        .hexagon-svg .hexagon-bottom-right {
          animation: drawBottomRight 1s forwards infinite;
        }

        .hexagon-svg .hexagon-bottom {
          animation: drawBottom 1s forwards infinite;
        }

        .hexagon-svg .hexagon-bottom-left {
          animation: drawBottomLeft 1s forwards infinite;
        }

        .hexagon-svg .hexagon-top-left {
          animation: drawTopLeft 1s forwards infinite;
        }

        /* Keyframe animations for each side */
        @keyframes drawTop {
          0% {
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes drawTopRight {
          0% {
            opacity: 0;
          }
          40% {
            opacity: 1;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes drawBottomRight {
          0% {
            opacity: 0;
          }
          60% {
            opacity: 1;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes drawBottom {
          0% {
            opacity: 0;
          }
          80% {
            opacity: 1;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes drawBottomLeft {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes drawTopLeft {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Hexagon;
