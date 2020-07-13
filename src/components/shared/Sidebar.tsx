import React from 'react';
import styled from 'styled-components'
import mediaMin from '@theme/media'
import mixins from '@theme/mixins'
import Icon from '@components/shared/Icons'
import { email, socials } from '@config';



const MenuWrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  height: calc(100vh - 64px);
  width: 4rem;
  display: none;
  flex-direction: column;
  align-items:center;
  justify-content: flex-end;
  color: ${props => props.theme.textColor};

  ${mixins.roboto}
  ${mediaMin.md`display: flex;`  }
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
  return (<MenuWrapper>
    {
      socials.map((social: Record<string, string>, index: number) => <LinkWrapper key={index} title={`${social.name} Link`} href={social.url} target='_blank' rel='noreferrer' ><Icon name={social.name}/></LinkWrapper>)
    }
    <Line />
    <LinkWrapper title="E-Mail contact" href={`mailto:${email}`}>{email}</LinkWrapper>
    <Line style={{height: '50px'}}/>
  </MenuWrapper>)
}
export default Sidebar;