import { LoadingScreen } from "./components/CadetPage/Loading/LoadingScreen";

const loading = () => {
  return (
    <div className="h-screen w-screen fixed blur-xl flex">
      <img
        src="/images/ChromaCorpsLogoWhite"
        alt="logo"
        className="animate-spin flex justify-center items-center"
      />
    </div>
  );
};

export default loading;
