import React from 'react'
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from '@components/shared/seo'
import Layout from '@components/shared/Layout'
import Content from '@components/shared/Content'
import Banner, { BannerTitle, BannerSubTitle } from '@components/shared/Banner'
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
  table {
    width: 100%;
  }

  thead {
    display: none;
  }

  tr{
    ${mixins.grid};
    ${media.laptop`grid-template-columns: repeat(2, 1fr);`};
    margin: 1.5rem 0;
  }

  br{
    content: "";
    margin-bottom: 1em;
    display: block;
  }

  p {
    &, td {
      line-height: 150%;
    }
    a{
      ${mixins.inlineLink};
    }
  }

  h2{
    ${mixins.display};
    ${media.mobile`font-size: var(--fs-h3)`};
    font-size: var(--fs-md);
    margin: 4rem 0 3rem 0;
    & + p {
      max-width: 50rem;
    }
  }

  img{
    box-shadow: none !important;
  }

`

const ArticlePage: React.FC<DataProps> = ({ data: {mdx} }) => {
  const { frontmatter, body } = mdx
  const { title, bannerImage, bannerTitle, bannerSubTitle } = frontmatter
  return (
    <ThemedContext>
      <GlobalStyle />
      <SEO title={title} />
      <Layout>
        <Header />
        <Content>
          {bannerImage && bannerImage.childImageSharp.fluid && <Banner>
            <Image fluid={bannerImage.childImageSharp.fluid} />
            {bannerTitle && <BannerTitle>{bannerTitle}</BannerTitle>}
            {bannerSubTitle && <BannerSubTitle>{bannerSubTitle}</BannerSubTitle>}
          </Banner> }
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
