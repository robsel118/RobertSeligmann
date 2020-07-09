import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import SEO from '../components/shared/seo'
import { graphql, PageProps } from "gatsby";
import Layout from '../components/shared/Layout'
import Grid from '../components/shared/Grid'
import Intro from '../components/Intro'
import ThemedContext from '../theme/ThemeContext'
import { TextContent, Title, Paragraph } from '../components/shared/Typography'
import GlobalStyle from '../theme/Global'
import Image from '../components/shared/Image'
import Banner, { BannerSubTitle, BannerTitle } from '../components/shared/Banner'

import { Header, Footer } from '../components/Navbar'


type DataProps = {
  barrels: {
    fluid: any
  },
  junction: {
    fluid: any
  },
}



const IndexPage: React.FC<PageProps<DataProps>> = ({ data }) => {
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
      <GlobalStyle />
      <SEO title="Home" />
      <Header />
      <Layout>
        <Grid cols={2}>
          <Intro />
        </Grid>
        <TextContent>
          <Title>
            Some of the things I have done
          </Title>
          <Paragraph>
            While you're here, why not take a look at some of the applications and articles I've spent time on?
          </Paragraph>
        </TextContent>
        <Banner alignment="left">
          <Image title="Sake Barrels" fluid={data.barrels.fluid} />
          <div>
            <BannerTitle>Working in Matsumoto, Japan</BannerTitle>
            <BannerSubTitle>Summer internship in the Land of the Rising Sun</BannerSubTitle>
            <Link to="fst">Read More</Link>
          </div>
        </Banner>
        <Banner alignment="left">
          <Image title="Junction" fluid={data.junction.fluid} />
          <div>
            <BannerTitle>Junction 2019</BannerTitle>
            <BannerSubTitle>Using data to help people reduce food waste and live healthier lives.</BannerSubTitle>
            <Link to="junction-2019">Read More</Link>
          </div>
        </Banner>
      </Layout>
      <Footer />
    </ThemedContext>
  )
}

export const query = graphql`
  {
    barrels: imageSharp(fluid: { originalName: { regex: "/barrels/" } }) {
      fluid(maxWidth: 1200, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    },
    junction: imageSharp(fluid: { originalName: { regex: "/banner-junction/" } }) {
      fluid(maxWidth: 1200, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    },
  }
`

export default IndexPage
