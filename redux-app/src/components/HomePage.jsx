import React from "react";
import Mobile from "../redux/Features/mobile/MobileView";
import TvView from "../redux/Features/tv/TvView";

const HomePage = () => {
  return (
    <div>
      <Mobile />
      <TvView />
    </div>
  );
};

export default HomePage;
