import React from 'react'
import { graphql, PageProps } from "gatsby";

import Layout from '../components/shared/Layout'
import Content from '../components/shared/Content'
import { Header } from '../components/Navbar'
import About from '@sections/About'
import ThemedContext from '../theme/ThemeContext'
import GlobalStyle from '../theme/Global'
import SEO from '../components/shared/seo'
import Resume from '../components/Resume'

type DataProps = {
  about: any,
  
}

const AboutPage:React.FC<PageProps<DataProps>> = ({data}) => {
  return (
    <ThemedContext>
      <GlobalStyle />
      <SEO title="About" />
      <Layout>
        <Header />
        <Content>
        <About about={data.about.edges}/>
          <hr />
          <Resume />
        </Content>
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
  }
`
export default AboutPage
