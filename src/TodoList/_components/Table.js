import styled from "styled-components";

export const Table = styled.table`
  color: ${(props) => props.theme.color};
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
  border-spacing: 2px;
  border-color: ${(props) => props.theme.color};

  `;
export const Thead = styled.thead`
  vertical-align: middle;
//   border: 1px solid ${(props) => props.theme.color};
  border-radius: ${(props) => props.theme.borderRadiusButton};
`;

export const Tbody = styled.tbody`
  vertical-align: middle;
  border-color: inherit;
`;
export const Tr = styled.tr`
  vertical-align: middle;
  //  border: 1px solid ${(props) => props.theme.color};
   //   border-radius: ${(props) => props.theme.borderRadiusButton};
}
`;
export const Td = styled.td`
padding: 0.75rem;
vertical-align: middle;
border: 1px solid ${(props) => props.theme.color};
  `;
  
  export const Th = styled.th`
  background-color: ${(props) => props.theme.backgroundColor}
  color: ${(props) => props.theme.color}
  vertical-align: middle;
    padding: .75rem;
    font-weight: 100;
`;
