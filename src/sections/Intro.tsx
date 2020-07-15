
import React from 'react'
import styled from 'styled-components'
import Image from '@components/shared/Image'
import Icon from '@components/shared/Icons'
import mixins from '@theme/mixins'
import mediaMin from '@theme/media'
import { fonts, themes } from '@theme/styles'
import { socials } from '@config';

const Headline = styled.h1`
  font-family: ${fonts.muli};
  z-index: 4;
  color: ${({theme}) => theme.onBackground};
  filter: blur(0.2px);
  grid-area: 1 / 1 / -1 / -1;
  
  ${mixins.heading}
  ${mediaMin.sm`
    grid-column: 1 / 1;
    grid-row: 1 / auto;`
  }

  ${mediaMin.lg`
    grid-column: 1 / 1;
    grid-row: 1 / auto;
  `}
`
 const CTA = styled.div`
 ${mediaMin.sm`
    grid-column: 1 / -1;
    grid-row: 2 / auto;
    `
  }
  ${mediaMin.lg`
    grid-column: 1 / -1;
    grid-row: 2 / auto;`
  }
`

const IntroTextContainer = styled.div`
 display: flex;
 flex-direction: column;
 
`

const IntroContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  ${mediaMin.sm`
    grid-template-columns: 60% 40%;
    grid-column-gap: 1rem;
  `
  }
    
`

const IntroWrapper = styled.div`
  ${mixins.flexCenter};
  width: 100%;
  min-height: calc(100vmin - 64px);
  position: relative;

`
   
const ImageContainer = styled.div`
   z-index: 5;
   position: relative;
   filter: contrast(90%);

   & > div {

       img {
         background: ${({theme}) => theme.primary};
       }
   }
   ${mediaMin.sm`

     & > div {
       overflow: visible !important;
       &::before {
         position: absolute;
         content: '';
         display: block;
         top: 1rem;
         left: 1rem;
         height: 100%;
         width: 100%;
         border: 2px solid ${({theme})=> theme.primary};

       }
     }
     `
   }
  
`
   
const Statement = styled.div`
  position: relative;
  max-width: 75%;

  p{
    ${mediaMin.md`font-size: 1.2rem;`}
    a{
      ${mixins.inlineLink}
    }
  }
`
const Line = styled.div`
  height: 1px;
  width: 80px;
  background-color: ${({theme}) => theme.onBackground};
`

const SocialContainer = styled.div`
  display: table;
  padding: 1rem 0;
  a {
    margin-right: 0.8rem;
  }
`



export interface IntroProps {
  intro: {
    edges:[
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
  const { welcomeMessage, profilePic } = introduction.frontmatter;

  return (<section id="introduction">
      <IntroWrapper>
    <IntroContainer>
        <IntroTextContainer>
          <Headline>
            {welcomeMessage}
          </Headline>
        <CTA>
            <Statement dangerouslySetInnerHTML={{__html: intro.edges[0].node.html}}/>

            <Line />
            <SocialContainer>
              {socials.map((social: Record<string, string>, index: number) => <a key={index} title={`${social.name} Link`} href={social.url} target='_blank' rel='noreferrer' ><Icon name={social.name as IconName} /></a>)}
            </SocialContainer>
          </CTA>

        </IntroTextContainer>
        <ImageContainer>
          <Image fluid={profilePic.childImageSharp.fluid} />
        </ImageContainer>
    </IntroContainer>
      </IntroWrapper>
  </section>)
}

export default Intro
