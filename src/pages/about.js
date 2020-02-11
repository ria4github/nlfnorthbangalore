import React from "react";
import Layout from "../components/Layout";
import ModernLine from "../components/ModernLine";
import team from "../images/team.jpg";
import pastor from "../images/pastorTeam.jpg";
import vision from "../images/vision.jpg";
import values from "../images/values.jpeg";
import faith from "../images/faith.jpeg";
import devine from "../images/devine.jpg";
const about = () => {
  return (
    <Layout page="fixed_top">
      <div id="about">
        <div className="section_structure">
          <div className="section-1 section">
            <div className="container">
              <div className="descPart">
                <h4 className="main-heading-ttl">Who Are We?</h4>
                <p>
                  We are group of people from all walks of life who are being
                  transformed by Jesus Christ passionate about sharing his love
                  by caring for each other. Life is a gift from God that is
                  given to be enjoyed to the fullest. No matter where life has
                  taken you, we believe that there is always hope in Jesus
                  Christ, who is able to bring beauty out of ashes!
                </p>
                <ModernLine />
              </div>
              <div className="theimg">
                <img src={team} alt={team}></img>
              </div>
            </div>
          </div>
          <div className="section-2 section ">
            <div className="container">
              <div className="descPart">
                <h4 className="main-heading-ttl"> OUR PASTOR</h4>
                <p>
                  Pastor Manohar and his loving wife Hima Bindu, love Christ and
                  are passionate about people. They have energetic little boy
                  Johan. Pastor Manohar graduated from Southern Asia Bible
                  College in the Year, 2008 after completing his M.Div. Since
                  then he has been serving the Lord with New Life Fellowship
                  City Church, Bangalore, where Hima joined him in 2011. In
                  March 2016, the Lord has led them & the leadership to begin a
                  satellite church in Yelahanka New Town in line with the
                  overall vision of the organisation to plant churches that will
                  result in transformation of lives.
                </p>
                <ModernLine invert />
              </div>
              <div className="theimg">
                <img src={pastor} alt={pastor}></img>
              </div>
            </div>
          </div>
          <div className="section-3 vision section ">
            <div className="container">
              <div className="descPart">
                <h4 className="main-heading-ttl">VISION & MISSION</h4>
                <p>
                  To establish Christ-centered, Spirit-filled, Bible-based
                  Churches that grow and multiply across nations so as to
                  transform lives and communities.
                </p>
                <p>
                  We are committed to:
                  <ul>
                    <li>
                      <strong>Edify</strong> through Word, Worship, Prayer and
                      Fellowship
                    </li>
                    <li>
                      <strong>Equip</strong> through Discipleship
                    </li>
                    <li>
                      <strong>Envision</strong> through Intercession,
                      Inspiration and Impartation
                    </li>
                    <li>
                      <strong>Empower</strong> through laying on of hands and
                      releasing resources
                    </li>
                    <li>
                      <strong>Enlarge</strong> through community engagement and
                      evangelism
                    </li>
                  </ul>
                </p>
                <ModernLine />
              </div>
              <div className="theimg">
                <img src={vision} alt={vision}></img>
              </div>
            </div>
          </div>

          <div className="section-4 values section ">
            <div className="container">
              <div className="descPart">
                <h4 className="main-heading-ttl">Values</h4>
                <div className="griddo">
                  <div className="gitem">
                    <div className="inner">
                      <strong>We Value Commitment</strong>
                      <ul>
                        <li>To God</li>
                        <li>To the Local Church</li>
                        <li>To the Leadership</li>
                        <li>To the Vision</li>
                      </ul>
                    </div>
                  </div>
                  <div className="gitem">
                    <div className="inner">
                      <strong>We Value People</strong>
                      <ul>
                        <li>By Accepting and Caring</li>
                        <li>By Nurturing Healthy Relationships</li>
                        <li>By Developing God-given Potential</li>
                      </ul>
                    </div>
                  </div>
                  <div className="gitem">
                    <div className="inner">
                      <strong>We Value Doctrinal Purity</strong>
                      <ul>
                        <li>
                          By Believing that the Bible is infallible, inerrant
                          and God inspired
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="gitem">
                    <div className="inner">
                      <strong>We Value Stewardship</strong>
                      <ul>
                        <li>By Being Accountable</li>
                        <li>By Being Responsible</li>
                        <li>By Being Transparent</li>
                        <li>By Having a spirit of Excellence</li>
                      </ul>
                    </div>
                  </div>
                  <div className="gitem">
                    <div className="inner">
                      <strong>We Value Servant Leadership</strong>
                      <ul>
                        <li>We Serve</li>
                        <li>We Respect</li>
                        <li>We Honor</li>
                        <li>We Submit</li>
                      </ul>
                    </div>
                  </div>
                  <div className="gitem">
                    <div className="inner">
                      <strong>We Value Godly Character</strong>
                    </div>
                  </div>
                </div>
                <ModernLine invert />
              </div>
              <div className="theimg">
                <img src={values} alt={values}></img>
              </div>
            </div>
          </div>
          <div className="section-5 section ">
            <div className="container">
              <div className="descPart">
                <h4 className="main-heading-ttl">Statement Of Faith</h4>
                <p>
                  While we realize that we cannot confine God to mere articles
                  of faith, we also recognize the importance of doctrine in
                  these days when people are being led astray by false
                  teachings. To avoid being tossed about by the winds of
                  doctrine, it is important for every believer to have a firm
                  foundation in the basic fundamental doctrines of the
                  Scriptures.
                </p>
                <ModernLine />
              </div>
              <div className="theimg">
                <img src={faith} alt={faith}></img>
              </div>
            </div>
          </div>
          <div className="section-6 devine section ">
            <div className="container">
              <div className="descPart">
                <h4 className="main-heading-ttl">Divine Footprints</h4>
                <p>
                  The new life fellowship (NLF) began in a small way in 1983,
                  when the lord Jesus Christ impressed upon pastor V.M. Samuel
                  and his wife, Somey, to move out of Mumbai and pioneer a
                  church in Mangalore in Karnataka. God enabled them to envision
                  a church planting movement throughout Karnataka, which still
                  remains one of the most unreached states in south India.
                </p>
                <p>
                  In 1987, Pastor V.M. Samuel and Somey handed over the churches
                  in Mangalore to Pastor Donald and Winnie Menezes and shifted
                  base to Bangalore to lead the church planting movement of the
                  New Life Fellowship. They continue to serve their Master as
                  the Senior Pastors of the New Life Fellowship Churches,
                  overseeing more than 120 churches in South India & the Middle
                  East.
                </p>
                <ModernLine invert />
              </div>
              <div className="theimg">
                <img src={devine} alt={devine}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default about;
