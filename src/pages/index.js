import React, { useEffect } from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Grid from "../components/shared/Grid"
import Logo from "../components/Logo"
import Header from "../components/Header/Header"

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
    <div>
      <SEO title="Home" />
      <Layout>
        <Logo />
        <Grid cols={2}>
          <Header />
          <Header />
        </Grid>
      </Layout>
    </div>
  )
}

export default IndexPage
