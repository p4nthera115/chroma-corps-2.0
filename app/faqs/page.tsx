import Menu from "../components/Menu/Menu";
import AboutClient from "./AboutClient";

const AboutPage = () => {
  return (
    <div className="flex m-0 p-0 max-h-full max-w-full flex-col gap-10 bg-black">
      <Menu />
      <AboutClient />
    </div>
  );
};

export default AboutPage;
