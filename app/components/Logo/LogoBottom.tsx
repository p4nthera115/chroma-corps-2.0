// import Image from "next/image";

// export default function LogoBottom() {
//   return (
//     <Image
//       alt="LogoTop"
//       src="/images/LogoBottom.svg"
//       height={200}
//       width={215}
//     />
//   );
// }

import { SVGProps } from "react";

const LogoBottom = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    viewBox="-1 31 333 238"
    width="14.3rem"
    height="13rem"
    {...props}
  >
    <path
      fill={props.fill}
      d="M242.188 0H305c9.941 0 18 7.26 18 16.214V77.51c0 8.955-8.059 16.215-18 16.215h-5v73.462c0 31.93-25.884 57.813-57.813 57.813H57.813C25.884 225 0 199.116 0 167.187V57.812C0 25.884 25.884 0 57.813 0h86.718v123.837c0 1.726 1.4 3.125 3.125 3.125h4.688c1.726 0 3.125-1.399 3.125-3.125V0h86.719Z"
    />
  </svg>
);

export default LogoBottom;
