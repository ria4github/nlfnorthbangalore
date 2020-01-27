import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import { Link } from "gatsby";
import bible_study from "../images/bible_study.jpg";
import encounter_evening from "../images/encounter_evening.jpg";
import youth_meet from "../images/youth_meet.jpg";

const IndexPage = () => (
  <Layout page="fixed_top">
    <SEO title="Home" />
    <div className="home">
      <section id="intro">
        <div className="img_grid">
          <div className="inner">
            <div className="container">
              <h4 className="main-heading-ttl">
                You matter to god,
                <br />
                You matter to us
              </h4>
              <Link className="button req_btn_style" to="/connect">
                JOIN US
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="sermon section">
        <div className="container">
          <h4 className="med-heading-ttl">SERMON</h4>
          <div className="post">
            <div className="vid">
              <iframe
                src="https://www.youtube.com/embed/n36gNMh0tRM"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="desc">
              <p className="sermonTtl strongTitle">
                "Fruit of the Spirit - Faithfulness"
              </p>
              <p className="author">PS. Manohar</p>
              <button className="req_btn_style">LISTEN HERE</button>
            </div>
          </div>
          <div className="tease">
            <p>
              "We can experience Peace of Jesus once we ask for it. No matter
              how bad our circumstances look,we can experience His peace and
              sleep peacefully even in storms."
            </p>
            <p>
              <Link to="/sermons">Read More...</Link>
            </p>
          </div>
        </div>
      </section>
      <section className="upto section">
        <div className="container">
          <h4 className="med-heading-ttl">WHAT WE ARE UPTO</h4>
          <div className="row">
            <div className="col l4 s12 theList">
              <div className="item">
                <div className="img">
                  <img src={bible_study} />
                </div>
                <div className="desc">
                  <p className="strongTitle">Bible Study : First Principles</p>
                  <p>Join us every Wednesday 7 PM to get deep into the Word</p>
                </div>
              </div>
            </div>
            <div className="col l4 s12 theList">
              <div className="item">
                <div className="img">
                  <img src={encounter_evening} />
                </div>
                <div className="desc">
                  <p className="strongTitle">Encounter Evening</p>
                  <p>
                    Encounter God through spontaneous praise and worship every
                    Friday 7 PM
                  </p>
                </div>
              </div>
            </div>
            <div className="col l4 s12 theList">
              <div className="item">
                <div className="img">
                  <img src={youth_meet} />
                </div>
                <div className="desc">
                  <p className="strongTitle">Youth Meet</p>
                  <p>Every 3rd Saturday of month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="prayerReq section">
        <div className="container">
          <h4 className="med-heading-ttl">NEED PRAYER ?</h4>
          <div className="prayerDesc">
            <p>
              There are times when life is overwhelming, when all we have is
              questions. In those moments, hope can feel far away. The great
              thing about prayer is that it shifts our perspective toward the
              One who stands ready to listen. No matter what you’re facing, we’d
              love to pray with you!
            </p>
            <Link to="/connect" className="button req_btn_style">
              REQUEST PRAYER
            </Link>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
