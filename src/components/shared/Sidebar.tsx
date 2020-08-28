import React from 'react';
import styled from 'styled-components'
import mediaMin from '@theme/media'
import mixins from '@theme/mixins'
import { fontSizes } from '@theme/styles'
import Icon from '@components/shared/Icons'
import { email, socials } from '@config';

const MenuWrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 1rem;
  height: calc(100vh - 64px);

  display: none;
  flex-direction: column;
  align-items:center;
  justify-content: flex-end;
  color: ${({theme}) => theme.onBackground};
  z-index: 99;

  ${mixins.roboto};
  ${mediaMin.tablet`display: flex;`}; 
`
const Line = styled.div<{height?: string}>`
  height: ${({height}) => height || '50px'};
  width: 1px;
  background-color: ${({theme})=> theme.onBackground};
`

const LinkWrapper = styled.a`
  text-decoration: none;
  writing-mode: vertical-rl;
  margin: 0.8rem 0.5rem;
  font-size: ${fontSizes.md};

`

const Sidebar =()=> {
  return (<MenuWrapper>
    {
      socials.map((social: Record<string, string>, index: number) => <LinkWrapper key={index} title={`${social.name} Link`} href={social.url} target='_blank' rel='noreferrer' ><Icon name={social.name}/></LinkWrapper>)
    }
    <Line height="70px"/>
    <LinkWrapper title="E-Mail contact" href={`mailto:${email}`}>{email}</LinkWrapper>
    <Line height="50px"/>
  </MenuWrapper>)
}
export default Sidebar;