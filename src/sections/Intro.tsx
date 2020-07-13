
import React from 'react'
import styled from 'styled-components'
import { fonts, breakpoints, themes } from '@theme/styles'
import mixins from '@theme/mixins'
import Image from '@components/shared/Image'
import { socials } from '@config';
import mediaMin from '@theme/media'
import Icon from '@components/shared/Icons'

export const Headline = styled.h1`
  font-family: ${fonts.muli};
  color: ${props => props.theme.bw};
  z-index: 4;
  color: black;
  filter: blur(0.2px);
  grid-area: 1 / 1 / -1 / -1;
  
  ${mediaMin.sm`
    font-size: 2rem;
    grid-column: 1 / 1;
    grid-row: 1 / 1;`
  }

  ${mediaMin.lg`
    font-size: 3rem;
    grid-column: 1 / 1;
    grid-row: 1 / 1;
  `}
`
export const CTA = styled.div`
 ${mediaMin.sm`
    grid-column: 1 / -1;
    grid-row: 2 / 2;
    `
  }
  ${mediaMin.lg`
    grid-column: 1 / -1;
    grid-row: 2 / 2;`
  }
`

export const IntroTextContainer = styled.div`
 display: grid;
 grid-template-columns: 1fr;
 grid-template-rows: 1fr 1fr;
 
 @media (min-width: ${breakpoints.sm}) {
   grid-column: 2 / 5;
   grid-row: 2 / -1;
 }
 
 @media (min-width: ${breakpoints.lg}) {
   grid-column: 1 / 6;
   grid-row: 2 / -2;
 }
`

export const IntroContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  
  @media (min-width: ${breakpoints.sm}) {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(4, minmax(100px, 1fr));
  }
  
  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(4, minmax(calc((100vmin - 64px) / 4), 210px));
  }
  
  ${Headline}:nth-child(2) {
    z-index: 9;
    color: white;
    mix-blend-mode: color-dodge;
  }
  ${Headline}:nth-child(3) {
    z-index: 10;
    mix-blend-mode: exclusion;
    color: ${props => (props.theme == themes.light ? 'black' : 'white')};
  }
`
   
export const ImageContainer = styled.div`
   z-index: 5;
   position: relative;
   filter: contrast(90%);
   grid-column: 1 / 1;
   grid-row: 2 / 2;
   @media (min-width: ${breakpoints.sm}) {
     grid-column: 4 / span 2;
     grid-row: 2 / -1;
     & > div {
       overflow: visible !important;
       &::before {
         position: absolute;
         content: '';
         display: block;
         border: 2px solid #06d6a0;
         top: 1.5rem;
         left: 1.5rem;
         height: 100%;
         width: 100%;
       }
     }
   }
   
   @media (min-width: ${breakpoints.lg}) {
     grid-column: 5 /8;
     grid-row: 2 / auto;
   }
`
   
const Statement = styled.div`
position: relative;
  max-width: 75%;
  z-index: 10;
  p{
    font-size: 1.3rem;
    a{
      ${mixins.inlineLink}
    }
  }
`
const Line = styled.div`
  height: 1px;
  width: 80px;
  background-color: gray;
`

export const SocialContainer = styled.div`
  display: table;
  padding: 1rem 0;
  a {
    margin-right: 0.8rem;
  }
`



interface IntroProps {
  intro: [
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
  ],
}

const Intro: React.FC<IntroProps> = ({ intro }) => {
  const introduction = intro[0].node;
  const { welcomeMessage, profilePic } = introduction.frontmatter;

  return (<section id="introduction">
    <IntroContainer>
      <IntroTextContainer>
        <Headline>
          {welcomeMessage}
        </Headline>
        <Headline>
          {welcomeMessage}
        </Headline>
        <Headline>
          {welcomeMessage}
        </Headline>

        <CTA>
          <Statement dangerouslySetInnerHTML={{__html: intro[0].node.html}}/>

          <Line />
          <SocialContainer>
            {socials.map((social: Record<string, string>, index: number) => <a key={index} title={`${social.name} Link`} href={social.url} target='_blank' rel='noreferrer' ><Icon name={social.name} /></a>)}
          </SocialContainer>
        </CTA>

      </IntroTextContainer>
      <ImageContainer>
        <Image fluid={profilePic.childImageSharp.fluid} />
      </ImageContainer>
    </IntroContainer>
  </section>)
}

export default Intro
