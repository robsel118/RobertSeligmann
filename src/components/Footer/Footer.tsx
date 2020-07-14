import React from 'react'
import { FooterContainer, Content, ContentRow, TextWrapper } from './styles'
import Logo from '@components/shared/Logo'

const Footer = () => {
  return <FooterContainer>
    <Content>
      <ContentRow>
        <TextWrapper>
          <p>Let's Build Something Together</p>
          <p>Need a developer? Or maybe you just want to chat? Feel free to reach me out.</p>
          <a>robert.seligmann@protonmail.ch</a>
        </TextWrapper>
      </ContentRow>
      <ContentRow>
        <Logo />
        <div>
          <a>github</a>
          <a>linkedin</a>
        </div>
      </ContentRow>
    </Content>
  </FooterContainer>
}

export default Footer