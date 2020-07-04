import React, { useEffect } from "react"
import SEO from "../components/shared/seo"
import Layout from "../components/shared/Layout"
import Grid from "../components/shared/Grid"
import Logo from "../components/shared/Logo"
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
