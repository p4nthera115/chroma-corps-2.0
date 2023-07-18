"use client";

import { useState } from "react";
import { LoadingScreen } from "../components/CadetPage/Loading/LoadingScreen";
import Menu from "../components/Menu/Menu";
import HomeClient from "./HomeClient";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => setIsLoading(false), 3960);

  return (
    <div className="flex m-0 p-0 max-h-full max-w-full flex-col gap-10">
      {isLoading && <LoadingScreen />}

      {!isLoading && <Menu />}
      <HomeClient />
    </div>
  );
};

export default HomePage;
