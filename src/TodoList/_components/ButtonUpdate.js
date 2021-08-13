import styled from 'styled-components'

export const ButtonUpdate= styled.button`
    apperance:none;
    background-color: ${props => props.theme.BtnEditColor};;
    color: ${props => props.theme.colorIconHover};
    border: ${props => props.theme.borderBtnEdit};
    transition: all .2s;
    padding: .45rem 1rem;
    font-size:13px;
    border-radius:${props => props.theme.borderRadiusBtn};
    &:hover {
        background-color: ${props => props.theme.BtnEditColorHover};
        color: ${props => props.theme.colorIconHover};
        border: ${props => props.theme.borderBtnEditHover};
        
    };
    &:disabled{
        cursor:no-drop;
        background-color: #888;
        color: #111;
        border-color: #888;
    }
`;
