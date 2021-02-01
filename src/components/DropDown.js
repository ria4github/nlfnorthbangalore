import React, { useState } from "react";

const DropDown = ({ children, title }) => {
  const [active, setActive] = useState(false);
  return (
    <li className={`dropDown ${active ? "open" : "closed"}`}>
      <label onClick={() => setActive(!active)} className="dropDownTrig">
        {title}
      </label>
      <ul className="dropDownMenu">{children}</ul>
    </li>
  );
};

export default DropDown;
