"use client";

import Link from "next/link";
import { Navbar } from "../_components/navbar";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/auth/user-button";
import { clsx } from 'clsx/lite'

import { HomeIcon, Link2Icon, PieChartIcon, BarChartIcon} from "@radix-ui/react-icons";
interface ProtectedLayoutProps {
  children: React.ReactNode;
};

export const Dashboard = ({ children }: ProtectedLayoutProps) => {
	const pathname = usePathname();

	return (
		<div className="h-full w-full flex flex-row overflow-hidden">
			<div className="bg-gray-800 text-white h-screen w-40 gap-y-2">
				<div className="my-4 mx-2">
					<h3 className="text-xl">Affilicate</h3>
				</div>
				<div className="space-y-6 mx-2 my-3 [&>a]:hover:bg-gray-700">
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
					<Link href="/settings">
						<div className={clsx('w-full mt-2 flex flex-row space-x-2 items-center')}>
							<BarChartIcon />
							<div className="flex-grow">
								Settings
							</div>
						</div>
					</Link>
				</div>
			</div>
			<div className="flex-grow gap-y-10 h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 overflow-hidden">
				<div className="w-full">
					<Navbar />
				</div>
				<div className="grid h-[calc(100vh-56px)] place-items-center overflow-y-auto">
					{children}
				</div>
			</div>
    </div>
  );
};
