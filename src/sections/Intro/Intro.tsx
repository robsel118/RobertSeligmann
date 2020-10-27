
import React from 'react'
import Icon, { IconName } from '@components/shared/Icons'
import Section from '@components/shared/Section'
import { socials } from '@config'
import { MDXRenderer } from "gatsby-plugin-mdx"

import {
  IntroContainer,
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
          body: string
        }
      }
    ]
  },
}

const Intro: React.FC<SectionProps> = ({ intro }) => {
  const introduction = intro.edges[0].node;

  return (<Section id="introduction">
      <IntroContainer>
          <MDXRenderer components={{ wrapper: Statement}}>{introduction.body}</MDXRenderer>

          <SocialContainer>
            {socials.map((social: Record<string, string>, index: number) => <a key={index} title={`${social.name} Link`} href={social.url} target='_blank' rel='noreferrer' ><Icon name={social.name as IconName} /></a>)}
          </SocialContainer>

      </IntroContainer>
  </Section>)
}

export default Intro
