import React from "react";
import Layout from "../components/Layout";
import { GMap } from "../components/GMap";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import connect_illust from "../images/connect_illust.svg";

const connect = () => {
  return (
    <Layout>
      <div id="connect">
        <div className="container">
          <div className="row largeSpacing">
            <div className="col l7 leftList">
              <div className="flexIt">
                <div className="illust">
                  <img src={connect_illust} />
                </div>

                <ul className="addr_list">
                  <li>New Life Fellowship Yelahanka</li>
                  <li>
                    <FiMapPin /> No 293,3rd Floor,Above Kanti Sweets,1st A Main
                    Rd,A Sector,15th A Cross Rd,Bengaluru,Karnataka - 560064
                  </li>
                  <li>
                    <FiPhone /> +917338554131
                  </li>
                  <li>
                    <FiMail /> newlifeyelahanka@gmail.com
                  </li>
                </ul>
              </div>
              <div id="maps">
                <GMap />
              </div>
            </div>
            <div className="col l5 rightList">
              <form className="card">
                <h4 className="main-heading-ttl">
                  We'd love to know you and pray with you !
                </h4>
                <div className="form_row labelPlaceholder">
                  <input placeholder=" " type="text" />
                  <label className="key">Name</label>
                </div>
                <div className="form_row labelPlaceholder">
                  <input placeholder=" " type="text" />
                  <label className="key">Email</label>
                </div>
                <div className="form_row labelPlaceholder">
                  <input placeholder=" " type="text" />
                  <label className="key">Phone</label>
                </div>
                <div className="form_row">
                  <label className="key">Messege / Prayer Request</label>
                  <textarea type="text" />
                </div>
                <div className="form_row">
                  <div className="actions">
                    <button>Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default connect;
