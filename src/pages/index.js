import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Home from '../components/pages/Home'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
  </Layout>
)

export default IndexPage
