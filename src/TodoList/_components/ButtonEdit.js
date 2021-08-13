import styled from 'styled-components'

export const ButtonEdit = styled.button`
    apperance:none;
    background-color: ${props => props.theme.BtnEditColor};;
    color: ${props => props.theme.colorIconHover};
    border: ${props => props.theme.borderBtnEdit};
    transition: all .2s;
    padding: .4rem .6rem;
    font-size:13px;
    border-radius:${props => props.theme.borderRadiusCircle};
    &:hover {
        background-color: ${props => props.theme.BtnEditColorHover};
        color: ${props => props.theme.colorIconHover};
        border: ${props => props.theme.borderBtnEditHover};
    };
`;
