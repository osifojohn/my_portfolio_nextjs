import styled from "styled-components";

export const GridContainer = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: 400px 550px;
  gap: 0 3rem;
  grid-template-rows: 500px;

  @media (max-width: 1100px) {
    grid-template-columns: 390px 470px;
    gap: 0 1.5rem;
  }
  @media (max-width: 940px) {
    grid-template-columns: 300px 370px;
    gap: 0 1rem;
    grid-template-rows: 400px;
  }
  @media (max-width: 740px) {
    grid-template-columns: 95vw;
    justify-content: center;
    grid-template-rows: 200px 400px;
    gap: 1.5rem 1.5rem;
  }
`;

export const LeftSection = styled.div`
  align-self: center;
  h2 {
    font-size: 4rem;
    padding-bottom: 1rem;
    color: ${(props) => props.theme.colors.accent1};
    @media (max-width: 940px) {
      font-size: 3.5rem;
      padding-bottom: 0.5rem;
    }
    @media (max-width: 450px) {
      padding-bottom: 0;
      line-height: 0.5;
    }
  }

  h1 {
    font-size: 7rem;
    letter-spacing: 1rem;
    color: ${(props) => props.theme.colors.primary1};

    @media (max-width: 940px) {
      font-size: 4.5rem;
    }
    @media (max-width: 450px) {
      letter-spacing: 0.5rem;
      line-height: 0.7;
      font-size: 4rem;
      letter-spacing: 0.5rem;
    }
  }
`;

export const RightSection = styled.div`
  @media (max-width: 740px) {
    justify-self: center;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 40px;
    box-shadow: 8px 8px 3px 0px rgba(0, 0, 0, 0.75);
    @media (max-width: 450px) {
      width: 90%;
      height: 85%;
      border-radius: 30px;
    }
  }
`;
