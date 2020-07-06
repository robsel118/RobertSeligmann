import React from 'react'
import Layout from '../components/shared/Layout'
import {Header} from '../components/Navbar'
import ThemedContext from '../ThemeContext'
import SEO from '../components/shared/seo'

import '../styles.css'

const FST = () => {
  return (
    <ThemedContext>
      <Layout>
        <SEO title="Fujitsu Software Technology" />
        <Header />
      </Layout>
    </ThemedContext>
  )
}

export default FST
