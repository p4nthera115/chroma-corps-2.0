import { LoadingScreen } from "./components/CadetPage/Loading/LoadingScreen";

const loading = () => {
  return (
    <div className="h-screen w-screen fixed z-[10000000]">
      <div className="h-screen w-screen flex relative justify-center">
        <img
          src="/images/ChromaCorpsLogoWhite.png"
          alt="logo"
          className="animate-spin relative flex h-28 w-28 max-w-min max-h-min self-center justify-center items-center "
        />
      </div>
      <div className="relative h-screen w-screen blur-xl "></div>
    </div>
  );
};

export default loading;
