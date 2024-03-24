import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{ margin: 0;
padding: 0;
box-sizing: border-box;
font-family: sans-serif;
}


`;

export const Main = styled.main`
  background-color: #feb706;

  h1 {
    color: white;
    display: flex;
    justify-content: center;
    padding: 5%;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Card = styled.div`
  height: 50vh;
  background-color: white;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;

  button {
    appearance: none;
    background-color: #feb706;
    box-shadow: rgba(27, 31, 35, 0.1) 0 1px 0;
    border: 1px solid rgba(27, 31, 35, 0.15);
    border-radius: 6px;
    box-sizing: border-box;
    color: black;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    display: inline-block;
    line-height: 20px;
    padding: 6px 16px;
    position: relative;
    text-decoration: none;
    user-select: none;
    text-align: center;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: middle;
    white-space: nowrap;
  }


  p {
    font-family: fantasy;
  }

  img {
  }
`;
