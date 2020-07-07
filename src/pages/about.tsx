import React from 'react'
import Layout from '../components/shared/Layout'
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
        <Resume/>
      </Layout>
    </ThemedContext>
  )
}

export default About
