import { LoadingScreen } from "./components/Loading/LoadingScreen";
import { ComingSoon } from "./ComingSoon";
import Navbar from "./components/Menu/Menu";

export default function page() {
  return (
    <div className="flex m-0 p-0 max-h-full max-w-full flex-row gap-10">
      {/* <LoadingScreen /> */}
      <ComingSoon />
      <Navbar />
    </div>
  );
}
