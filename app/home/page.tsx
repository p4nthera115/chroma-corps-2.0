"use client";

import { useState } from "react";
import HomeClient from "./HomeClient";
import { LoadingScreen } from "../components/CadetPage/Loading/LoadingScreen";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => setIsLoading(false), 4000);

  return (
    <div>
      {isLoading && <LoadingScreen />}

      <HomeClient />
    </div>
  );
};

export default HomePage;
