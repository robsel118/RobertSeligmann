import React, { useEffect } from "react"
import SEO from "../components/shared/seo"
import Layout from "../components/shared/Layout"
import Grid from "../components/shared/Grid"
import Header from "../components/Header/Header"
import ThemedContext from '../ThemeContext'
import Navbar from '../components/Navbar/Navbar'
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
        <Navbar/>
        <Grid cols={2}>
          <Header />
          <Header />
        </Grid>
      </Layout>
    </ThemedContext>
  )
}

export default IndexPage
