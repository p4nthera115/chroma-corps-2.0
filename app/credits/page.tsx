import Menu from "../components/Menu/Menu";
import CreditsClient from "./CreditsClient";

const CreditsPage = () => {
  return (
    <div className="flex m-0 p-0 max-h-full max-w-full flex-col gap-10 bg-black">
      <Menu />
      <CreditsClient />
    </div>
  );
};

export default CreditsPage;
