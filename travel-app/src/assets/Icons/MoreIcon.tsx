import * as React from "react";
const MoreIcon = (props: {}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <rect
      width={2.5}
      height={2.5}
      x={9.75}
      y={9.75}
      fill="#000"
      stroke="#000"
      strokeWidth={0.5}
      rx={1.25}
    />
    <rect
      width={2.5}
      height={2.5}
      x={9.75}
      y={14.75}
      fill="#000"
      stroke="#000"
      strokeWidth={0.5}
      rx={1.25}
    />
    <rect
      width={2.5}
      height={2.5}
      x={9.75}
      y={19.75}
      fill="#000"
      stroke="#000"
      strokeWidth={0.5}
      rx={1.25}
    />
    <path fill="#000" d="M15 10h7v2h-7zM15 15h7v2h-7zM15 20h7v2h-7z" />
  </svg>
);
export default MoreIcon;
