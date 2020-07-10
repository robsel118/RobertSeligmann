import React from 'react'
import Container from '../shared/Container'
import { IntroSocials, IntroText, Social, Socials, Line, Headline, IntroContainer, ImageContainer, SocialContainer } from './styles'
import { Highlighted } from '../shared/Highlight'
import { GitHub, Linkedin, Mail } from 'react-feather'
import Image from '../shared/Image'

interface SocialButtonProps {
  title: string
  url: string
  classname: string
  children: React.ReactNode
}

const SocialButton: React.FC<SocialButtonProps> = ({
  title,
  url,
  classname,
  children
}) => (
    <a target="_blank" rel="noreferrer" title={title} href={url}>
      <Social>
        <svg
          className={classname}
          width="25"
          height="25"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {children}
        </svg>
      </Social>
    </a>
  )

interface IntroProps {
  picture: any;
}
const Intro: React.FC<IntroProps> = ({ picture }) => (
  <IntroContainer>
    <IntroText>
      <Headline>
        Hi there, I'm Robert. <br /> Software{' '}
          Developer, <br /> student, and freelancer.
      </Headline>
      <Line/>
      <SocialContainer>
          <a title="GitHub profile" href='https://github.com/robsel118' target='_blank' rel='noreferrer' ><GitHub/></a>
          <a title="LinkedIn profile" href='https://www.linkedin.com/in/robert-seligmann/' target='_blank' rel='noreferrer'><Linkedin/></a>
          <a title="E-Mail contact" href='mailto:robert.seligmann@protonmail.ch'><Mail/></a>
      </SocialContainer>
    </IntroText>
    <ImageContainer>
      <Image fluid={ picture.fluid}/>
    </ImageContainer>
  </IntroContainer>
)

export default Intro
