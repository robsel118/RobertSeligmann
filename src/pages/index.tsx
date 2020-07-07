import React, { useEffect } from 'react'
import SEO from '../components/shared/seo'
import Layout from '../components/shared/Layout'
import Grid from '../components/shared/Grid'
import Intro from '../components/Intro'
import ThemedContext from '../theme/ThemeContext'
import GlobalStyle from '../theme/Global'

import { Header } from '../components/Navbar'

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
      <GlobalStyle/>
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
