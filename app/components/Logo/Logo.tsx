import Image from "next/image";

interface LogoProps {
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ size }) => {
  const logoSize = size ? size : 100;

  return (
    <div className="flex flex-col gap-1">
      <Image
        alt="LogoTop"
        src="/images/LogoTop.svg"
        height={logoSize}
        width={logoSize}
      />
      <Image
        alt="LogoBottom"
        src="/images/LogoBottom.svg"
        height={logoSize}
        width={logoSize * 1.075}
      />
    </div>
  );
};
