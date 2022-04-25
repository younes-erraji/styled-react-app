import styled from "styled-components";

import Image from "../../Images/Landing.jpg";

const DFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Slider = styled(DFlex)`
  background-image: url("${Image}");
  background-size: cover;
  min-height: 100vh;
`;

const SliderIntro = styled.div`
  padding-block: 78px;
  text-align: center;
  color: #fff;

  @media (max-width: 787px) {
    padding-block: 48px;
  }
`;

const SliderIntroH2 = styled.h2`
  margin: 0 auto;
  font-size: 50px;
  width: 600px;
  border-top: 4px solid #fff;
  border-bottom: 4px solid #fff;
  padding: 5px 0;
`;

const SliderIntroButton = styled.button`
  background: none;
  margin: 30px 14px;
  font-size: 20px;
  border: 2px solid #fff;
  color: #fff;
  font-weight: bold;
  padding: 10px 30px;

  color: ${(props) => (props.pFor === "visit" ? "red" : "black")};
  cursor: pointer;
`;

export { Slider, SliderIntro, SliderIntroH2, SliderIntroButton };
