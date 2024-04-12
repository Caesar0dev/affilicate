"use client";
import Link from "next/link";
import { Navbar } from "../_components/navbar";
import { usePathname } from "next/navigation";
import { clsx } from "clsx/lite";
import { HomeIcon, Link2Icon, PieChartIcon, BarChartIcon, DashboardIcon } from "@radix-ui/react-icons";
interface ProtectedLayoutProps {
  children: React.ReactNode;
}

interface NavTabType {
  path: string;
  pathname: string;
  title: string;
  icon: React.ComponentType<any>;
}

const NavTab = ({ title, path, pathname, icon: Icon }: NavTabType) => {
  return (
    <div className={clsx("pl-2 py-2 rounded-sm", pathname === path ? "bg-gray-800" : "hover:bg-gray-400")}>
      <Link href={path} className="flex flex-row space-x-2 items-center">
        <Icon />
        <div className="flex-grow">{title}</div>
      </Link>
    </div>
  );
};

export const Dashboard = ({ children }: ProtectedLayoutProps) => {
  const pathname = usePathname();

  const navData = [
    {
      pathname,
      path: "/dashboard",
      title: "Dashboard",
      icon: <DashboardIcon />
    },
    {
      pathname,
      path: "/urls",
      title: "Affiliate URLs",
      icon: <BarChartIcon />
    },
    {
      pathname,
      path: "/statistics",
      title: "Statistics",
      icon: <BarChartIcon />
    },
    {
      pathname,
      path: "/server",
      title: "Server",
      icon: <HomeIcon />
    },
    {
      pathname,
      path: "/client",
      title: "Client",
      icon: <Link2Icon />
    },
    {
      pathname,
      path: "/admin",
      title: "Admin",
      icon: <PieChartIcon />
    },
    {
      pathname,
      path: "/settings",
      title: "Settings",
      icon: <BarChartIcon />
    }
  ];

  return (
    <div className="h-full w-full flex flex-row overflow-hidden">
      <div className="bg-gray-700 text-white h-screen w-60 min-w-60 space-y-4">
        <div className="w-full bg-gray-800 px-2 py-4">
          <h3 className="text-xl">Affiliate</h3>
        </div>
        <div className="pl-2 pr-1">
          {navData.map((data, i) => (
            <NavTab key={i} icon={data.icon} path={data.path} pathname={data.pathname} title={data.title} />
          ))}
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
