import React from 'react'
import { graphql, PageProps } from "gatsby";

import Layout from '@components/shared/Layout'
import Content from '@components/shared/Content'
import Header from '@components/Header'
import Footer from '@components/Footer'
import ThemedContext from '../theme/ThemeContext'
import GlobalStyle from '../theme/Global'
import SEO from '@components/shared/seo'
import Sidebar from '@components/shared/Sidebar';
import About, { AboutProps} from '@sections/About/About'
import Resume, { ResumeProps} from '@sections/Resume/Resume'

interface DataProps extends ResumeProps, AboutProps { }

const AboutPage: React.FC<PageProps<DataProps>> = ({ data }) => {

  return (
    <ThemedContext>
      <GlobalStyle />
      <SEO title="About" />
      <Layout>
        <Header />
        <Content>
          <About about={data.about}/>
          <Resume educations={data.educations} jobs={data.jobs} extras={data.extras} skills={data.skills}/>
        </Content>
        <Sidebar />
        <Footer/>
      </Layout>
    </ThemedContext>
  )
}


export const query = graphql`
  {
    about:allMarkdownRemark(filter: {
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
          html
        }
      }
    },
    jobs:allMarkdownRemark(
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
          html
        }
      }
    },
    educations:allMarkdownRemark(
      filter: {fileAbsolutePath: { regex: "/educations/" }}
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
          html
        }
      }
    },
    extras:allMarkdownRemark(
      filter: {fileAbsolutePath: { regex: "/extras/" }}
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
          html
        }
      }
    },
    skills:allMarkdownRemark(
      filter: {fileAbsolutePath: { regex: "/skills/" }}
      ){
      edges {
        node {
          html
        }
      }
    },
  }
`
export default AboutPage
