import styled from 'styled-components'

export const ButtonDelete = styled.button`
apperance:none;
background-color: ${props => props.theme.BtnDeleteColor};;
color: ${props => props.theme.colorIconHover};
border: ${props => props.theme.borderBtnDelete};
transition: all .2s;
padding: .4rem .6rem;
font-size:13px;
border-radius:${props => props.theme.borderRadiusCircle};
&:hover {
    background-color: ${props => props.theme.BtnDeleteColorHover};
    color: ${props => props.theme.colorIconHover};
    border: ${props => props.theme.borderBtnDeleteHover};
};
`;
