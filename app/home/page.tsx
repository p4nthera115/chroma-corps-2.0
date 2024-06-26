"use client";

import { useState } from "react";
import HomeClient from "./HomeClient";
import { LoadingScreen } from "../components/Loading/LoadingScreen";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => setIsLoading(false), 4000);

  return (
    <div className={`bg-black text-white ${isLoading && "overflow-hidden"}`}>
      {isLoading && <LoadingScreen />}
      <HomeClient isLoading={isLoading} />
    </div>
  );
};

export default HomePage;
