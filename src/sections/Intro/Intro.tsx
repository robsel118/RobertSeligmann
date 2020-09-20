
import React from 'react'
import Image from '@components/shared/Image'
import Icon, { IconName } from '@components/shared/Icons'
import { socials } from '@config'
import {
  IntroContainer,
  IntroTextContainer,
  IntroWrapper,
  SocialContainer,
  Statement
} from './styles'



export interface SectionProps {
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

const Intro: React.FC<SectionProps> = ({ intro }) => {
  const introduction = intro.edges[0].node;

  return (<section id="introduction">
    <IntroWrapper>
      <IntroContainer>
        <IntroTextContainer>
          <Statement dangerouslySetInnerHTML={{ __html: intro.edges[0].node.html }} />

          <SocialContainer>
            {socials.map((social: Record<string, string>, index: number) => <a key={index} title={`${social.name} Link`} href={social.url} target='_blank' rel='noreferrer' ><Icon name={social.name as IconName} /></a>)}
          </SocialContainer>

        </IntroTextContainer>
      </IntroContainer>
    </IntroWrapper>
  </section>)
}

export default Intro
