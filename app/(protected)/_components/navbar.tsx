"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/auth/user-button";
import { TextAlignJustifyIcon } from "@radix-ui/react-icons";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-secondary flex w-full justify-end items-center px-4 py-2 shadow-sm">
      <TextAlignJustifyIcon width={24} height={24} className="mr-auto md:hidden" />
      <UserButton />
    </nav>
  );
};
