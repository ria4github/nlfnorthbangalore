import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
  FiFacebook,
  FiInstagram,
  FiYoutube,
  FiPhone,
  FiMail
} from "react-icons/fi";
import FooterSVG from "./svgjsx/FooterSVG";

const Footer = () => {
  return (
    <div id="footer">
      <div className="midFooter">
        <div className="container">
          <div className="row">
            <div className="col l4 s12 addr">
              <p>
                NEW LIFE FELLOWSHIP YELAHANKA CHURCH, NO.293, 3RD FLOOR, ABOVE
                KANTI SWEETS, 1ST A MAIN RD, A SECTOR, 15TH A CROSS RD,
                BENGALURU, KARNATAKA-560064, INDIA.
              </p>
            </div>
            <div className="col l4 s12 ctaction">
              <p className="icon flexIt">
                <FiPhone />
                <span>+91-7338554131</span>
              </p>
              <p className="icon flexIt">
                <FiMail />
                <span>NEWLIFEYELAHANKA@GMAIL.COM</span>
              </p>
            </div>
            <div className="col l4 s12">
              <ul>
                <li>
                  <a className="Facebook" href="/">
                    <FiFacebook />
                  </a>
                </li>
                <li>
                  <a className="Instagram" href="/">
                    <FiInstagram />
                  </a>
                </li>
                <li>
                  <a className="Youtube " href="/">
                    <FiYoutube />
                  </a>
                </li>
                <li>
                  <a className="Whatsapp" href="/">
                    <FaWhatsapp />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className="copy">
        2020 &copy; NLFYELAHANKA.COM - All rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
