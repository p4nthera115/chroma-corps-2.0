"use client";
import { LoadingScreen } from "./components/CadetPage/Loading/LoadingScreen";
import { useState } from "react";
import Home from "./home/page";

export default function page() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => setIsLoading(false), 4000);
  return (
    <div className=" m-0 p-0  ">
      {isLoading && <LoadingScreen />}

      <Home />
    </div>
  );
}
