import styled from "styled-components";

export const Input = styled.input`
  transition: 2s ease-in-out;
  color: ${(props) => props.theme.color};
  border: ${(props) => props.theme.borderBtn};
  border-radius: ${(props) => props.theme.borderRadiusBtn};
  background-color: ${(props) => props.theme.taskBgColor};
  min-height: 35px;
  padding-left: 20px;
  height: 50px;
  font-size: 15px;
  width: 100%;
  &::placeholder {
    transition: 2s ease-in-out;
    color: ${(props) => props.theme.color};
  }
  &:focus {
    background-color: ${(props) => props.theme.focusbgInput};
  }
`;

export const Label = styled.span`
  color: ${(props) => props.theme.color};
  width: auto;
`;

export const TextField = ({ label, ...props }) => {
  return (
    <span>
      <Label>{label}</Label>
      <Input {...props} />
    </span>
  );
};
