import React from 'react'
import Container from '../shared/Container'
import { IntroSocials, IntroText, Social, Socials, Line, Headline, IntroContainer, ImageContainer } from './styles'
import { Highlighted } from '../shared/Highlight'
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
    {/* <IntroSocials>
      <Line />
      <Socials>
        <SocialButton
          title="GitHub"
          url="https://github.com/robsel118"
          classname="git"
        >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />        </SocialButton>

        <SocialButton
          title="LinkedIn"
          url="https://www.linkedin.com/in/robert-seligmann/"
          classname="linkedin"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </SocialButton>
      </Socials>
    </IntroSocials> */}
    <IntroText>
      <Headline>
        Hi there, I'm Robert. <br /> Software{' '}
          Developer, <br /> student, and freelancer.
        </Headline>
      <Headline>

        Hi there, I'm Robert. <br /> Software{' '}
        Developer, <br /> student, and freelancer.
        </Headline>
    </IntroText>
    <ImageContainer>
      <Image fluid={ picture.fluid}/>
    </ImageContainer>
  </IntroContainer>
)

export default Intro
