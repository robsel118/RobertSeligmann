import React from 'react'
import { FooterContainer, Content, ContentRow, TextWrapper } from './styles'
import {github, linkedin, email} from '@config/'
import Logo from '@components/shared/Logo'

const Footer = () => {
  return <FooterContainer>
    <Content>
      <ContentRow>
        <TextWrapper>
          <h2>Let's Build Something Together</h2>
          <p>Need a developer? Or maybe you just want to chat? Feel free to reach me out.</p>
          <a href={`mailto:${email}`}>{email}</a>
        </TextWrapper>
      </ContentRow>
      <ContentRow>
        <Logo />
        <div>
          <a target="_blank" rel="noreferrer" href={ github }>github</a>
          <a target="_blank" rel="noreferrer" href={ linkedin }>linkedin</a>
        </div>
      </ContentRow>
    </Content>
  </FooterContainer>
}

export default Footer