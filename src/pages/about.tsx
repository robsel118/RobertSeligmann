import React from 'react'
import Layout from '../components/shared/Layout'
import Grid from '../components/shared/Grid'
import Stack from '../components/shared/Stack'
import { FlatCard } from '../components/shared/Neumorphic'
import { Paragraph, Title, TextContent } from '../components/shared/Typography'
import { Header } from '../components/Navbar'
import ThemedContext from '../theme/ThemeContext'
import GlobalStyle from '../theme/Global'
import SEO from '../components/shared/seo'
import Resume from '../components/Resume'
import { HighlightedLink } from '../components/shared/Highlight'

const About = () => {
  return (
    <ThemedContext>
      <GlobalStyle />
        <SEO title="About" />
        <Header />
      <Layout>
        <Grid cols={2}>
          <TextContent>
            <Title>Hello there, I'm Robert. Nice to meet you!</Title>
            <Paragraph>
              A soon-to-be graduate of the MSC in Computer Science at <HighlightedLink href="https://www.aalto.fi/en">Aalto University</HighlightedLink>
              , my journey actually began at the <HighlightedLink href="https://www.hevs.ch/en/">HES-SO Valais</HighlightedLink> where I studied Business Information Technology.
              With a hybrid background in business and computer science, I aim to create simple, beautiful, and meaningful digital experiences.
              
            </Paragraph>
            <Paragraph>I am always looking for new challenges and opportunities that will help me learn and grow as a person.</Paragraph>
            <Paragraph>Currently, I am open to new opportunities from freelance work to full-time contract.</Paragraph>
          </TextContent>
        </Grid>
        <hr/>
        <Resume />
      </Layout>
    </ThemedContext>
  )
}

export default About
