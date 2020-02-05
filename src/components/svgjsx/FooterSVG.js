import React from "react";

const FooterSVG = props => (
  <svg fill="none" {...props}>
    <defs>
      <clipPath id="footerPath">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0s682.54 154.222 1136.01 154.222C1589.47 154.222 2313 0 2313 0v694H0V0z"
          fill="#09F"
        />
      </clipPath>
    </defs>
  </svg>
);

export default FooterSVG;
