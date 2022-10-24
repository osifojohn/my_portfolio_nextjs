import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+2347057388158">+2347057388158</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:osifojohntec@gmail.com">
            osifojohntec@gmail.com
          </LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Resume</LinkTitle>
          <LinkItem href="https://drive.google.com/file/d/1_ssYxOj0yeTBcuh5SwUN7NVAGavWLX9M/view?usp=sharing">
            drive.google.com/file/...
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/osifojohn">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://linkedin.com/in/osifo-john-bb44141b5">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>

        <CompanyContainer>
          <Slogan>&#169; 2022 | Osifo John</Slogan>
        </CompanyContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
