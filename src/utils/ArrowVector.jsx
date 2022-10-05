import * as React from "react";

const ArrowVector = (props) => (
  <svg
    width={10}
    height={6}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m1 1 4 4 4-4"
      stroke="#696969"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowVector;
