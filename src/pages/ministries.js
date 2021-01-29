import React from "react";
import Layout from "../components/Layout";

const Ministries = () => {
  return (
    <Layout>
      <div id="ministries">
        <div className="container">
          <h4 className="main-heading-ttl">Ministries</h4>
          <div className="miniGrid">
            <div className="flipcard">
              <div className="content">
                <div className="front youth">
                  <div className="inner">
                    <h4 className="med-heading-ttl">Youth</h4>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p className="description">
                      Being young doesn’t mean you are no game. Big things start
                      small. Being part of the youth is having the chance to
                      make Jesus known, go all out for Him and still have fun.
                      We are young, we are vibrant, and we love Jesus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flipcard">
              <div className="content">
                <div className="front kids">
                  <div className="inner">
                    <h4 className="med-heading-ttl">Kids</h4>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p className="description">
                      We believe that learning about God and having fun are
                      essential in the Junior Church. We engage our children in
                      the Word and equip them to become world changers!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flipcard">
              <div className="content">
                <div className="front lifegroup">
                  <div className="inner">
                    <h4 className="med-heading-ttl">Life Group</h4>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p className="description">
                      The biblical importance of fellowship is based on the fact
                      that spiritual growth happens best within a community with
                      similar goals. Join us at one of our 5 Life Groups,
                      located across North Bangalore, as we come together for a
                      deeper walk of faith.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flipcard">
              <div className="content ">
                <div className="front care">
                  <div className="inner">
                    <h4 className="med-heading-ttl">Care & Counselling</h4>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p className="description">
                      With the presence of God who strengthens us and
                      understands our pain, we are empowered to face challenges
                      and emerge victorious. Connect with us to know more and to
                      experience the fullness of life that comes with Christ
                      Jesus!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flipcard">
              <div className="content">
                <div className="front worship">
                  <div className="inner">
                    <h4 className="med-heading-ttl">Worship</h4>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p className="description">
                      Worship that connects us to God, an act of faith, is a
                      powerful weapon to our advantage. Its strength is
                      evidenced, crumbling down the walls of Jericho and leading
                      King Jehoshaphat to victory. To encounter breakthroughs,
                      join us in worship, as a part of our Worship Team!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flipcard">
              <div className="content">
                <div className="front prayer">
                  <div className="inner">
                    <h4 className="med-heading-ttl">Prayer</h4>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p className="description">
                      Let’s build our faith with intercession, as you join us
                      for a time of praying over your needs and refreshing in
                      the spirit. We’d love to pray for you, so feel free to
                      join with us!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Ministries;
