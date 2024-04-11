"use client";

import Link from "next/link";
import { Navbar } from "../_components/navbar";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/auth/user-button";
import { clsx } from 'clsx/lite'

import { HomeIcon } from "@radix-ui/react-icons";
interface ProtectedLayoutProps {
  children: React.ReactNode;
};

export const Dashboard = ({ children }: ProtectedLayoutProps) => {
	const pathname = usePathname();
	return (
		<>
			<div className="bg-gray-800 text-white  h-screen w-32 left-0 top-0 z-20 fixed gap-y-2">
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
							<HomeIcon />
							<div className="flex-grow">
								Client
							</div>
						</div>
					</Link>
					<Link href="/admin">
						<div className={clsx('w-full mt-2 flex flex-row space-x-2 items-center')}>
							<HomeIcon />
							<div className="flex-grow">
								Admin
							</div>
						</div>
					</Link>
					<Link href="/settings">
						<div className={clsx('w-full mt-2 flex flex-row space-x-2 items-center')}>
							<HomeIcon />
							<div className="flex-grow">
								Settings
							</div>
						</div>
					</Link>
				</div>
			</div>
			<Navbar />
			{children}
    </>
  );
};
