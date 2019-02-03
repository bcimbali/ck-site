import Layout from '../components/layout'
import React from 'react'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`marketing`, `digital marketing`, `chicago`, `content marketing`]} />
    <h1>Digital + Content Marketing</h1>
  </Layout>
)

export default IndexPage
