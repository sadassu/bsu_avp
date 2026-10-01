import AreaSection from "./sections/AreaSection";
import BSITSection from "./sections/BSITSection";
import VideoSection from "./sections/VideoSection";
import WelcomeSection from "./sections/WelcomeSection";

const Homepage = () => {
  return (
    <>
      <WelcomeSection />

      <BSITSection />

      <AreaSection />

      <VideoSection />
    </>
  );
};

export default Homepage;
