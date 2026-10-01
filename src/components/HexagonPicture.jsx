import React from "react";

const HexagonPicture = ({
  src,
  alt = "",
  top,
  right,
  bottom,
  left,
  size = "w-32 h-32",
}) => {
  const hexagonClip =
    "polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)";

  return (
    <div
      className={`absolute ${size} bg-[#a77427] p-1`}
      style={{
        top,
        right,
        bottom,
        left,
        clipPath: hexagonClip,
      }}
    >
      <div
        className="w-full h-full overflow-hidden bg-white"
        style={{
          clipPath: hexagonClip,
        }}
      >
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default HexagonPicture;
