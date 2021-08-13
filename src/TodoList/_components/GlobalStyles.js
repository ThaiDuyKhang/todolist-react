import { createGlobalStyle } from "styled-components";
import HelvNeue from "./../../Asset/fonts/helveticaneue.ttf";
import HelvNeueMedium from "./../../Asset/fonts/helveticaneuebold.ttf";
import HelvNeueBold from "./../../Asset/fonts/helveticaneuemedium.ttf";

export const MainBody = createGlobalStyle`
@font-face {
    font-family: 'Helv-neue';
    src: url(${HelvNeue});
}
@font-face {
    font-family: 'Helv-neue-medium';
    src:  url(${HelvNeueMedium});
}
@font-face {
    font-family: 'Helv-neue-bold';
    src: url(${HelvNeueBold});
}

body {
    background-color: ${(props) => props.theme.bodyColor};
    transition: 2s ease-in-out;
    background: ${(props) => props.theme.bgImage};
    background-size:cover;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Helv-neue";
    &::-webkit-scrollbar {
        -webkit-appearance: none;
        width: 5px;
        background: transparent;
      }
    &::-webkit-scrollbar-thumb {
        background: #ff6565;
        border: 1px solid #ff6565;
        border-radius: 5px;
      }
      &::-webkit-scrollbar-thumb:hover {
        background: #ff6565;
      }
}

`;
