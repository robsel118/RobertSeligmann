import React from 'react'
import Layout from "../components/shared/Layout"
import Navbar from '../components/Navbar/Navbar'
import ThemedContext from '../ThemeContext'
import SEO from "../components/shared/seo"

import "../styles.css"

const About = () => {

    return (<ThemedContext>
        <Layout>
            <SEO title="About" />
            <Navbar />
        </Layout>
    </ThemedContext>)
}

export default About;