import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import { Link } from "gatsby";

import ModernLine from "../components/ModernLine";
import pastorTeam from "../images/pastorTeam.png";

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
      <section className="about section">
        <div className="container">
          <div className="row XLSpacing middle">
            <div className="col l6 s12 right-align">
              <h4 className="main-heading-ttl">ABOUT US</h4>
              <p className="strongTitle">
                We are group of people from all walks of life who are being
                transformed by Jesus Christ passionate about sharing his love by
                caring for each other.
              </p>
              <Link to="/about" className="readmore">
                Read More
              </Link>
              <ModernLine invert />
            </div>
            <div className="col l6 s12">
              <p className="strongTitle">Join us every Sunday</p>
              <p className="solid">Kannada : 8:30 AM to 10:00 AM</p>
              <p className="solid">English : 11:00 AM to 12:30 PM</p>
              <p>
                <a
                  target="_blank"
                  className="button plain black small"
                  href="https://goo.gl/maps/TgWKShUqf5Ep2ktz8"
                >
                  GET DIRECTIONS
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="row splitRow">
          <div className="col l6 s12 kids">
            <div className="inWrap">
              <h4 className="main-heading-ttl">KIDS</h4>
              <p>
                We believe that learning about God and having fun are essential
                in Favor Kids. We just don’t babysit your children, but teach
                them how to love Jesus and become world changers!
              </p>
            </div>
          </div>
          <div className="col l6 s12 youth">
            <div className="inWrap">
              <h4 className="main-heading-ttl">YOUTH</h4>
              <p>
                Being young doesn’t mean you can’t impact the world. Big things
                start out small. Being part of the youth is having the chance to
                make Jesus known, go all out for Him and still have fun. We are
                young, we are wild, and we love Jesus.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="ministries section">
        <div className="container">
          <div className="innerWrap">
            <h4 className="main-heading-ttl">Ministries</h4>
            <div className="row">
              <div className="col l3 s9">
                <div className="card">
                  <div className="bsdy cardimg"></div>
                  <p className="strongTitle">Bible Study</p>
                  <p className="cardDesc">
                    Join us every Wednesday 7 PM to get deep into the Word
                  </p>
                </div>
              </div>
              <div className="col l3 s9">
                <div className="card">
                  <div className="enc_eve cardimg"></div>
                  <p className="strongTitle">Encounter Evening</p>
                  <p className="cardDesc">
                    Join us every Wednesday 7 PM to get deep into the Word
                  </p>
                </div>
              </div>
              <div className="col l3 s9">
                <div className="card">
                  <div className="youth_meet cardimg"></div>
                  <p className="strongTitle">Life Group</p>
                  <p className="cardDesc">
                    Join us every Wednesday 7 PM to get deep into the Word
                  </p>
                </div>
              </div>
            </div>
            <div className="flexIt hcenter">
              <Link to="/about" className="readmore">
                Know More >>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="team section">
        <div className="row">
          <div className="col l8 s12">
            <h4 className="main-heading-ttl">TEAM</h4>
            <p className="strongTitle">
              Pastor Manohar and his loving wife Hima Bindu, love Christ and are
              passionate about people. They have energetic little boy Johan.
              Pastor Manohar graduated from Southern Asia Bible College in the
              Year, 2008 after completing his M.Div. Since then he has been
              serving the Lord with New Life Fellowship City Church, Bangalore,
              where Hima joined him in 2011. In March 2016, the Lord has led
              them & the leadership to begin a satellite church in Yelahanka New
              Town in line with the overall vision of the organisation to plant
              churches that will result in transformation of lives.
            </p>
            <ModernLine invert />
          </div>
          <div className="col l4 s12">
            <div className="clip redBg">
              <img src={pastorTeam} />
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
