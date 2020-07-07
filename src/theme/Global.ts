import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    body{
        background-color: ${({ theme }) => theme.background};
    }

    body, div{
        transition: background-color 0.3s ease-in-out;
        transition: box-shadow 0.3s ease;
    }

    a, p, span, h1, h2, h3{
        transition: color 0.3s ease-in-out;
    }


`

export default GlobalStyle
