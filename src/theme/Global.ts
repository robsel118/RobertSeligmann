import { createGlobalStyle } from 'styled-components'
import Fonts from './fonts'

const GlobalStyle = createGlobalStyle`
    ${Fonts};

    :root {

        /* Colors */
        --cerulean: #06a5d6;
        --cerulean-lt: #42b4db;
        --cerulean-drk: #008ac3;

        --lime: #06d637;
        --lime-lt: #52dd59;
        --lime-dk: #00b024;

        --onyx: #3f3f3f;
        --onyx-dk: #1e1e1e;
        --lavender: #e5e9ff;
        --lavender-dk: #becdeb;


        --white: #FFFFFF;
        --oxford-blue: #091B34;
        --oxford-blue-lt: #1d2e4b;

        /* Font-family */
        --ff-sans: 'Inter', -apple-system, Arial, Helvetica, sans-serif;
        --ff-mono: 'Fira Code', 'Fira Mono', 'Roboto Mono', Lucida Console, monospace;
        --ff-display: 'Teko', sans-serif;
  

        /* Font-style */
        --fs-main: 1rem;

        --fs-xs: 0.5rem;
        --fs-sm: 0.8rem;
        --fs-md: 1.5rem;
        --fs-h1: 2.5rem;
        --fs-h2: 2rem;
        --fs-h3: 1.8rem;
        --fs-h4: 1.25rem;
        --fs-utlra: 4rem;

        /* letter-spacing */
        --ls-main: 0.02rem;
 
        /* line-height */
        --lh-sd: 110%;
        --lh-md: 130%;
        --lh-lg: 150%;
        --lh-xl: 166%;


        --min-press-size: 44px;

        /* Light theme */
        /* alt background #F2F6FF; */
        --background: #FFFFFF; 
        --background-alt: #fafafa; 
        --cl-primary: var(--cerulean);
        --cl-primary-tint: rgba(6, 165, 214, 0.1);
        --cl-text-main: var(--onyx);
        --cl-text-alt: var(--onyx-dk);
        
        --tab-width: 120px;
        --tab-height: 44px;
    }
    
    /* Dark theme */
    [data-theme="dark"] {
        --background: var(--oxford-blue);
        --background-alt: var(--oxford-blue-lt);
        --cl-primary: var(--lime);
        --cl-primary-tint: rgba(6, 214, 55, 0.2);
        --cl-text-main: var(--lavender);
        --cl-text-alt: var(--lavender-dk);

    }

    body{
        font-family: var(--ff-sans);
        background-color: var(--background);
        margin: 0;
        padding: 0;
        transition:background 0.3s ease-in-out;
        text-rendering: optimizeLegibility;
    }

    div {
        transition: background-color 0.3s ease-in-out;
        transition: box-shadow 0.3s ease-in-out;
    }

    a, p, span, li, h1, h2, h3, td{
        transition: color 0.3s ease-in-out, border 0.3s ease-in-out;        
        color: var(--cl-text-main);
    }

    ul{
        list-style: none;
    }
    a {
        color: var(--cl-text-alt);
        text-decoration: none;
        transition: color 0.3s ease-in-out;
        &:hover{
            color: var(--cl-text-main);
        }
        & > svg {
            cursor: pointer;
            transition: all 0.3s ease-in-out;
            stroke: var(--cl-text-alt);
            stroke-width: 1.5px;
        }
        &:hover > svg{
            transform: translateY(-3px); 
            stroke-width: 2px;
            stroke:  var(--cl-text-main);
        }
    }
  

`

export default GlobalStyle
