"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    kofiWidgetOverlay: {
      draw(username: string, options: object): void;
    };
  }
}

interface kofiProps {
  bgColor: string;
  textColor: string;
}

const KofiWidget: React.FC<kofiProps> = ({ bgColor, textColor }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://storage.ko-fi.com/cdn/scripts/overlay-widget.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.kofiWidgetOverlay.draw("anzuwebdevs", {
        type: "floating-chat",
        "floating-chat.donateButton.text": "Support us",
        "floating-chat.donateButton.background-color": bgColor,
        "floating-chat.donateButton.text-color": textColor,
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <></>;
};

export default KofiWidget;
