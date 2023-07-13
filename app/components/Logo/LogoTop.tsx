// import Image from "next/image";

// export default function LogoTop() {
//   return (
//     <Image alt="LogoTop" src="/images/LogoTop.svg" height={200} width={200} />
//   );
// }

import * as React from "react";
import { SVGProps } from "react";
const LogoTop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    viewBox="0 -44 300 238"
    width="13rem"
    height="13rem"
    {...props}
  >
    <path
      fill={props.fill}
      d="M57.813 225C25.883 225 0 199.116 0 167.187V57.813C0 25.884 25.884 0 57.813 0h184.375C274.115 0 300 25.884 300 57.813v109.374c0 31.93-25.884 57.813-57.813 57.813H155.47V101.163c0-1.726-1.4-3.125-3.125-3.125h-4.688a3.125 3.125 0 0 0-3.125 3.125V225H57.812Z"
    />
  </svg>
);
export default LogoTop;
