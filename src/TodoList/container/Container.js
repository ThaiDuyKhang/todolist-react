import styled from "styled-components";

export const ContainerFluid = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.color};
  border: 5px solid ${(props) => props.theme.color};
  padding: 15px;
  margin-right: auto;
  margin-left: auto;
`;

export const Container = styled.div`
  transition: 2s ease-in-out;
  background-color: ${(props) => props.theme.bgColor};
  box-shadow: ${(props) => props.theme.boxShadow};
  color: ${(props) => props.theme.color};
  padding: 15px 30px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 4%;
  max-width: 50%;
  backdrop-filter: blur(3px);
  border-radius: ${(props) => props.theme.borderRadiusContainer};
`;
