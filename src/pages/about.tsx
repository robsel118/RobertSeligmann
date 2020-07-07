import React from 'react'
import Layout from '../components/shared/Layout'
import {Header} from '../components/Navbar'
import ThemedContext from '../theme/ThemeContext'
import SEO from '../components/shared/seo'


const About = () => {
  return (
    <ThemedContext>
      <Layout>
        <SEO title="About" />
        <Header />
      </Layout>
    </ThemedContext>
  )
}

export default About
