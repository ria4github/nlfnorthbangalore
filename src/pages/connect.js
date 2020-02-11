import React, { useState } from "react";
import Layout from "../components/Layout";
import { GMap } from "../components/GMap";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import connect_illust from "../images/connect_illust.svg";
// import { firestore, functions } from "../Firestore";

const Connect = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const initialItemValues = {
    userName: "",
    userMail: "",
    userPhone: "",
    userMessage: ""
  };

  const [item, setItem] = useState(initialItemValues);

  const sendDetails = event => {
    event.preventDefault();
    console.log(item);
    // These lines are new
    // if (
    //   item.userName.length &&
    //   item.userMail.length &&
    //   item.userPhone.length &&
    //   item.userMessage.length
    // ) {
    //   firestore
    //     .collection("connect_data")
    //     .doc()
    //     .set(item)
    //     .then(() => {
    //       setItem(initialItemValues);
    //       setSuccess(
    //         "Thanks....! We have recieved your request. We will get back to you soon."
    //       );
    //     })
    //     .catch(error => {
    //       console.error(error);
    //       setError("Ooops....! Somthing went wrong.");
    //     });
    // }
  };

  const onChange = e => {
    setItem({
      ...item,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout>
      <div id="connect">
        <div className="container">
          <div className="row largeSpacing">
            <div className="col l7 leftList">
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
            <div className="col l5 rightList">
              <form className="card" onSubmit={sendDetails}>
                <h4 className="main-heading-ttl">
                  We'd love to know you and pray with you !
                </h4>
                <div className="form_row labelPlaceholder">
                  <input
                    value={item.userName}
                    name="userName"
                    onChange={e => onChange(e)}
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
                    onChange={e => onChange(e)}
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
                    onChange={e => onChange(e)}
                    placeholder=" "
                    type="text"
                  />
                  <label htmlFor="phone" className="key">
                    Phone
                  </label>
                </div>
                <div className="form_row">
                  <label htmlFor="msg" className="key">
                    Messege / Prayer Request
                  </label>
                  <textarea
                    value={item.userMessage}
                    name="userMessage"
                    onChange={e => onChange(e)}
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
                    !item.userMessage.length ? (
                      <button disabled>Submit</button>
                    ) : (
                      <button>Submit</button>
                    )}
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

export default Connect;
