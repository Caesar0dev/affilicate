"use client";
import { FC } from "react";
import Link from "next/link";
import { Navbar } from "../_components/navbar";
import { usePathname } from "next/navigation";
import { clsx } from "clsx/lite";
import { HomeIcon, Link2Icon, PieChartIcon, BarChartIcon, DashboardIcon } from "@radix-ui/react-icons";
interface ProtectedLayoutProps {
  children: React.ReactNode;
}

export const Dashboard = ({ children }: ProtectedLayoutProps) => {
  const pathname = usePathname();

  return (
    <div className="h-full w-full flex flex-row overflow-hidden">
      <div className="bg-gray-700 text-white h-screen w-60 min-w-60 space-y-4">
        <div className="w-full bg-gray-800 px-2 py-4">
          <h3 className="text-xl">Affiliate</h3>
        </div>
        <div className="pl-2 pr-1">
          <div
            className={clsx("pl-2 py-2 rounded-sm", pathname === "/dashboard" ? "bg-gray-800" : "hover:bg-gray-400")}
          >
            <Link href="/dashboard" className="flex flex-row space-x-2 items-center">
              <DashboardIcon />
              <div className="flex-grow">Dashboard</div>
            </Link>
          </div>
          <div className="hover:bg-gray-400 pl-2 py-2 rounded-sm">
            <Link href="/urls" className="flex flex-row space-x-2 items-center">
              <BarChartIcon />
              <div className="flex-grow">Affiliate URLs</div>
            </Link>
          </div>
          <div className="hover:bg-gray-400 pl-2 py-2 rounded-sm">
            <Link href="/statistics" className="flex flex-row space-x-2 items-center">
              <BarChartIcon />
              <div className="flex-grow">Statistics</div>
            </Link>
          </div>
          <div className="hover:bg-gray-400 pl-2 py-2 rounded-sm">
            <Link href="/statistics" className="flex flex-row space-x-2 items-center">
              <BarChartIcon />
              <div className="flex-grow">Statistics</div>
            </Link>
          </div>
          <div className="hover:bg-gray-400 pl-2 py-2 rounded-sm">
            <Link href="/server" className="flex flex-row space-x-2 items-center">
              <HomeIcon />
              <div className="flex-grow">Server</div>
            </Link>
          </div>
          <div className="hover:bg-gray-400 pl-2 py-2 rounded-sm">
            <Link href="/client" className="flex flex-row space-x-2 items-center">
              <Link2Icon />
              <div className="flex-grow">Client</div>
            </Link>
          </div>
          <div className="hover:bg-gray-400 pl-2 py-2 rounded-sm">
            <Link href="/admin" className="flex flex-row space-x-2 items-center">
              <PieChartIcon />
              <div className="flex-grow">Admin</div>
            </Link>
          </div>
          <div className="hover:bg-gray-400 pl-2 py-2 rounded-sm">
            <Link href="/settings" className="flex flex-row space-x-2 items-center">
              <BarChartIcon />
              <div className="flex-grow">Settings</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-grow gap-y-10 h-full overflow-hidden">
        <div className="w-full">
          <Navbar />
        </div>
        <div className="grid h-[calc(100vh-56px)] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

const NavTab = ({ title, pathname, icon }: { title: string; pathname: string; icon: FC }) => {
  return (
    <div className={clsx("pl-2 py-2 rounded-sm", pathname === "/dashboard" ? "bg-gray-800" : "hover:bg-gray-400")}>
      <Link href="/dashboard" className="flex flex-row space-x-2 items-center">
        <DashboardIcon />
        <div className="flex-grow">Dashboard</div>
      </Link>
    </div>
  );
};
