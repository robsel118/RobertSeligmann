import React from 'react'
import styled from 'styled-components'
import { Sun } from 'react-feather'
import { ThemeContext } from '@theme/ThemeContext'
import mixins from '@theme/mixins'


const ToggleableSun = styled.span<{ active: boolean }>`
  ${mixins.flexCenter};
  width: var(--min-press-size);
  height: var(--min-press-size);
  cursor: pointer;

  svg{
    path, circle, line {
        stroke: var(--cl-text-alt);
        fill:  ${({ active }) => active ?  'transparent': 'var(--cl-text-alt)'};

    }
    line{
      opacity: ${({active}) => active? '80%': '100%'};
      stroke-width: ${({active}) => active? '1px': '2px'};
      transition: opacity 0.2s ease-in, stroke-width 0.2s ease-in;
    }
  }
  svg:hover {
    path, circle{
        stroke: var(--cl-text-main);
        fill:  ${({ active }) => active ?  'var(--cl-text-main)': 'transparent'};
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
