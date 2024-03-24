import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{ margin: 0;
padding: 0;
box-sizing: border-box;
font-family: sans-serif;
}

`;

export const Header = styled.header`
  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  div {
    display: flex;
    align-self: center;
    margin: 13px 33px 13px 33px;
  }
`;

export const wrapper = styled.section`
  background-color: #ffc72c;

  display: flex;
  flex-direction: column;
  span {
    color: red;
  }
  h3 {
    font-size: 13px;
  }
  h2 {
    font-size: 40px;
    color: white;
  }
`;

export const Container = styled.section`
  width: 90%;
`;

export const block = styled.div`
  div {
    display: block;
  }
`;
