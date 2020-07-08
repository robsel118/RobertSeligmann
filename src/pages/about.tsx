import React from 'react'
import Layout from '../components/shared/Layout'
import Grid from '../components/shared/Grid'
import { Paragraph, Title } from '../components/shared/Typography'
import {Header} from '../components/Navbar'
import ThemedContext from '../theme/ThemeContext'
import GlobalStyle from '../theme/Global'
import SEO from '../components/shared/seo'
import Resume from '../components/Resume'

const About = () => {
  return (
    <ThemedContext>
      <GlobalStyle/>
      <Layout>
        <SEO title="About" />
        <Header />
        <Grid cols={2}>
          <Title>Hello there, a pleasure to meet you!</Title>
          <Paragraph>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paragraph>
        </Grid>
        <Resume/>
      </Layout>
    </ThemedContext>
  )
}

export default About
