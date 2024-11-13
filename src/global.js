import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Calculator';
        src: url('./assets/fonts/Calculator.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    * {
        font-family: 'Calculator', sans-serif;
        margin: 0;
        padding: 0;
    }
`;
