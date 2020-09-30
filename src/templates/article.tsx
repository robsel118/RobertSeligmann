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
import media from '@theme/media'

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

  h1{
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
