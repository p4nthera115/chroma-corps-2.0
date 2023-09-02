import Menu from "../components/Menu/Menu";
import CreditsClient from "./CreditsClient";

const CreditsPage = () => {
  return (
    <div className="flex m-0 p-0 max-h-full max-w-full flex-col gap-10 bg-black">
      <div className="z-[1001]">
        <Menu />
      </div>
      <CreditsClient />
    </div>
  );
};

export default CreditsPage;
