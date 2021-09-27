import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "DM Sans";
  }

  html,
  body,
  #__next {
    width: 100%;
    height: 100%;

    font: ${(props) => props.theme.font.dm};


    color: ${(props) => props.theme.gray[100]};
    background: ${(props) => props.theme.gray[900]};
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    color: ${(props) => props.theme.gray[100]};
  }

  p, small {

    font-size: ${(props) => props.theme.size.p};
    color: ${(props) => props.theme.gray[700]}
  }

  button {
    border: 0;
    outline: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`