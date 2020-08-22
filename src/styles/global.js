import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  
  body {
    font: 300 'Open Sans', Helvetica, arial, sans-serif;
    padding: 20px;
  }

  #root {
    max-width: 800px;
    margin: 0 auto;
  }

  button {
    cursor: pointer;
  }

`;