import React from 'react'
import {  Line, Headline, IntroContainer, ImageContainer,CTA, SocialContainer } from './styles'
import { GitHub, Linkedin, Mail, ChevronsDown } from 'react-feather'
import Image from '../shared/Image'


interface IntroProps {
  picture: any;
}
const Intro: React.FC<IntroProps> = ({ picture }) => (
  <IntroContainer>
    {/* <IntroText> */}
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
      {/* <div style={{ position: 'absolute', bottom: 0}}> */}
      {/* <Line/>
      <SocialContainer>
          <a title="GitHub profile" href='https://github.com/robsel118' target='_blank' rel='noreferrer' ><GitHub/></a>
          <a title="LinkedIn profile" href='https://www.linkedin.com/in/robert-seligmann/' target='_blank' rel='noreferrer'><Linkedin/></a>
          <a title="E-Mail contact" href='mailto:robert.seligmann@protonmail.ch'><Mail/></a>
      </SocialContainer>
      <ChevronsDown size={40}/> 
      </div>
    </IntroText> */}
    <CTA>
    <Line/>
      <SocialContainer>
          <a title="GitHub profile" href='https://github.com/robsel118' target='_blank' rel='noreferrer' ><GitHub/></a>
          <a title="LinkedIn profile" href='https://www.linkedin.com/in/robert-seligmann/' target='_blank' rel='noreferrer'><Linkedin/></a>
          <a title="E-Mail contact" href='mailto:robert.seligmann@protonmail.ch'><Mail/></a>
      </SocialContainer>
    </CTA>
    <ImageContainer>
      <Image fluid={ picture.fluid}/>
    </ImageContainer>
  </IntroContainer>
)

export default Intro
