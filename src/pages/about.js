import Layout from '../components/layout'
import { Link } from 'gatsby'
import React from 'react'
import SEO from '../components/seo'

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
