import Menu from "../components/Menu/Menu";
import StoryClient from "./StoryClient";

const StoryPage = () => {
  return (
    <div className="flex m-0 p-0 max-h-full max-w-full flex-col gap-10 bg-black">
      <Menu />
      <StoryClient />
    </div>
  );
};

export default StoryPage;
