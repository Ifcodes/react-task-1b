import * as React from "react";

const ArrowUpIcon = (props) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#a)"
      stroke="#9BFF00"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10.008 3.758V16.25M5.02 8.762 10 3.748l4.981 5.014" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default ArrowUpIcon;
