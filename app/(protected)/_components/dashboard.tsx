"use client";

import Link from "next/link";
import { Navbar } from "../_components/navbar";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/auth/user-button";

interface ProtectedLayoutProps {
  children: React.ReactNode;
};
export const Dashboard = ({ children }: ProtectedLayoutProps) => {
  const pathname = usePathname();

    return (
        <>
            <div className="bg-gray-800  h-screen w-15 left-0 top-0 z-20 fixed gap-y-2">
                <div className="block flex-row mx-2 my-3">
                        <Button 
                        asChild
                        variant={pathname === "/server" ? "default" : "outline"}
                        className="block mb-2"
                        >
                        <Link href="/server">
                            Server
                        </Link>
                        </Button>
                        <Button 
                        asChild
                        variant={pathname === "/client" ? "default" : "outline"}
                        className="block mb-2"
                        >
                        <Link href="/client">
                            Client
                        </Link>
                        </Button>
                        <Button 
                        asChild
                        variant={pathname === "/admin" ? "default" : "outline"}
                        className="block mb-2"
                        >
                        <Link href="/admin">
                            Admin
                        </Link>
                        </Button>
                        <Button 
                        asChild
                        variant={pathname === "/settings" ? "default" : "outline"}
                        className="block mb-2"
                        >
                        <Link href="/settings">
                            Settings
                        </Link>
                        </Button>
                </div>
            </div>
        <Navbar />
        {children}
    </>
  );
};
