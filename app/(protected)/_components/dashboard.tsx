"use client";

import Link from "next/link";
import { Navbar } from "../_components/navbar";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/auth/user-button";
import { clsx } from 'clsx/lite'

import { HomeIcon, Link2Icon, PieChartIcon, BarChartIcon, DashboardIcon} from "@radix-ui/react-icons";
interface ProtectedLayoutProps {
  children: React.ReactNode;
};

export const Dashboard = ({ children }: ProtectedLayoutProps) => {
	const pathname = usePathname();

	return (
		<div className="h-full w-full flex flex-row overflow-hidden">
			<div className="bg-gray-700 text-white h-screen w-40 gap-y-2">
				<div className="w-full bg-gray-800 px-2 py-4">
					<h3 className="text-xl">Affilicate</h3>
				</div>
				<div className="space-y-6 p-3 [&>a]:hover:bg-gray-700">
					<Link href="/server">
						<div className={clsx('w-full mt-2 flex flex-row space-x-2 items-center')}>
							<HomeIcon />
							<div className="flex-grow">Server</div>
						</div>
					</Link>
					<Link href="/client">
						<div className={clsx('w-full mt-2 flex flex-row space-x-2 items-center')}>
							<Link2Icon />
							<div className="flex-grow">
								Client
							</div>
						</div>
					</Link>
					<Link href="/admin">
						<div className={clsx('w-full mt-2 flex flex-row space-x-2 items-center')}>
							<PieChartIcon />
							<div className="flex-grow">
								Admin
							</div>
						</div>
					</Link>
					<div>
						<Link href="/settings" className="flex flex-row space-x-2 items-center">
							<BarChartIcon />
							<div className="flex-grow">
								Settings
							</div>
						</Link>
					</div>
					<div>
						<Link href="/dashboard" className="flex flex-row space-x-2 items-center">
							<DashboardIcon />
							<div className="flex-grow">
								Dashboard
							</div>
						</Link>
					</div>
				</div>
			</div>
			<div className="flex-grow gap-y-10 h-full overflow-hidden">
				<div className="w-full">
					<Navbar />
				</div>
				<div className="grid h-[calc(100vh-56px)] overflow-y-auto">
					{children}
				</div>
			</div>
    </div>
  );
};
