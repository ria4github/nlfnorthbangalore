import React from "react"
import logo from "../images/logo.svg"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      style={{
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        minHeight: `100vh`,
        background: `#171D29`,
        width: `100%`,
        padding: `30px`,
      }}
    >
      <img src={logo} />
    </div>
  </Layout>
)

export default IndexPage
