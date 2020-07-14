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
        color: ${({ theme }) => theme.textColor};
    }

    a {
        font-family: ${fonts.roboto};
        color: ${props => props.theme.linkColor};
        text-decoration: none;
        &:hover{
            color: ${({ theme }) => theme.linkColorHover};

        }
        & > svg {
            transition: all 0.3s ease-in-out;
            cursor: pointer;
            stroke: ${({ theme }) => theme.linkColor};
        }
        &:hover > svg{
            /* transform: translateY(-3px); */
            stroke:  ${({ theme }) => theme.linkColorHover};
        }
    }
  

`

export default GlobalStyle
