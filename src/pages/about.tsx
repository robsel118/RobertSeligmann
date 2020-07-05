import React from 'react'
import Layout from '../components/shared/Layout'
import {Header} from '../components/Navbar'
import ThemedContext from '../ThemeContext'
import SEO from '../components/shared/seo'

import '../styles.css'

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
