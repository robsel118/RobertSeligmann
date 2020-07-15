import React from 'react'
import styled from 'styled-components'
import { ThemeContext } from '@theme/ThemeContext'

import { Sun} from 'react-feather'


const ToggleableSun = styled.span<{active: boolean}>`
  cursor: pointer;
  svg{
    path, circle, line {
        stroke: white;
    }
    line{
      opacity: ${({active}) => active? '80%': '100%'};
      stroke-width: ${({active}) => active? '1px': '2px'};
      transition: opacity 0.2s ease-in, stroke-width 0.2s ease-in;
    }
  }
  svg:hover {
    path, circle{
        stroke: white;
    }
    line{
      opacity: ${({ active }) => active? '100%': '80%'};
      stroke-width: ${({ active }) => active? '2px': '1px'};
    }
  }
  
`
const ThemeToggleButton = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => (
        <ToggleableSun onClick={setTheme} active={theme === 'dark'}>
          <Sun />
        </ToggleableSun>
      )}
    </ThemeContext.Consumer>
  )
}

export default ThemeToggleButton
