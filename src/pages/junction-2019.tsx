import React from 'react'
import { graphql, PageProps } from "gatsby";
import Banner, { BannerTitle, BannerSubTitle } from '../components/shared/Banner'
import { Title, Paragraph, TextContent } from '../components/shared/Typography'
import { HighlightedLink } from '../components/shared/Highlight'
import Grid from '../components/shared/Grid'
import Image from '../components/shared/Image'
import Stack, { ReactStack, AndroidStack, FirebaseStack } from '../components/shared/Stack'
import Layout from '../components/shared/Layout'
import ThemedContext from '../theme/ThemeContext'
import GlobalStyle from '../theme/Global'
import SEO from '../components/shared/seo'
import { Header, Footer } from '../components/Navbar'
import { FlatBorder } from '../components/shared/Neumorphic'

type DataProps = {
  junction: {
    fluid: any
  },
  android: {
    fluid: any
  },
  react: {
    fluid: any
  },
  team: {
    fluid: any
  }
}

const FST: React.FC<PageProps<DataProps>> = ({ data }) => {
  return (
    <ThemedContext>
      <GlobalStyle />
      <SEO title="Junction 2019" />
      <Layout>
        <Header />
        <Banner>
          <Image title="Junction" fluid={data.junction.fluid} />
          <BannerTitle>Junction 2019</BannerTitle>
          <BannerSubTitle>Using data to help people reduce food waste and live healthier lives.</BannerSubTitle>
        </Banner>
        <TextContent>
          <Title>Joining the Sustainability Track</Title>
          <Paragraph>Junction is an annual hackathon gather around 1'500 hackers for a weekend long experience. A place where designers, developers, and other techies team up to create new tech projects in 48 hours.</Paragraph>
          <Paragraph>This time, my friend Matti and I joined to form a team, of all the 8 track we decided to join the sustainability challenge by CGI and K-Group.
               This challenge pushed us invent a novel solution to support people in making daily choices that increases their health, reduces food waste, and support living a more sustainable lifestyle. </Paragraph>
        </TextContent>
        <Grid cols={2}>
          <Stack>
            <ReactStack />
            <FirebaseStack />
            <AndroidStack />
          </Stack>
          <TextContent>
            <Title>Our solution</Title>
            <Paragraph>We tried to improve the clients' spending habits through social interaction and gamification. We build a React.js dash board and an Android application that is served by a Firebase Real-time application.</Paragraph>
            <Paragraph>The application offers weekly challenges to the users, which are define to help the users make more sustainable purchase decisions. On top of helping the user be healtier and smarter in their spending habits, they also benefit from special reward given when completing a challenge.</Paragraph>
            <Paragraph>The system also uses social interactions between users, by doing so, the users will be able to help one another become more mindful and concious about the products that they will buy. </Paragraph>
          </TextContent>
        </Grid>
        <Grid cols={2}>
          <FlatBorder>
            <Image title="Android Mockup" fluid={data.android.fluid} />
          </FlatBorder>
          <FlatBorder>
            <Image title="React Mockup" fluid={data.react.fluid} />
          </FlatBorder>
        </Grid>
        <TextContent>
          <Title>Summary</Title>
          <Paragraph>
            Hackathons are a great way to challenge thyself, being surrounded by such innovative people is an incredible experience. We gave our best effort into delivering a product we tought could really help people become more sustainable.
            The idea and our demonstration was enthousiastically received by the challenge issuers, as a result, we received the 2nd place price of the challenge. An extra big than you to my teammate <HighlightedLink href="https://www.linkedin.com/in/matti-mk/">Matti</HighlightedLink> for the fun experience and for enduring me when I was sleep-deprieved.
          </Paragraph>
        </TextContent>
        <Image title="Matt and I" fluid={data.team.fluid} />
        <Footer />
      </Layout>
    </ThemedContext>
  )
}

export const query = graphql`
  {
    junction: imageSharp(fluid: { originalName: { regex: "/junction-lotus/" } }) {
      fluid(maxWidth: 1200, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    },
    android: imageSharp(fluid: { originalName: { regex: "/junction-android/" } }) {
      fluid(maxWidth: 900, quality: 90) {
        ...GatsbyImageSharpFluid
      }
    },
    react: imageSharp(fluid: { originalName: { regex: "/junction-react/" } }) {
      fluid(maxWidth: 900, quality: 90) {
        ...GatsbyImageSharpFluid
      }
    },
    team: imageSharp(fluid: { originalName: { regex: "/junction-team/" } }) {
      fluid(maxWidth: 1200, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
export default FST
