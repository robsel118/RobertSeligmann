import React, { useEffect } from 'react'
import SEO from '../components/shared/seo'
import Layout from '../components/shared/Layout'
import Grid from '../components/shared/Grid'
import Intro from '../components/Intro'
import ThemedContext from '../ThemeContext'
import {Header} from '../components/Navbar'
import '../styles.css'

const IndexPage = () => {
  useEffect(() => {
    console.log(`
    #     #                              #######                             ### 
    #     # ###### #      #      ######     #    #    # ###### #####  ###### ### 
    #     # #      #      #      #    #     #    #    # #      #    # #      ### 
    ####### #####  #      #      #    #     #    ###### #####  #    # #####   #  
    #     # #      #      #      #    #     #    #    # #      #####  #          
    #     # #      #      #      #    #     #    #    # #      #   #  #      ### 
    #     # ###### ###### ###### ######     #    #    # ###### #    # ###### ### `)
  })

  return (
    <ThemedContext>
      <SEO title="Home" />
      <Layout>
        <Header />
        <Grid cols={2}>
          <Intro />
          <Intro />
        </Grid>
      </Layout>
    </ThemedContext>
  )
}

export default IndexPage
