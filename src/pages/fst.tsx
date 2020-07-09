import React from 'react'
import { graphql, PageProps } from "gatsby";
import Banner, { BannerTitle, BannerSubTitle } from '../components/shared/Banner'
import { Title, Paragraph, TextContent } from '../components/shared/Typography'
import Grid from '../components/shared/Grid'
import Image from '../components/shared/Image'
import Stack, { VueStack, D3Stack, LodashStack } from '../components/shared/Stack'
import Layout from '../components/shared/Layout'
import ThemedContext from '../theme/ThemeContext'
import GlobalStyle from '../theme/Global'
import SEO from '../components/shared/seo'
import { Header, Footer } from '../components/Navbar'

type DataProps = {
  matsumoto: {
    fluid: any
  },
  fuji: {
    fluid: any
  },
  ideathon: {
    fluid: any
  }
}

const FST: React.FC<PageProps<DataProps>> = ({ data }) => {
  return (
    <ThemedContext>
      <GlobalStyle />
      <SEO title="Fujitsu Software Technology" />
      <Header />
      <Layout>
        <Banner>
          <Image title="Mt. Fuji sunrise" fluid={data.fuji.fluid} />
          <BannerTitle>Working in Matsumoto, Japan</BannerTitle>
          <BannerSubTitle>Summer internship in the Land of the Rising Sun</BannerSubTitle>
        </Banner>
        <TextContent>
          <Title>Working at Fujitsu Software Technologies</Title>
          <Paragraph>I had the opportunty to work with the Fujutsu Software Technologies (FST) team in Matsumoto, Japan. This was an amaying experience where I was pushed beyond my comfort zone.</Paragraph>
          <Paragraph>During the summer, I was pushed and challenged in every aspect of my life, from designing new visualization tools to adapting to a foreign culture.</Paragraph>
          <Paragraph>Prior to arriving there, I had set some personal goals to know what I wanted to improve on. My main priorities was focused on improving my current programming skills and learning from some of the people working for one of the largest IT services provider in Japan.</Paragraph>
        </TextContent>
        <Grid cols={2}>
          <Stack>
            <VueStack />
            <D3Stack />
            <LodashStack />
          </Stack>
          <TextContent>
            <Title>Challenges</Title>
            <Paragraph>This summer was one of the most challenging, yet rewarding, experience I've had. Traveling overseas and experiencing a new culture really expanded my horizons and thought me valuable lessons.</Paragraph>
            <Paragraph>At FST, I developed an interactive visualization tool using D3.JS and Vue.JS. The complex user interactions requested by the client trulty tested my analytical skills and pushed my problem-solving skills to the next level.</Paragraph>
            <Paragraph>The biggest challenge was the communcation barrier. As Matsumoto is closer to country-side city, not many people spoke English inside/outisde of work. It took time and effort to talk with my collegues, which made learning from them a significanlty difficult task.</Paragraph>
          </TextContent>
        </Grid>
        <Grid cols={2}>
          <Image title="Matsumoto Castle" fluid={data.matsumoto.fluid} />
          <Image title="FST Ideathon" fluid={data.ideathon.fluid} />
        </Grid>
        <TextContent>
          <Title>Summary</Title>
          <Paragraph>My experience at FST was not perfect, but it will be something that I will cherish forever, 
            and I want to thank everybody at FST for their kindness and for the time they took to teach me about their wonderful culture. It really showed me how little I knew about the world, which excites me even more as it means that I just have that much more to learn.
          </Paragraph>
        </TextContent>
      </Layout>
      <Footer />
    </ThemedContext>
  )
}

export const query = graphql`
  {
    matsumoto: imageSharp(fluid: { originalName: { regex: "/matsumoto-castle/" } }) {
      fluid(maxWidth: 900, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    },
    fuji: imageSharp(fluid: { originalName: { regex: "/fuji/" } }) {
      fluid(maxWidth: 1200, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    },
    ideathon: imageSharp(fluid: { originalName: { regex: "/fst_ideathon/" } }) {
      fluid(maxWidth: 900, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
export default FST
