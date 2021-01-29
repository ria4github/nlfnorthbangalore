import React, { useState } from "react";
import Layout from "../components/Layout";
import { GMap } from "../components/GMap";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import connect_illust from "../images/connect_illust.svg";
import { firestore } from "../firebaseConfig";
import Loader from "../components/Loader";

const Connect = () => {
  // console.log(process.env.FIRE_STORE_KEY);

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [doLoad, setDoLoad] = useState(false);

  const initialItemValues = {
    userName: "",
    userMail: "",
    userPhone: "",
    userLifeGroup: "",
    userMessage: "",
  };

  const [item, setItem] = useState(initialItemValues);

  const sendDetails = (event) => {
    event.preventDefault();
    // console.log(item);
    setDoLoad(true);
    if (
      item.userName.length &&
      item.userMail.length &&
      item.userPhone.length &&
      item.userLifeGroup.length &&
      item.userMessage.length
    ) {
      firestore
        .collection("connect_data")
        .doc()
        .set(item)
        .then(() => {
          setDoLoad(false);
          setItem(initialItemValues);
          setSuccess(
            "Thanks....! We have recieved your request. We will get back to you soon."
          );
        })
        .catch((error) => {
          console.error(error);
          setDoLoad(false);
          setError("Ooops....! Somthing went wrong.");
        });
    }
  };

  const onChange = (e) => {
    setSuccess("");
    setError("");
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout>
      <div id="connect">
        <div className="container">
          <div className="row largeSpacing">
            <div className="col l7 s12 leftList" style={{ margin: "auto" }}>
              <div className="flexIt">
                <div className="illust">
                  <img src={connect_illust} alt={connect_illust} />
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
            {/* <div className="col l5 s12 rightList">
              <form className="card" onSubmit={sendDetails}>
                <h4 className="main-heading-ttl">Connect with us</h4>
                <div className="form_row labelPlaceholder">
                  <input
                    value={item.userName}
                    name="userName"
                    onChange={e => onChange( e )}
                    placeholder=" "
                    type="text"
                  />
                  <label htmlFor="name" className="key">
                    Name
                  </label>
                </div>
                <div className="form_row labelPlaceholder">
                  <input
                    value={item.userMail}
                    name="userMail"
                    onChange={e => onChange( e )}
                    placeholder=" "
                    type="text"
                  />
                  <label htmlFor="email" className="key">
                    Email
                  </label>
                </div>
                <div className="form_row labelPlaceholder">
                  <input
                    value={item.userPhone}
                    name="userPhone"
                    onChange={e => onChange( e )}
                    placeholder=" "
                    type="text"
                  />
                  <label htmlFor="phone" className="key">
                    Phone
                  </label>
                </div>
                <div className="form_row labelPlaceholder">
                  <select
                    name="userLifeGroup"
                    value={item.userLifeGroup}
                    onChange={e => onChange( e )}
                  >
                    <option disabled={true} value={""}>
                      Select Life Group
                    </option>
                    <option value="Hebbal">Hebbal</option>
                    <option value="Amruthahalli">Amruthahalli</option>
                    <option value="Vidyaranayapura">Vidyaranayapura</option>
                    <option value="Kogilu">Kogilu</option>
                    <option value="Puttenahalli">Puttenahalli</option>
                  </select>
                </div>
                <div className="form_row">
                  <label htmlFor="msg" className="key">
                    Messege / Prayer Request
                  </label>
                  <textarea
                    value={item.userMessage}
                    name="userMessage"
                    onChange={e => onChange( e )}
                    type="text"
                  />
                </div>
                <div className="form_row">
                  {success && (
                    <span className="wb-alert wb-success">{success}</span>
                  )}
                  {error && <span className="wb-alert wb-error">{error}</span>}
                </div>
                <div className="form_row">
                  <div className="actions">
                    {!item.userName.length ||
                      !item.userMail.length ||
                      !item.userPhone.length ||
                      !item.userLifeGroup.length ||
                      !item.userMessage.length ? (
                        <button disabled>Submit</button>
                      ) : (
                        <button>
                          {doLoad ? <Loader inline /> : null}
                        Submit
                        </button>
                      )}
                  </div>
                </div>
              </form>
            </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Connect;
