import styled from "styled-components";

export const DivField = styled.div`
transition: 2s ease-in-out;
  background-color: ${(props) => props.theme.taskBgColor};
  border-radius: ${(props) => props.theme.borderRadiusBtn};
  color:${(props) => props.theme.color};
  margin-bottom: 1rem;
`
