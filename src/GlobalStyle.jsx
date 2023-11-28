import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        text-align: center;
        background-color: #ece8e8;
    }

    button {
        padding: 6px 16px;
        border-style: none;
        border-radius: 30px;
        color: white;
        background-color: #6abf75;
    }
`
export default GlobalStyles;