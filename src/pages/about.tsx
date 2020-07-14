import React from 'react'
import { graphql, PageProps } from "gatsby";

import Layout from '@components/shared/Layout'
import Content from '@components/shared/Content'
import Header from '@components/Header'
import About from '@sections/About'
import ThemedContext from '../theme/ThemeContext'
import GlobalStyle from '../theme/Global'
import SEO from '@components/shared/seo'
// import Resume from '@components/Resume'
import Resume, { ResumeProps} from '@sections/Resume'
import Sidebar from '@components/shared/Sidebar';

interface DataProps extends ResumeProps {
  about: any,

}

const AboutPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  console.log(data)
  return (
    <ThemedContext>
      <GlobalStyle />
      <SEO title="About" />
      <Layout>
        <Header />
        <Content>
        <About about={data.about.edges}/>
          {/* <hr /> */}
          <Resume educations={data.educations} jobs={data.jobs} extras={data.extras} skills={data.skills}/>
        </Content>
      <Sidebar/>
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
            title
            linkToResume
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
            position
            company
            range
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
            school
            range
            location
          }
          html
        }
      }
    },
    extras:allMarkdownRemark(
      filter: {fileAbsolutePath: { regex: "/extras/" }}
      sort: { fields: [frontmatter___date], order: DESC }
      ){
      edges {
        node {
          frontmatter{
            date
            name
            role
            mention
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
