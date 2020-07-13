import React, { useEffect } from 'react'
import { graphql, PageProps } from "gatsby";
import SEO from '@components/shared/seo'
import Layout from '@components/shared/Layout'
import Content from '@components/shared/Content'
import Intro from '@sections/Intro'
import ThemedContext from '@theme/ThemeContext'
import Featured from '@sections/Featured'
import GlobalStyle from '@theme/Global'
import Sidebar from '@components/shared/Sidebar'
import Archive, { ArchiveProps } from '@sections/Archive'
import { Header } from '@components/Navbar'


type DataProps = {
  featured: any,
  intro: any,
  barrels: {
    fluid: any
  },
  junction: {
    fluid: any
  },
  robert: {
    fluid: any
  }
  archive: ArchiveProps.edges
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
          <Intro intro={data.intro.edges} />
          <Featured featured={data.featured.edges} />
          <Archive archive={data.archive.edges}/>
        </Content>
       <Sidebar/>
      </Layout>
    </ThemedContext>
  )
}

export const query = graphql`
  {
    featured:allMarkdownRemark(filter: {
      fileAbsolutePath: { regex: "/featured/" }
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
    intro:allMarkdownRemark(filter: {
      fileAbsolutePath: { regex: "/intro/" }
    }){
      edges {
        node {
          frontmatter{
            profilePic{
              childImageSharp {
                fluid(maxWidth: 800, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            welcomeMessage
          }
          html
        }
      }
    },
    about:allMarkdownRemark(filter: {
      fileAbsolutePath: { regex: "/about/" }
    }){
      edges {
        node {
          frontmatter{
            title
            linkToResume
          }
          html
        }
      }
    },
    archive:allMarkdownRemark(filter: {
      fileAbsolutePath: { regex: "/archive/" }
    }){
      edges {
        node {
          frontmatter{
            type
            title
            description
            tags
            external
            internal
            github
          }
          html
        }
      }
    },
   
  }
`

export default IndexPage
