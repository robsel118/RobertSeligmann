import React from 'react'
import styled from 'styled-components'
import { TextContent, Title, Paragraph } from'@components/shared/Typography'
import Grid from '@components/shared/Grid'
import mixins from '@theme/mixins'
// import { DownloadLink } from '@components/Resume/styles'


const AboutText = styled.div`
  p{
    ${mixins.muli}
    a{
      ${mixins.inlineLink}
    }
  }
`
interface AboutProps {
  about: [{
    node :{
      frontmatter: {
        title: string
        linkToResume?: string
      }
      html: string
    }
  }]
}

const About:React.FC<AboutProps> = ({about}) => {
  return (<Grid cols={2}>
    <AboutText dangerouslySetInnerHTML={{__html: about[0].node.html}}>

    </AboutText>
    {/* <TextContent>
      <Title>Hello there, I'm Robert. Nice to meet you!</Title>
      <Paragraph>
        A soon-to-be graduate of the MSC in Computer Science at <HighlightedLink href="https://www.aalto.fi/en">Aalto University</HighlightedLink>
      , my journey actually began at the <HighlightedLink href="https://www.hevs.ch/en/">HES-SO Valais</HighlightedLink> where I studied Business Information Technology.
      With a hybrid background in business and computer science, I aim to create simple, beautiful, and meaningful digital experiences.

    </Paragraph>
      <Paragraph>I am always looking for new challenges and opportunities that will help me learn and grow as a person.</Paragraph>
      <Paragraph>Currently, I am open to new opportunities from freelance work to full-time contract.</Paragraph>
      <Paragraph>Thanks for viewing my portfolio! </Paragraph>
      <DownloadLink href="www.google.com">Download Resume</DownloadLink>
    </TextContent> */}
  </Grid>)
}

export default About