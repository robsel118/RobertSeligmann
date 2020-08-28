
import React from 'react'
import Image from '@components/shared/Image'
import Icon, { IconName } from '@components/shared/Icons'
import { socials } from '@config'
import {
  IntroContainer,
  IntroTextContainer,
  IntroWrapper,
  ImageContainer,
  Line,
  SocialContainer,
  Statement
} from './styles'



export interface IntroProps {
  intro: {
    edges: [
      {
        node: {
          frontmatter: {
            welcomeMessage: string
            profilePic: {
              childImageSharp: {
                fluid: any;
              }
            }
          }
          html: string
        }
      }
    ]
  },
}

const Intro: React.FC<IntroProps> = ({ intro }) => {
  const introduction = intro.edges[0].node;
  const { profilePic } = introduction.frontmatter;

  return (<section id="introduction">
    <IntroWrapper>
      <IntroContainer>
        <IntroTextContainer>
          <Statement dangerouslySetInnerHTML={{ __html: intro.edges[0].node.html }} />

          <Line />
          <SocialContainer>
            {socials.map((social: Record<string, string>, index: number) => <a key={index} title={`${social.name} Link`} href={social.url} target='_blank' rel='noreferrer' ><Icon name={social.name as IconName} /></a>)}
          </SocialContainer>

        </IntroTextContainer>
        <ImageContainer>
          <Image fluid={profilePic.childImageSharp.fluid} />
        </ImageContainer>
      </IntroContainer>
    </IntroWrapper>
  </section>)
}

export default Intro
