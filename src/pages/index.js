import React, { useState, useRef } from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import { Link } from "gatsby";
import ModernLine from "../components/ModernLine";
import pastorTeam from "../images/pastorTeam.png";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";

import Slider from "react-slick";

import { IoCaretForward, IoCloseSharp } from "react-icons/io5";

const IndexPage = () => {
  const [kannada, setKannada] = useState(false);
  const links = ["NTHcawbw25U", "mdU_vIZtbWA"];

  const [showVid, setShowVid] = useState(null);
  const aboutRef = useRef(null);
  const scrollToAbout = () => {
    const theHeight = aboutRef.current.offsetTop;
    window &&
      window.scrollTo({
        top: theHeight - 80,
        left: 0,
        behavior: "smooth",
      });
  };

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    infinite: true,
    swipeToSlide: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    pauseOnHover: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FaCaretRight />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FaCaretLeft />
      </div>
    );
  }
  return (
    <Layout page="fixed_top theHome">
      <SEO title="Home" />
      <div className="home">
        <section id="intro">
          <div className="img_grid">
            <div className="inner">
              <div className="container">
                <div className="left">
                  <h4 className="main-heading-ttl">
                    You matter to god,
                    <br />
                    You matter to us
                  </h4>
                  <a
                    className="button req_btn_style"
                    onClick={() => scrollToAbout()}
                  >
                    JOIN US
                  </a>
                </div>
                <div className="right">
                  <p className="featured">
                    <label
                      htmlFor="tada"
                      className={`fetCheck ${
                        kannada ? "unchecked" : "checked"
                      }`}
                    >
                      <input
                        id="tada"
                        type="checkbox"
                        onChange={() => setKannada(!kannada)}
                      />
                      <span>English</span>
                      <span>Kannada</span>
                    </label>
                    <div
                      className={`sliderCard ${
                        kannada ? "kannada" : "english"
                      }`}
                    >
                      <span className="play">
                        <IoCaretForward />
                      </span>
                      {links.map((url, idx) => (
                        <div key={idx}>
                          <img
                            onClick={() => setShowVid(url)}
                            src={`https://img.youtube.com/vi/${url}/maxresdefault.jpg`}
                          />
                        </div>
                      ))}
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section ref={aboutRef} className="about section">
          <div className="container timings">
            <div className="row XLSpacing middle">
              <div className="col l12 s12">
                <p className="strongTitle">
                  <p className="highlight main-heading-ttl">Join us</p>
                  <span className="solid">Every Sunday</span> for exciting
                  service
                </p>
                <ModernLine />
                <div className="timeLayout">
                  <div className="bloq kannada">
                    <p className="lang">Kannada</p>
                    <p className="from">
                      <small>from</small> 8:30 AM
                    </p>
                    <p className="from">
                      <small>to</small> 10:00 AM
                    </p>
                  </div>
                  <div className="bloq english">
                    <p className="lang">English</p>
                    <p className="from">
                      <small>from</small> 11:00 AM
                    </p>
                    <p className="from">
                      <small>to</small> 12:30 PM
                    </p>
                  </div>
                </div>
                <p className="directions">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button plain black small"
                    href="https://goo.gl/maps/TgWKShUqf5Ep2ktz8"
                  >
                    GET DIRECTIONS
                  </a>
                </p>
              </div>
              {/* <div className="col l12 s12 center-align">
                <h4 className="main-heading-ttl">ABOUT US</h4>
                <p className="strongTitle">
                  We are group of people from all walks of life who are being
                  transformed by Jesus Christ passionate about sharing his love
                  by caring for each other.
                </p>
                <Link to="/about" className="readmore">
                  Read More
                </Link>
                <ModernLine invert />
              </div> */}
            </div>
          </div>
        </section>
        <section className="ministries">
          <div className=" splitRow">
            <div className="titlo">
              <h4 className="transRot">Ministries</h4>
            </div>
            <Slider {...settings}>
              <div className="youth slido">
                <div className="inWrap">
                  <h4 className="main-heading-ttl">Youth</h4>
                  <p>
                    Being young doesn’t mean you are no game. Big things start
                    small. Being part of the youth is having the chance to make
                    Jesus known, go all out for Him and still have fun. We are
                    young, we are vibrant, and we love Jesus.
                  </p>
                </div>
              </div>
              <div className="kids slido">
                <div className="inWrap">
                  <h4 className="main-heading-ttl">Kids</h4>
                  <p>
                    We believe that learning about God and having fun are
                    essential in the Junior Church. We engage our children in
                    the Word and equip them to become world changers!
                  </p>
                </div>
              </div>

              <div className="lifegroup slido">
                <div className="inWrap">
                  <h4 className="main-heading-ttl">Life Group</h4>
                  <p>
                    The biblical importance of fellowship is based on the fact
                    that spiritual growth happens best within a community with
                    similar goals. Join us at one of our 5 Life Groups, located
                    across North Bangalore, as we come together for a deeper
                    walk of faith.
                  </p>
                </div>
              </div>

              <div className="care slido">
                <div className="inWrap">
                  <h4 className="main-heading-ttl">Care & Counselling</h4>
                  <p>
                    With the presence of God who strengthens us and understands
                    our pain, we are empowered to face challenges and emerge
                    victorious. Connect with us to know more and to experience
                    the fullness of life that comes with Christ Jesus!
                  </p>
                </div>
              </div>

              <div className="worship slido">
                <div className="inWrap">
                  <h4 className="main-heading-ttl">Worship</h4>
                  <p>
                    Worship that connects us to God, an act of faith, is a
                    powerful weapon to our advantage. Its strength is evidenced,
                    crumbling down the walls of Jericho and leading King
                    Jehoshaphat to victory. To encounter breakthroughs, join us
                    in worship, as a part of our Worship Team!
                  </p>
                </div>
              </div>

              <div className="prayer slido">
                <div className="inWrap">
                  <h4 className="main-heading-ttl">Prayer</h4>
                  <p>
                    Let’s build our faith with intercession, as you join us for
                    a time of praying over your needs and refreshing in the
                    spirit. We’d love to pray for you, so feel free to join with
                    us!
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </section>
        <section className="ministries events section">
          <div className="container">
            <div className="innerWrap">
              <h4 className="main-heading-ttl">Events</h4>
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
              <h4 className="main-heading-ttl">Our Pastor</h4>
              <p className="strongTitle">
                Pastor Manohar and his wife Hima Bindu love Christ and are
                passionate about people. They are blessed with an energetic
                little boy, Johann. Pastor Manohar graduated from Southern Asia
                Bible College in 2008 after completing his M.Div. Since then, he
                has been serving the Lord with the New Life Fellowship City
                Church, Bangalore, where Hima joined him in 2011. In March 2016,
                the Lord led them & the church leadership to pioneer a church in
                Yelahanka New Town, in line with the overall vision of the
                organisation to plant churches that will result in the
                transformation of lives.
              </p>
              <ModernLine invert />
            </div>
            <div className="col l4 s12">
              <div className="clip redBg">
                <img
                  alt={pastorTeam}
                  title="Pastor Manohar and Family"
                  src={pastorTeam}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      {showVid ? (
        <DialogOverlay
          isOpen={showVid}
          className="dialogOverlay  large"
          onDismiss={() => setShowVid(null)}
        >
          <DialogContent className="dialogContent " aria-label="View Jobs">
            <span className="close">
              <IoCloseSharp onClick={() => setShowVid(null)} />
            </span>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${showVid}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </DialogContent>
        </DialogOverlay>
      ) : null}
    </Layout>
  );
};

export default IndexPage;
