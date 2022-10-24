import styled from "styled-components";

export const ImageContainer = styled.div`
  text-align: center;
  background-image: radial-gradient(
    50% 50% at 50% 50%,
    rgba(79, 108, 176, 0.25) 53.8%,
    rgba(79, 108, 176, 0) 100%
  );
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${(props) => props.theme.breakpoints.lg} {
    background-image: none;
    padding: 0;
    margin-top: 40px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
`;

export const MainImage = styled.img`
  width: 100%;
`;

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem 0;
`;

export const ListItem = styled.li`
  list-style-type: none;
  display: grid;
  color: inherit;
  h4 {
    font-size: 1.5rem;
  }
`;
