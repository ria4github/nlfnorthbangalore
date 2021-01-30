import React, { useState } from "react";
import { FiChevronRight, FiX } from "react-icons/fi";
import Layout from "../components/Layout";
import give_illust from "../images/give_illust.svg";
import online_illust from "../images/online_illust.svg";
import cheque_illust from "../images/cheque_illust.svg";
import { firestore, functions } from "../firebaseConfig";
import Loader from "../components/Loader";
import SEO from "../components/seo";

const GivePage = () => {
  const [formTrig, setFormTrig] = useState("");

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [doLoad, setDoLoad] = useState(false);

  const initialItemValues = {
    giveName: "",
    giveEmail: "",
    givePhone: "",
    giveType: formTrig,
  };

  const [item, setItem] = useState(initialItemValues);
  console.log(item);

  const sendDetails = (event) => {
    event.preventDefault();
    // console.log(item);
    setDoLoad(true);
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
          setDoLoad(false);
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
    if (e.target) {
      setItem({
        ...item,
        [e.target.name]: e.target.value,
      });
    } else {
      setItem({
        ...item,
        giveType: e,
      });
    }
  };

  return (
    <Layout page="give">
      <SEO
        title="Give | NLFY"
        description={`For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." John 3:16 (NIV)`}
      />
      <div id="give">
        <div className="container">
          <div className={`row largeSpacing ${formTrig ? "shrink" : ""}`}>
            <div className={`col l6 s12 leftList`} style={{ margin: "auto" }}>
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
                        onChange={(e) => onChange(e)}
                        id="name"
                        placeholder=" "
                        value={item.giveName}
                        type="text"
                      />
                      <label htmlFor="name" className="key">
                        Name
                      </label>
                    </div>
                    <div className="form_row labelPlaceholder">
                      <input
                        name="giveEmail"
                        onChange={(e) => onChange(e)}
                        id="email"
                        placeholder=" "
                        value={item.giveEmail}
                        type="text"
                      />
                      <label htmlFor="email" className="key">
                        Email
                      </label>
                    </div>
                    <div className="form_row labelPlaceholder">
                      <input
                        name="givePhone"
                        onChange={(e) => onChange(e)}
                        id="phone"
                        placeholder=" "
                        value={item.givePhone}
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
                        {!item.giveName.length ||
                        !item.giveEmail.length ||
                        !item.givePhone.length ||
                        !item.giveType.length ? (
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
                ) : null}
              </div>
            </div>
            {/* <div className={`col l6 s12 rightList `}>
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
            </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GivePage;
