import React from "react";
import { DiReact, DiJavascript1, DiCss3Full } from "react-icons/di";
import { FaSass } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { List, ListItem } from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <br />
    <List>
      <ListItem>
        <div>
          <DiJavascript1 size="3rem" />
        </div>
        <SectionText>JavaScript</SectionText>
      </ListItem>
      <ListItem>
        <div>
          <DiReact size="3rem" />
        </div>
        <SectionText>React</SectionText>
      </ListItem>
      <ListItem>
        <div>
          <AiOutlineHtml5 size="3rem" />
        </div>
        <SectionText>HTML5</SectionText>
      </ListItem>
      <ListItem>
        <div>
          <DiCss3Full size="3rem" />
        </div>
        <SectionText>CSS3</SectionText>
      </ListItem>
      <ListItem>
        <div>
          <FaSass size="3rem" />
        </div>
        <SectionText>SASS</SectionText>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
