import styled from 'styled-components'

export const ButtonCheck = styled.button`
    apperance:none;
    background-color: transparent;
    color: ${props => props.theme.colorIcon};
    border: ${props => props.theme.borderBtnCheck};
    transition: all .2s;
    position:relative;
    width: 30px;
    height:30px;
    font-size:13px;
    border-radius:${props => props.theme.borderRadiusCircle};
    & > i{
        display:none;
    }
    &:hover {
        background-color: ${props => props.theme.BtnBgColor};
        color: ${props => props.theme.colorIconHover};
        border: ${props => props.theme.borderButton};
        & > i{
            display:contents;
            position: absolute;
            top:0;
            bottom:0;
            left:0;
            right:0;
        }
    };
`;






