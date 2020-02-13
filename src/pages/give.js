import React, { useState } from "react";
import { FiChevronRight, FiX } from "react-icons/fi";
import Layout from "../components/Layout";
import give_illust from "../images/give_illust.svg";
import online_illust from "../images/online_illust.svg";
import cheque_illust from "../images/cheque_illust.svg";
import { firestore, functions } from "../Firestore";

const GivePage = () => {
  const [formTrig, setFormTrig] = useState("");

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const initialItemValues = {
    giveName: "",
    giveEmail: "",
    givePhone: "",
    giveType: ""
  };

  const [item, setItem] = useState(initialItemValues);
  console.log(item);

  const sendDetails = event => {
    event.preventDefault();
    // console.log(item);
    if (
      item.giveName.length &&
      item.giveEmail.length &&
      item.givePhone.length &&
      item.giveType.length
    ) {
      firestore
        .collection("give_data")
        .doc()
        .set(item)
        .then(() => {
          setItem(initialItemValues);
          setSuccess(
            "Thanks....! We have recieved your request. We will get back to you soon."
          );
        })
        .catch(error => {
          console.error(error);
          setError("Ooops....! Somthing went wrong.");
        });
    }
  };

  const onChange = e => {
    if (e.target) {
      setItem({
        ...item,
        [e.target.name]: e.target.value
      });
    } else {
      setItem({
        ...item,
        giveType: e
      });
    }
  };

  return (
    <Layout page="give">
      <div id="give">
        <div className="container">
          <div className={`row largeSpacing ${formTrig ? "shrink" : ""}`}>
            <div className={`col l6 s12 leftList`}>
              <div className="static">
                <div className="illust">
                  <img alt={give_illust} src={give_illust} />
                </div>
                <h4 className="med-heading-ttl">
                  <span>
                    "For God so loved the world that he gave his one and only
                    Son, that whoever believes in him shall not perish but have
                    eternal life." <small>John 3:16 (NIV)</small>
                  </span>
                </h4>
                <p>
                  Laboris incididunt reprehenderit duis quis esse labore id.
                  Anim et nulla aliqua anim nulla. Dolore esse minim
                  reprehenderit velit minim velit esse nisi elit ut anim nulla
                  sit.
                </p>
              </div>
              <div className="formList">
                {formTrig ? (
                  <form className="card" onSubmit={sendDetails}>
                    <h4 className="main-heading-ttl">
                      <span className="close">
                        <FiX onClick={() => setFormTrig("")} />
                      </span>
                      <span className="title">{formTrig}</span>
                    </h4>
                    <small>We'll send you a mail with our details</small>
                    <div className="formImg">
                      {formTrig === "online" ? (
                        <img alt={online_illust} src={online_illust} />
                      ) : null}
                      {formTrig === "cheque" ? (
                        <img alt={cheque_illust} src={cheque_illust} />
                      ) : null}
                    </div>
                    <div className="form_row labelPlaceholder">
                      <input
                        name="giveName"
                        onChange={e => onChange(e)}
                        id="name"
                        placeholder=" "
                        type="text"
                      />
                      <label htmlFor="name" className="key">
                        Name
                      </label>
                    </div>
                    <div className="form_row labelPlaceholder">
                      <input
                        name="giveEmail"
                        onChange={e => onChange(e)}
                        id="email"
                        placeholder=" "
                        type="text"
                      />
                      <label htmlFor="email" className="key">
                        Email
                      </label>
                    </div>
                    <div className="form_row labelPlaceholder">
                      <input
                        name="givePhone"
                        onChange={e => onChange(e)}
                        id="phone"
                        placeholder=" "
                        type="text"
                      />
                      <label htmlFor="phone" className="key">
                        Phone
                      </label>
                    </div>
                    <div className="form_row">
                      {success && (
                        <span className="wb-alert wb-success">{success}</span>
                      )}
                      {error && (
                        <span className="wb-alert wb-error">{error}</span>
                      )}
                    </div>
                    <div className="form_row">
                      <div className="actions">
                        <button>Submit</button>
                      </div>
                    </div>
                  </form>
                ) : null}
              </div>
            </div>
            <div className={`col l6 s12 rightList }`}>
              <div className="slide">
                <div
                  tabIndex="0"
                  role="button"
                  className={`item online ${
                    formTrig === "online" ? "active" : "inactive"
                  }`}
                  onClick={() => {
                    setFormTrig("online");
                    onChange("online");
                  }}
                >
                  <div className="img_dec_wrap">
                    <img alt={online_illust} src={online_illust}></img>
                    <span>Online Banking</span>
                    <small className="solid">
                      Proceed <FiChevronRight />{" "}
                    </small>
                  </div>
                </div>
                <div
                  className={`item offline ${
                    formTrig === "cheque" ? "active" : "inactive"
                  }`}
                  onClick={() => {
                    setFormTrig("cheque");
                    onChange("cheque");
                  }}
                  tabIndex="0"
                  role="button"
                >
                  <div className="img_dec_wrap">
                    <img alt={cheque_illust} src={cheque_illust}></img>
                    <span>Cheque</span>
                    <small className="solid">
                      Proceed <FiChevronRight />{" "}
                    </small>
                  </div>
                </div>
                <div className="item slideBg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GivePage;
