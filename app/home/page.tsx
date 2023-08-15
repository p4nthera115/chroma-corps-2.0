"use client";

import { useState } from "react";
import Menu from "../components/Menu/Menu";
import Border from "./Border";
import Title from "./Title";

const HomePage = () => {
  return (
    <div className="m-0 p-0 max-h-full max-w-full h-screen w-screen bg-[#ffe600]">
      <Border />
      <Title />
    </div>
  );
};

export default HomePage;
