import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    body{
        background-color: ${({ theme }) => theme.background};
        margin: 0;
        transition: background-color 0.3s ease-in-out;
    }

    body, div {
        transition: background-color 0.3s ease-in-out;
        transition: box-shadow 0.3s ease;
    }

    a, p, span{
        transition: color 0.3s ease-in-out;
    }


`

export default GlobalStyle
