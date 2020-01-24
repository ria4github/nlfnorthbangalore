import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout page="fixed_top">
    <SEO title="Home" />

    <section id="intro">
      <div className="img_grid">
        <div className="left-section"></div>
        <div className="right-section"></div>
      </div>
      <div className="container"></div>
    </section>

    {/* <div
    >
      <section id="intro">
       <div className="intro-container">
         <div id="introCarousel" className="carousel slide">
           <div className="carousel-inner" role="listbox">
            <div className="carousel-background"><img src={churchcrowd} /></div>
            <div className="carousel-container">
              <div className="carousel-content">
                <h2>You Matter to God, You matter to Us</h2>
                <p>Sunday Service @ 9 : 30 AM (English|Kannada)</p>
                <a href="#" className="btn-get-started scrollto">Join Us</a>
              </div>
            </div>
          </div>

        </div>
      </div>
  </section>
    </div>  */}
  </Layout>
);

export default IndexPage;
