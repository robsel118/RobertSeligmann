import { createGlobalStyle } from 'styled-components'
import { fonts } from './styles'

const GlobalStyle = createGlobalStyle`

    body{
        font-family: ${fonts.muli};
        background-color: ${({ theme }) => theme.background};
        margin: 0;
        padding: 0;
        transition:background 0.3s ease-in-out;
        text-rendering: optimizeLegibility;
    }

    div {
        transition: background-color 0.3s ease-in-out;
        transition: box-shadow 0.3s ease-in-out;
    }

    a, p, span, li, h1, h2{
        transition: color 0.3s ease-in-out, border 0.3s ease-in-out;        
        color: ${({ theme }) => theme.onBackground};
    }

    ul{
        list-style: none;
    }

    a {
        font-family: ${fonts.roboto};
        color: ${({ theme }) => theme.onBackground};
        text-decoration: none;
        &:hover{
            color: ${({ theme }) => theme.onBackgroundHover};
            transition: color 0.3s ease-in-out;
        }
        & > svg {
            cursor: pointer;
            transition: all 0.3s ease-in-out;
            stroke: ${({ theme }) => theme.onBackground};
            stroke-width: 1.5px;
        }
        &:hover > svg{
            /* transform: translateY(-3px); */
            stroke-width: 2px;
            stroke:  ${({ theme }) => theme.onBackgroundHover};
        }
    }
  

`

export default GlobalStyle
