import React from "react";
import {
  Slider,
  SliderIntro,
  SliderIntroH2,
  SliderIntroButton,
} from "./Landing-styled";

function Landing() {
  return (
    <Slider>
      <div className="container">
        <SliderIntro>
          <SliderIntroH2>Web &amp; Graphic Designer</SliderIntroH2>
          <SliderIntroButton pFor="learn">Learn More</SliderIntroButton>
          <SliderIntroButton pFor="visit">Visit us</SliderIntroButton>
        </SliderIntro>
      </div>
    </Slider>
  );
}

export default Landing;
