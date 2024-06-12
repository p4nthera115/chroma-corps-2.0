"use client";
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
          src="https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/kofi_bg_tag_dark.png"
          alt=""
          height={150}
          width={150}
        />
      </a>
    </div>
  );
};

export default GreyDonateButton;
