import styled from 'styled-components'
//----------------button-------------------
export const Button = styled.button`
    apperance:none;
    background-color: ${props => props.theme.BtnBgColor};
    color: ${props => props.theme.BtnTextColor};
    border: ${props => props.theme.borderBtn};
    transition: all .5s;
    padding: .45rem 1.2rem;
    font-size:13px;
    border-radius:${props => props.theme.borderRadiusBtn};
    &:hover {
        color: ${props => props.theme.BtnTextColor};
        background-color:${props => props.theme.BtnUnCheckColorHover};
        border: ${props => props.theme.borderButton};
    };
    // &:disabled{
    //     cursor:no-drop;
    //     background-color: #888;
    //     color: #111;
    //     border-color: #888;
    // }
`;






