import React, { useEffect } from "react"
import SEO from "../components/shared/seo"
import Layout from "../components/shared/Layout"
import Grid from "../components/shared/Grid"
import Logo from "../components/shared/Logo"
import Header from "../components/Header/Header"
import ThemeContext from '../context'

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
    <ThemeContext>
      <SEO title="Home" />
      <Layout>
        <Logo />
        <Grid cols={2}>
          <Header />
          <Header />
        </Grid>
      </Layout>
    </ThemeContext>
  )
}

export default IndexPage
