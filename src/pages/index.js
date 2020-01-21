import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/seo";
import churchcrowd from "../images/church-crowd.jpg";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <section id="intro">
      <div className="container">
        <div className="left-section"></div>
        <div className="right-section">
          <img src={churchcrowd} />
        </div>
      </div>
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
