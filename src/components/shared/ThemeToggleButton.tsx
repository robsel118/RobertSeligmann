import React from 'react'
import styled from 'styled-components'
import { ThemeContext } from '@theme/ThemeContext'

import { Sun} from 'react-feather'


interface ToggleableSunProps {
  active: boolean
}
const ToggleableSun = styled.span<ToggleableSunProps>`
  cursor: pointer;
  svg{
    path, circle, line {
        stroke: white;
    }
    line{
      opacity: ${props => props.active? '80%': '100%'};
      stroke-width: ${props => props.active? '1px': '2px'};
      transition: all 0.2s ease-in;
    }
  }
  svg:hover {
    path, circle{
        stroke: #06d6a0;
    }
    line{
      opacity: ${props => props.active? '100%': '80%'};
      stroke-width: ${props => props.active? '2px': '1px'};
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
