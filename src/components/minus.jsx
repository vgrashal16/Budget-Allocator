import * as React from "react"
const Minus = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="none"
    {...props}
  >
    <circle cx={25} cy={25} r={23} fill="red" stroke="red" strokeWidth={4} />
    <rect width={37} height={7} x={6} y={21} fill="#fff" rx={1} />
  </svg>
)
export default Minus
