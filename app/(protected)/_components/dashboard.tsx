"use client";

import Link from "next/link";
import { Navbar } from "../_components/navbar";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/auth/user-button";
import { clsx } from 'clsx/lite'

interface ProtectedLayoutProps {
  children: React.ReactNode;
};

export const Dashboard = ({ children }: ProtectedLayoutProps) => {
	const pathname = usePathname();
	return (
		<>
			<div className="bg-gray-800 text-white  h-screen w-32 left-0 top-0 z-20 fixed gap-y-2">
				<div className="block space-y-2 mx-2 my-3">
					<Link href="/server" className={clsx('w-full')}>Server</Link>
					<Link href="/client" className={clsx('w-full')}>Client</Link>
					<Link href="/admin" className={clsx('w-full')}>Admin</Link>
					<Link href="/settings">Settings</Link>
				</div>
			</div>
			<Navbar />
			{children}
    </>
  );
};
