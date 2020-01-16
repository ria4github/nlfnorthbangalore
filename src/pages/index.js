import React from "react"
import logo from "../images/logo.svg"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
    >
      <section id="intro">
    <div className="intro-container">
      <div id="introCarousel" className="carousel slide" data-ride="carousel">
           <div className="carousel-inner" role="listbox">

          <div className="carousel-item active">
            <div className="carousel-background"><img src alt=""/></div>
            <div className="carousel-container">
              <div className="carousel-content">
                <h2>You Matter to God, You matter to Us</h2>
                <p>Sunday Service @ 9 : 30 AM (English|Kannada)</p>
                <a href="#featured-services" className="btn-get-started scrollto">Join Us</a>
              </div>
            </div>
          </div>  
          </div>   
        
        </div>
      </div>
  </section>
    </div>
  </Layout>
)

export default IndexPage
