import React from "react";
import HexagonPicture from "../../components/HexagonPicture";
import HexagonBackground from "../../assets/canva_assets/background_hexagon.png";

const WelcomeSection = () => {
  return (
    <section className="w-full relative">
      <img
        src={HexagonBackground}
        alt="Hexagon Background"
        className="absolute w-50 h-50 object-cover"
      />

      <div className="absolute bottom-0 right-0 p-4 text-xl font-bold">
        <div>Leading innovations,</div>
        <div>Transforming Lives,</div>
        <div>Building the Nation</div>
      </div>

      <div className="flex min-h-125 w-full gap-10">
        {/* Left Column */}
        <div className="w-1/2 flex justify-center">
          {/* Hexagon Group / Canvas */}
          <div className="relative w-125 h-125 shrink-0">
            {/* Big picture */}
            <HexagonPicture
              src="https://placehold.co/600x400"
              top="50px"
              right="90px"
              size="w-100 h-100"
            />

            {/* Bottom right */}
            <HexagonPicture
              src="https://placehold.co/600x400"
              bottom="40px"
              right="60px"
              size="w-40 h-40"
            />

            {/* Top left */}
            <HexagonPicture
              src="https://placehold.co/600x400"
              top="20px"
              size="w-40 h-40"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex w-1/2 flex-col items-start justify-center">
          <h1 className="text-8xl font-bold text-[#a77427] uppercase bebas-neue text-center">
            Preliminary
          </h1>

          <h1 className="text-8xl font-bold text-[#a77427] uppercase bebas-neue text-center">
            Survey
          </h1>

          <h1 className="text-8xl font-bold text-[#a77427] uppercase bebas-neue text-center">
            Visit
          </h1>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
