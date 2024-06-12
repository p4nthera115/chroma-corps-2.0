import Image from "next/image";

const GreyDonateButton = () => {
  return (
    <div className="fixed bottom-4 left-4 p-4">
      <a
        className="text-5xl"
        id="donation-button"
        href="https://ko-fi.com/anzuwebdevs"
        target="_blank"
      >
        <Image
          src="/images/kofi_bg_tag_dark.png"
          alt=""
          height={150}
          width={150}
        />
      </a>
    </div>
  );
};

export default GreyDonateButton;
