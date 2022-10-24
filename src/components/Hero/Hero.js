import React from "react";

import { SectionText } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, RightSection, GridContainer } from "./HeroStyles";

const Hero = (props) => (
  <>
    <GridContainer>
      <LeftSection>
        <h2> Hello, I'm </h2>
        <h1> Osifo John</h1>

        <SectionText>Front-End Developer</SectionText>
      </LeftSection>
      <RightSection>
        <img src="./images/my-photo.jpg" alt="user photo" />
      </RightSection>
    </GridContainer>
  </>
);

export default Hero;
