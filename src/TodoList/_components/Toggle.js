import styled from "styled-components";

export const Toggle = styled.div`
    display: inline-block;
    padding: 3px 2px;
    border-radius: 14px;
    position: fixed;
    border: 1px solid #95a5a6;
    right: -37%;
    left: 105%;
    max-width: 79px;
    top: 11%;

  & label {
    text-align: center;
    font-size: 15px;
    font-weight:100;
    font-family: sans-serif;
    display: inline-block;
    color: #909090;
    position: relative;
    z-index: 2;
    margin: 0;
    text-align: center;
    padding: 5px 10px;
  }

  & input {
    position: absolute;
    z-index: 3;
    opacity: 0;
    cursor: pointer;
    width: 100%;
    height: 100%;
  }

  & span {
    height: 28px;
    width: 89%;
    line-height: 21px;
    border-radius: 11px;
    background: #fff;
    display: block;
    position: absolute;
    left: 22px;
    top: 2px;
    transition: all 0.3s ease-in-out;
  }

  & input[value="1"]:checked ~ span {
    background: #000;
    left: 4px;
    top: 5px;
  }

  & input[value="2"]:checked ~ span {
    background: #FFC107;
    left: 4px;
    top: 36px;
  }
  & input[value="3"]:checked ~ span {
    background: #f984bf;
    left: 4px;
    top: 68px;
  }

  & input[value="1"]:checked + label,
  input[value="3"]:checked + label {
    color: #fff;
  }
  & input[value="2"]:checked + label {
    color: #000;
  }
`;
