import React from 'react'
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from '@components/shared/seo'
import Layout from '@components/shared/Layout'
import Content from '@components/shared/Content'
import Image from '@components/shared/Image'
import Grid from '@components/shared/Grid'
import ThemedContext from '@theme/ThemeContext'
import GlobalStyle from '@theme/Global'
import Sidebar from '@components/shared/Sidebar'
import Header from '@components/Header'
import Footer from '@components/Footer'
import mixins from '@theme/mixins'
import media from '@theme/media'

interface DataProps {
  data: {
    mdx: {
      frontmatter: {
        title: string,
        bannerImage: any,
        bannerTitle: string,
        bannerSubTitle: string,
      }
      body: string
    }
  }
}

const ArticleMain = styled.div`

  ${Grid}{
    margin: 3rem 0 
  }


  table{
    min-width:50%;
    margin: 6rem 0;
    tbody{
      tr{
        &:first-child{
          td{
            font-weight: 600;
            font-size: var(--fs-lg);
          }
        }
        td {
          padding-bottom: 1rem;

          a{
            ${mixins.inlineLink};
          }
        }
      }
    }
  }

  p {
    margin: 0;
    a{
      ${mixins.inlineLink};
    }
  }

  h1 {
    font-size: clamp(var(--fs-2xl), 8vw, var(--fs-5xl));
    margin: 0;
    font-weight: bold;
    margin: 4em 0;
    text-align: center;
    strong {
      color: var(--cl-primary);
    }
  }

  h2 {
    ${mixins.display};
    ${media.mobile`font-size: var(--fs-2xl)`};
    font-size: var(--fs-xl);
    margin: 0;
    & + p {
      max-width: 35em;
      line-height: var(--lh-xl);

      br {
        margin-bottom: 1em;
      }
    }
  }

  span.gatsby-resp-image-wrapper{
    box-shadow: none !important;
    margin: 6rem auto 4rem auto !important;
  }

`

const ArticlePage: React.FC<DataProps> = ({ data: {mdx} }) => {
  const { frontmatter, body } = mdx
  const { title } = frontmatter
  return (
    <ThemedContext>
      <GlobalStyle />
      <SEO title={title} />
      <Layout>
        <Header />
        <Content>
          
          <MDXProvider components={{ Grid }}>
            <MDXRenderer components={{ wrapper: ArticleMain }}>{ body }</MDXRenderer>
          </MDXProvider>
        </Content>
        <Sidebar />
        <Footer />
      </Layout>
    </ThemedContext>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    mdx( frontmatter: {
      slug: {eq: $path}
    }) {
      body
      frontmatter{
        title
        bannerTitle
        bannerSubTitle
        bannerImage {
          childImageSharp {
            fluid(maxWidth: 800, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }        
      }
    } 
  }
`;

export default ArticlePage
