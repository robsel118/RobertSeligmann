import React from 'react'
import { GitHub, Linkedin, Mail } from 'react-feather'
import { Line, Headline, IntroContainer, ImageContainer, CTA, SocialContainer, IntroTextContainer } from './styles'
import Image from '@components/shared/Image'


interface IntroProps {
  picture: any;
}
const Intro: React.FC<IntroProps> = ({ picture }) => (
  <IntroContainer>
    <IntroTextContainer>
      <Headline>
        Hi there, I'm Robert. <br /> Software{' '}
          Developer, <br /> student, and freelancer.
      </Headline>
      <Headline>
        Hi there, I'm Robert. <br /> Software{' '}
          Developer, <br /> student, and freelancer.
      </Headline>
      <Headline>
        Hi there, I'm Robert. <br /> Software{' '}
          Developer, <br /> student, and freelancer.
      </Headline>

      <CTA>
        <Line />
        <SocialContainer>
          <a title="GitHub profile" href='https://github.com/robsel118' target='_blank' rel='noreferrer' ><GitHub /></a>
          <a title="LinkedIn profile" href='https://www.linkedin.com/in/robert-seligmann/' target='_blank' rel='noreferrer'><Linkedin /></a>
          <a title="E-Mail contact" href='mailto:robert.seligmann@protonmail.ch'><Mail /></a>
        </SocialContainer>
      </CTA>

    </IntroTextContainer>
    <ImageContainer>
      <Image fluid={picture.fluid} />
    </ImageContainer>
  </IntroContainer>
)

export default Intro
