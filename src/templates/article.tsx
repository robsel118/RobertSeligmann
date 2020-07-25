import React from 'react'
import styled from 'styled-components';
import { graphql } from 'gatsby';
import SEO from '@components/shared/seo'
import Layout from '@components/shared/Layout'
import Content from '@components/shared/Content'
import Banner, { BannerTitle, BannerSubTitle } from '@components/shared/Banner'
import Image from '@components/shared/Image'
import ThemedContext from '@theme/ThemeContext'
import GlobalStyle from '@theme/Global'
import Sidebar from '@components/shared/Sidebar'
import Header from '@components/Header'
import Footer from '@components/Footer'
import mixins from '@theme/mixins'
import { fontSizes } from '@theme/styles'
import mediaMin from '@theme/media'

interface DataProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string,
        bannerImage?: any,
        bannerTitle: string,
        bannerSubTitle: string,
        isBannerDark: boolean
      }
      html: string
    }
  }
}

const ArticleMain = styled.div`
  blockquote{
    ${mixins.grid()};
    margin: 0;
  }

  p{
    ${mixins.muli};
    a{
      ${mixins.inlineLink};
    }
  }

  h1{
    margin-bottom: 3rem;
    font-size: ${fontSizes.xl};
    ${mixins.teko};
    ${mediaMin.sm`font-size: ${fontSizes.xxl}`};
  }


  img{
    box-shadow: none !important;
  }
  div{
    margin: 4rem 0;
    max-width: 50rem;
  }
  

  .gatsby-resp-image-wrapper{
    height: 100%;
    
  }
  .gatsby-resp-image-background-image{
    background-image: none !important;
    background-color: ${({ theme }) => theme.surface};

  }
  .gatsby-resp-image-link{
    height: 100%;
    display: flex !important;
    flex-direction: column;
    justify-content: center;
  }
  img.gatsby-resp-image-image{
    height: auto !important;
    top: 50% !important;
    margin-top: -50% !important;
  }
`

const ArticlePage: React.FC<DataProps> = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  const { title, bannerImage, bannerTitle, bannerSubTitle, isBannerDark } = frontmatter
  return (
    <ThemedContext>
      <GlobalStyle />
      <SEO title={title} />
      <Layout>
        <Header />
        <Content>
          {bannerImage && bannerImage.childImageSharp.fluid && <Banner isBackgroundDark={isBannerDark}>
            <Image fluid={bannerImage.childImageSharp.fluid} />
            {bannerTitle && <BannerTitle>{bannerTitle}</BannerTitle>}
            {bannerSubTitle && <BannerSubTitle>{bannerSubTitle}</BannerSubTitle>}
          </Banner> }
          <ArticleMain dangerouslySetInnerHTML={{ __html: html }} />
        </Content>
        <Sidebar />
        <Footer />
      </Layout>
    </ThemedContext>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
        bannerImage {
             childImageSharp {
                fluid(maxWidth: 800, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
        }
        bannerTitle
        bannerSubTitle
        isBannerDark
      }
    }
  }
`;

export default ArticlePage
