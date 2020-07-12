import React from 'react'
import Layout from '../components/shared/Layout'
import Content from '../components/shared/Content'
import Grid from '../components/shared/Grid'
import Stack from '../components/shared/Stack'
import { Paragraph, Title, TextContent } from '../components/shared/Typography'
import { Header, Footer } from '../components/Navbar'
import ThemedContext from '../theme/ThemeContext'
import GlobalStyle from '../theme/Global'
import SEO from '../components/shared/seo'
import Resume from '../components/Resume'
import { DownloadLink } from '../components/Resume/styles'
import { HighlightedLink } from '../components/shared/Highlight'

const About = () => {
  return (
    <ThemedContext>
      <GlobalStyle />
      <SEO title="About" />
      <Layout>
        <Header />
        <Content>
          
          <hr />
          <Resume />
        </Content>
      </Layout>
    </ThemedContext>
  )
}

export default About
