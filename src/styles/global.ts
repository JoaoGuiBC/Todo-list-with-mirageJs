import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #1a142c;
    --text: #d5d4e0;

    --dark-purple: #27203f;
    --light-purple: #372f52;

    --light-gray: #8e8ca7;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 87.5%;
    }
    
    @media (max-width: 720px) {
      font-size: 75%;
    }
  }

  body {
    background: var(--background);
    color: var(--text);
  }

  body, input, button {
    font: 400 16px "Montserrat", sans-serif;
    color: var(--text);
  }
`;
