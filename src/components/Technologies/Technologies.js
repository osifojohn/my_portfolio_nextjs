import React from 'react';
import { DiReact, DiNodejs, DiJavascript1, DiCss3Full } from 'react-icons/di';
import { FaSass } from 'react-icons/fa';
import { AiOutlineHtml5 } from 'react-icons/ai';
import {
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiJava,
  SiSpringboot,
  SiPostgresql,
  SiDocker,
} from 'react-icons/si';
import { TbBrandNextjs, TbBrandReactNative } from 'react-icons/tb';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { List, ListItem } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <br />
    <List>
      <ListItem>
        <div>
          <SiTypescript size="2.7rem" />
        </div>
        <SectionText>TypeScript</SectionText>
      </ListItem>
      <ListItem>
        <div>
          <DiJavascript1 size="3rem" />
        </div>
        <SectionText>JavaScript</SectionText>
      </ListItem>
      <ListItem>
        <div>
          <SiJava size="3rem" />
        </div>
        <SectionText>Java</SectionText>
      </ListItem>
      <ListItem>
        <div>
          <SiSpringboot size="3rem" />
        </div>
        <SectionText>SpringBoot</SectionText>
      </ListItem>
      <ListItem>
        <div>
          <DiReact size="3rem" />
        </div>
        <SectionText>React</SectionText>
      </ListItem>
      <ListItem>
        <div>
          <TbBrandNextjs size="3rem" />
        </div>
        <SectionText>Nextjs</SectionText>
      </ListItem>
      {/* <ListItem>
        <div>
          <TbBrandReactNative size="3rem" />
        </div>
        <SectionText>React Native</SectionText>
      </ListItem> */}
      <ListItem>
        <div>
          <DiNodejs size="6rem" />
        </div>
        <SectionText>NodeJs</SectionText>
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
          <SiTailwindcss size="3rem" />
        </div>
        <SectionText>TailwindCSS</SectionText>
      </ListItem>
      <ListItem>
        <div>
          <FaSass size="3rem" />
        </div>
        <SectionText>SASS</SectionText>
      </ListItem>

      {/* <ListItem>
        <div>
          <SiPrisma size="3rem" />
        </div>
        <SectionText>Prisma</SectionText>
      </ListItem> */}

      {/* <ListItem>
        <div>
          <SiStyledcomponents size="5rem" />
        </div>
        <SectionText>Styled-Components</SectionText>
      </ListItem> */}
      <ListItem>
        <div>
          <SiExpress size="3rem" />
        </div>
        <SectionText>ExpressJs</SectionText>
      </ListItem>
      <ListItem>
        <div>
          <SiPostgresql size="3rem" />
        </div>
        <SectionText>PostgreSQL</SectionText>
      </ListItem>
      <ListItem>
        <div>
          <SiMongodb size="3rem" />
        </div>
        <SectionText>MongoDB</SectionText>
      </ListItem>
      <ListItem>
        <div>
          <SiDocker size="3rem" />
        </div>
        <SectionText>Docker</SectionText>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
