import React from 'react';
import { GitHub, Linkedin } from 'react-feather'
import styled from 'styled-components'
import { breakpoints, fonts } from '@theme/styles'

const MenuWrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  height: calc(100vh - 64px);
  width: 4rem;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: flex-end;
  font-family: ${fonts.roboto};
  color: ${props => props.theme.textColor};

  @media (max-width: ${breakpoints.md}) {
    display: none;
  }
`
const Line = styled.div`
  height: 80px;
  width: 1px;
  background-color: gray;
`

const LinkWrapper = styled.a`
  text-decoration: none;
  writing-mode: vertical-rl;
  margin: 0.8rem 0.5rem;
`

const Sidebar =()=> {
  return ( <MenuWrapper>
    <LinkWrapper title="GitHub profile" href='https://github.com/robsel118' target='_blank' rel='noreferrer' ><GitHub/></LinkWrapper>
    <LinkWrapper title="LinkedIn profile" href='https://www.linkedin.com/in/robert-seligmann/' target='_blank' rel='noreferrer' ><Linkedin/></LinkWrapper>
    <Line />
    <LinkWrapper title="E-Mail contact" href='mailto:robert.seligmann@protonmail.ch'>robert.seligmann@protonmail.ch</LinkWrapper>
    <Line style={{height: '50px'}}/>
  </MenuWrapper>)
}
export default Sidebar;