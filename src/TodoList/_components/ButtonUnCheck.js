import styled from 'styled-components'

export const ButtonUnCheck = styled.button`
    apperance:none;
    background-color: ${props => props.theme.BtnBgColor};
    color: ${props => props.theme.colorIconHover};
    border: ${props => props.theme.borderBtnCheck};
    transition: all .2s;
    padding: .4rem .6rem;
    font-size:13px;
    border-radius:${props => props.theme.borderRadiusCircle};
    &:hover {
        background-color: ${props => props.theme.BtnUnCheckColorHover};
        color: ${props => props.theme.colorIconHover};
        border: ${props => props.theme.borderBtnUnCheckHover};
    };
`;

