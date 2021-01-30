import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
  FiFacebook,
  FiInstagram,
  FiYoutube,
  FiPhone,
  FiMail,
} from "react-icons/fi";

const Footer = () => {
  return (
    <div id="footer">
      <div className="midFooter">
        <div className="container">
          <div className="row">
            <div className="col l5 s12 addr">
              <p>
                <span className="nameBadge">
                  <small>NEW LIFE FELLOWSHIP YELAHANKA CHURCH</small>
                </span>
                <p>
                  #293, 3rd Floor, Above Kanti Sweets, 1st A Main Rd, A Sector,
                  15th A Cross Rd, Bengaluru, Karnataka - 560064, India.
                </p>
              </p>
            </div>
            <div className="col l4 s12 ctaction">
              <p className="icon flexIt">
                <FiPhone />
                <span>+91-7338554131</span>
              </p>
              <p className="icon flexIt">
                <FiMail />
                <span>newlifeyelahanka@gmail.com</span>
              </p>
            </div>
            <div className="col l3 s12">
              <ul>
                <li>
                  <a
                    className="Facebook"
                    href="//www.facebook.com/newlifeyelahanka/"
                  >
                    <FiFacebook />
                  </a>
                </li>
                <li>
                  <a
                    className="Instagram"
                    href="//www.instagram.com/nlfyelahanka/"
                  >
                    <FiInstagram />
                  </a>
                </li>
                <li>
                  <a
                    className="Youtube"
                    href="//www.youtube.com/c/NewLifeFellowshipYelahanka"
                  >
                    <FiYoutube />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="Whatsapp"
                    href="//wa.me/917338554131?text=Hi%20NLFY%20?"
                  >
                    <FaWhatsapp />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className="copy">
        2021 &copy; nlfyelahanka.com - All rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
