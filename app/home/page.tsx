import { LoadingScreen } from "../components/CadetPage/Loading/LoadingScreen";
import Menu from "../components/Menu/Menu";
import HomeClient from "./HomeClient";

const HomePage = () => {
  return (
    <div className="flex m-0 p-0 max-h-full max-w-full flex-col gap-10">
      <LoadingScreen />
      <Menu />
      <HomeClient />
    </div>
  );
};

export default HomePage;
