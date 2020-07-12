import React, { useEffect } from 'react'
import { graphql, PageProps } from "gatsby";
import SEO from '@components/shared/seo'
import Layout from '@components/shared/Layout'
import Content from '@components/shared/Content'
import Intro from '@components/Intro'
import ThemedContext from '@theme/ThemeContext'
import Projects from '@sections/Projects'
import GlobalStyle from '@theme/Global'
import Image from '@components/shared/Image'
import Sidebar from '@components/shared/Sidebar'

import { Header } from '@components/Navbar'


type DataProps = {
  projects: any,
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
      <Layout>
        <Header />
        <Content>
          <section id='intro'>
            <Intro picture={data.robert} />
          </section>
          <Projects projects={data.projects.edges}/>
        </Content>
       <Sidebar/>
      </Layout>
    </ThemedContext>
  )
}

export const query = graphql`
  {
    projects:allMarkdownRemark(filter: {
      fileAbsolutePath: { regex: "/projects/" }
    }){
      edges {
        node {
          frontmatter{
            title
            description
            external
            github
            blog
            skills
            darkCover
            image {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            } 
          }
        }
      }
    },
    barrels: imageSharp(fluid: { originalName: { regex: "/barrels/" } }) {
      fluid(maxWidth: 1200, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    },
    junction: imageSharp(fluid: { originalName: { regex: "/banner-flutter-travel-ui/" } }) {
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
