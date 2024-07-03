import Link from "next/link";
import Menu from "../components/Menu/Menu";
import { HeaderTabs } from "../components/StoryPage/HeaderTabs";

export default function StoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex m-0 p-0 max-h-full max-w-full flex-col gap-10 bg-black text-white">
      <Menu />
      <HeaderTabs />
      {children}
    </div>
  );
}
