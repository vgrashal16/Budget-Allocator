import * as React from "react"
const Plus = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="none"
    {...props}
  >
    <circle
      cx={25}
      cy={25}
      r={23}
      fill="#3DDC23"
      stroke="#3DDC23"
      strokeWidth={4}
    />
    <rect width={36} height={7} x={7} y={21} fill="#fff" rx={1} />
    <rect
      width={35}
      height={8}
      x={29}
      y={7}
      fill="#fff"
      rx={1}
      transform="rotate(90 29 7)"
    />
  </svg>
)
export default Plus
