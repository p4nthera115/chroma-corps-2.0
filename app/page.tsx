import { LoadingScreen } from "./components/Loading/LoadingScreen";
import { ComingSoon } from "./ComingSoon";
import Navbar from "./components/Menu/Menu";
import Home from "./Home";

export default function page() {
  return (
    <div className="flex m-0 p-0 max-h-full max-w-full flex-col">
      {/* <LoadingScreen /> */}
      <Home />
      <Navbar />
    </div>
  );
}
