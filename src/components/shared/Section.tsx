import React, { useRef } from 'react'
import styled from 'styled-components'
import useOnScreen from '@hooks/useOnScreen';

export const Wrapper = styled.section<{ isOnScreen: boolean }>`
  min-height: 100vmin;
  display: flex;
  justify-content: center;
  flex-direction: column;
  transition: opacity 0.3s ease-in-out;
  opacity: ${props => props.isOnScreen? 1 : 0 };
`
export interface Props  { 
  children: React.ReactNode
}
const Section = ({ children }: Props) => {

  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;
  const onScreen = useOnScreen(ref, 0.1, true);

  return (<Wrapper ref={ref} isOnScreen={onScreen}>
    {children}
  </Wrapper>);
}
export default Section
