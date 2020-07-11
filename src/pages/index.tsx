import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import SEO from '../components/shared/seo'
import { graphql, PageProps } from "gatsby";
import Layout from '../components/shared/Layout'
import Grid from '../components/shared/Grid'
import { ProjectContainer, ProjectDescription, ProjectImage, DescriptionTitle, DescriptionText, DescriptionTechList, DescriptionLinks } from '../components/Project/styles'
import Intro from '../components/Intro'
import {GitHub, Archive} from 'react-feather'
import ThemedContext from '../theme/ThemeContext'
import { TextContent, Title, Paragraph } from '../components/shared/Typography'
import GlobalStyle from '../theme/Global'
import Image from '../components/shared/Image'
import Banner, { BannerSubTitle, BannerTitle, BannerLinks , BorderedButton} from '../components/shared/Banner'

import { Header, Footer } from '../components/Navbar'


type DataProps = {
  barrels: {
    fluid: any
  },
  junction: {
    fluid: any
  },
  robert: {
    fluid: any
  }
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
        <Intro picture={data.robert}/>
        <TextContent>
          <Title>
            Some of the things I have done
          </Title>
          <Paragraph>
            While you're here, why not take a look at some of the applications and articles I've spent time on?
          </Paragraph>
        </TextContent>

      {/* <ProjectContainer>
        <ProjectImage>  <Image title="Sake Barrels" fluid={data.barrels.fluid} /></ProjectImage>
        <ProjectDescription>
          <DescriptionTitle>Tests</DescriptionTitle>
          <DescriptionText> A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size.</DescriptionText>
          <DescriptionTechList>
            <span>JAvaScript</span>
            <span>Nodejs</span>
            <span>TypeScript</span>
          </DescriptionTechList>
          <DescriptionLinks>
            <a><GitHub/></a>
            <a><Archive/></a>
          </DescriptionLinks>
          </ProjectDescription>
      </ProjectContainer> */}
   
      
     
       <Banner alignment="left">
          <Image title="Sake Barrels" fluid={data.barrels.fluid} />
          <div>
            <BannerTitle>Working in Matsumoto, Japan</BannerTitle>
            <BannerSubTitle>Summer internship in the Land of the Rising Sun</BannerSubTitle>
            <BorderedButton to="fst">Read More</BorderedButton>
          </div>
        </Banner>
        <Banner alignment="right" >
          <Image title="Junction" fluid={data.junction.fluid} />
          <div>
            <BannerTitle>Junction 2019</BannerTitle>
            <BannerSubTitle>Using data to help people reduce food waste and live healthier lives.</BannerSubTitle>
            <BannerLinks>
              <BorderedButton to="junction-2019">Read More</BorderedButton>
              <a><GitHub/></a>
              <a><Archive/></a>
            </BannerLinks>
          </div>
        </Banner>
        <Banner alignment="right" >
          <Image title="Junction" fluid={data.junction.fluid} />
          <div>
            <BannerTitle>Junction 2019</BannerTitle>
            <BannerSubTitle>Using data to help people reduce food waste and live healthier lives.</BannerSubTitle>
            <BannerLinks>
              <a><GitHub/></a>
              <a><Archive/></a>
            </BannerLinks>
          </div>
        </Banner>
      <Footer />
      </Layout>
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
    robert: imageSharp(fluid: { originalName: { regex: "/me/" } }) {
      fluid(maxWidth: 700, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    },
  }
`

export default IndexPage
