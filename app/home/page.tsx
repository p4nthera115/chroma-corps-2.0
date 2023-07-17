import Menu from "../components/Menu/Menu";
import HomeClient from "./HomeClient";

const HomePage = () => {
  return (
    <div className="flex m-0 p-0 max-h-full max-w-full flex-col gap-10">
      <Menu />
      <HomeClient />
    </div>
  );
};

export default HomePage;