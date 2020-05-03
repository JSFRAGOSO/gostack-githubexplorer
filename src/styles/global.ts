import { createGlobalStyle } from 'styled-components';
import githubBackGround from '../assets/github-background.svg';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing:border-box;
    }

    body {
        background: #F0F0F9 url(${githubBackGround}) no-repeat 70% top;
        background-size:50%;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
       font: 16px Roboto, sans-serif;
    }

    #root{
        max-Width: 960px;
        margin: 0 auto;
        padding: 40px 20px;
    }


    button{
        cursor:pointer;
    }
`;
