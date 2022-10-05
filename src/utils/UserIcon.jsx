import * as React from "react";

const UserIcon = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#a)"
      stroke="#696969"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M5 20a4.447 4.447 0 0 1 4.447-4.447h5.106A4.447 4.447 0 0 1 19 20"
        strokeWidth={1.482}
      />
      <path
        d="M15.005 5.245a4.25 4.25 0 1 1-6.01 6.01 4.25 4.25 0 0 1 6.01-6.01"
        strokeWidth={1.5}
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default UserIcon;
