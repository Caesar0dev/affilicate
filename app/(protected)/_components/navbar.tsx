"use client";

import { usePathname } from "next/navigation";

import { UserButton } from "@/components/auth/user-button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

interface NavbarProps {
  setOpen: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setOpen }: any) => {
  const pathname = usePathname();

  return (
    <nav className="bg-secondary flex w-full justify-end items-center px-4 py-2 shadow-sm">
      <HamburgerMenuIcon width={24} height={24} className="mr-auto md:hidden" onClick={e => setOpen(true)} />
      <UserButton />
    </nav>
  );
};

export default Navbar;
