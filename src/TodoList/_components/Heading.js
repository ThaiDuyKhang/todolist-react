import styled from "styled-components";

export const Heading1 = styled.h1`
  transition: 2s ease-in-out;
  font-family: "Gochi Hand", cursive;
  font-size: 4rem;
  font-weight: 600;
  line-height: 1.2;
  color: ${(props) => props.theme.HeadingColor};
`;

export const Heading2 = styled.h2`
  transition: 2s ease-in-out;
  font-family: "Gochi Hand", cursive;
  font-size: 3rem;
  font-weight: 600;
  line-height: 1.2;
  color: ${(props) => props.theme.HeadingColor};
`;

export const Heading3 = styled.h3`
  transition: 2s ease-in-out;
  font-family: "Gochi Hand", cursive;
  font-size: 2rem;
  line-height: 1.2;
  color: ${(props) => props.theme.HeadingColor};
`;

export const Heading4 = styled.h4`
  transition: 2s ease-in-out;
  font-family: "Gochi Hand", cursive;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.2;
  color: ${(props) => props.theme.HeadingColor};
`;

export const Heading5 = styled.h5`
  transition: 2s ease-in-out;
  font-family: "Gochi Hand", cursive;
  font-size: 0.5rem;
  line-height: 1.2;
  color: ${(props) => props.theme.HeadingColor};
`;
