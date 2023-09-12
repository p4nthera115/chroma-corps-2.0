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
  menuOpen?: boolean;
}

const KofiWidget: React.FC<kofiProps> = ({ bgColor, textColor, menuOpen }) => {
  useEffect(() => {
    // Ko-fi widget code
    const script = document.createElement("script");
    script.src = "https://storage.ko-fi.com/cdn/scripts/overlay-widget.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Initialize Ko-fi widget
      window.kofiWidgetOverlay.draw("anzuwebdevs", {
        type: "floating-chat",
        "floating-chat.donateButton.text": "Support us",
        "floating-chat.donateButton.background-color": bgColor,
        "floating-chat.donateButton.text-color": textColor,
      });
    };

    console.log(menuOpen);
    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <></>; // This component doesn't render any visible content
};

export default KofiWidget;
