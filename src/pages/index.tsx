import React, { useEffect } from 'react'
import { graphql, PageProps } from "gatsby";
import SEO from '@components/shared/seo'
import Layout from '@components/shared/Layout'
import Content from '@components/shared/Content'
import Intro, { IntroProps} from '@sections/Intro'
import ThemedContext from '@theme/ThemeContext'
import Featured, {FeaturedProps}from '@sections/Featured'
import GlobalStyle from '@theme/Global'
import Sidebar from '@components/shared/Sidebar'
import Archive, { ArchiveProps } from '@sections/Archive'
import About, { AboutProps} from '@sections/About'
import Resume, { ResumeProps} from '@sections/Resume'
import Header from '@components/Header'
import Footer from '@components/Footer'

type DataProps =  ArchiveProps & FeaturedProps & IntroProps & AboutProps & ResumeProps

const IndexPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  useEffect(() => {
    console.log(data)
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
          <Intro intro={data.intro} />
          <About about={data.about}/>
          <Resume jobs={data.jobs} />
          <Featured featured={data.featured} />
          <Archive archive={data.archive}/> 
         
        </Content>
        <Sidebar />
        <Footer/>
      </Layout>
    </ThemedContext>
  )
}

export const query = graphql`
  {
    featured:allMdx(
      filter: {fileAbsolutePath: { regex: "/featured/" }}
      sort: { fields: [frontmatter___order], order: ASC }
    ){
      edges {
        node {
          frontmatter{
            title
            description
            github
            internal
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
    intro: allMdx(filter: {
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
          }
          body
        }
      }
    },
    archive:allMdx(
      filter: {fileAbsolutePath: { regex: "/archive/" }}
      sort: { fields: [frontmatter___date], order: DESC }  
    ){
      edges {
        node {
          frontmatter{
            icon
            iconColor
            title
            description
            tags
            external
            internal
            github
          }
          body
        }
      }
    },
    about:allMdx(filter: {
      fileAbsolutePath: { regex: "/about/" }
    }){
      edges {
        node {
          frontmatter{
            photo {
              childImageSharp {
                fluid(maxWidth: 800, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          body
        }
      }
    },
    jobs:allMdx(
      filter: {fileAbsolutePath: { regex: "/jobs/" }}
      sort: { fields: [frontmatter___endDate], order: DESC }
      ){
      edges {
        node {
          frontmatter{
            endDate
            title
            titleExtension
            subTitle
            location
          }
          body
        }
      }
    },  
  }
`

export default IndexPage
