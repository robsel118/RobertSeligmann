
import React from 'react'
import styled from 'styled-components'
import Image from '@components/shared/Image'
import Icon, { IconName } from '@components/shared/Icons'
import mixins from '@theme/mixins'
import mediaMin from '@theme/media'
import { fonts, fontSizes } from '@theme/styles'
import { socials } from '@config';


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
         background: ${({ theme }) => theme.primary};
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
         border: 2px solid ${({ theme }) => theme.primary};
       }
     }
     `
  }
  
`

const Statement = styled.div`
  position: relative;

  p{
    ${mediaMin.md`font-size: 1.2rem; max-width: 80%;`}
    a{
      ${mixins.inlineLink}
    }
  }
  h1 {
    ${mixins.heading}
    z-index: 4;
    grid-area: 1 / 1 / -1 / -1;
    margin: 0.5rem 0 0 0;
    ${mixins.heading}
    ${mediaMin.sm`
      grid-column: 1 / 1;
      grid-row: 1 / auto;`
  }

    ${mediaMin.lg`
      grid-column: 1 / 1;
      grid-row: 1 / auto;
    `}

    &::before{
      content: "Hi there, my name is";
      display: block;
      color: ${({ theme }) => theme.primary};
      font-size: ${fontSizes.lg};
    }
  }
  h2{
    color: ${({ theme }) => theme.onBackground};
    font-size: ${fontSizes.xxl};
    margin: 0;
  }
`
const Line = styled.div`
  height: 1px;
  width: 80px;
  background-color: ${({ theme }) => theme.onBackground};
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
