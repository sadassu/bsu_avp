import React from "react";
import BSULogo from "../assets/Batangas_State_Logo.png";

// WARNING: This is auto-generated SVG code for the university banner
// this is the university banner component that will be used in the homepage

const UniversityBanner = () => {
  return (
    <section className="w-full bg-white">
      <svg
        viewBox="50 60 1310 225"
        className="block h-auto w-full"
        role="img"
        aria-label="Batangas State University - Leading innovations, Transforming Lives, Building the Nation"
      >
        {/* Small light-gray fold, top-left */}
        <polygon points="50,120 80,155 50,155" fill="#d9d9d9" />

        {/* Left gold band (behind the logo) */}
        <polygon points="50,155 445,155 365,248 50,248" fill="#a57525" />

        {/* Subtle darker gold fold */}
        <polygon
          points="50,170 60,160 190,248 50,248"
          fill="#7c5618"
          opacity="0.6"
        />

        {/* Small brown tip at the end of the gold band */}
        <polygon points="445,155 470,180 422,180" fill="#827361" />

        {/* Main dark shape: bottom strip + raised block with diagonal ends */}
        <polygon
          points="50,248 365,248 422,182 745,182 850,283 50,283"
          fill="#3f3f3f"
        />

        {/* Right gold strip */}
        <polygon
          points="800,240 1340,240 1360,258 1360,283 850,283"
          fill="#a67327"
        />

        {/* Subtle fold line in the right gold strip */}
        <polygon points="1150,240 1165,240 1205,283 1190,283" fill="#8a5d1c" />

        {/* Logo */}
        <image
          href={BSULogo}
          x="146"
          y="68"
          width="212"
          height="212"
          preserveAspectRatio="xMidYMid meet"
        />

        {/* Slogan */}
        <g
          fontFamily="Calibri, 'Segoe UI', Arial, sans-serif"
          fontStyle="italic"
          fontWeight="700"
          fontSize="38"
          fill="#5b524e"
          textAnchor="middle"
        >
          <text x="938" y="170">
            Leading innovations, Transforming Lives,
          </text>
          <text x="942" y="219">
            Building the Nation
          </text>
        </g>
      </svg>
    </section>
  );
};

export default UniversityBanner;
