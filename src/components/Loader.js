import React from "react";

const Loader = (props) => {
  return (
    <span
      id="Loader"
      className={`${props.static ? "static" : ""} ${
        props.block ? "block" : ""
      } ${props.inline ? "inline" : ""} ${props.skell ? "skell" : ""}`}
      style={{ ...props.style, height: props.skell ? props.skell : "auto" }}
    >
      <span className="inner">
        <svg fill="none" viewBox="0 0 100 100" id="zuy" {...props}>
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="url(#prefix__paint0_linear)"
            strokeWidth={5}
          />
          <defs>
            <linearGradient
              id="prefix__paint0_linear"
              x1={25}
              y1={25}
              x2={25}
              y2={50}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ef6c00" />
              <stop offset={1} stopColor="#da251c" />
            </linearGradient>
          </defs>
        </svg>
      </span>
    </span>
  );
};

export default Loader;
