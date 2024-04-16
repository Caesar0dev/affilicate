"use client";

import { FaUser } from "react-icons/fa";
import { EnterIcon, ExitIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useCurrentUser } from "@/hooks/use-current-user";
import { LogoutButton } from "@/components/auth/logout-button";
import { SignUpButton } from "@/components/auth/signup-button";

export const UserButton = () => {
  const user = useCurrentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex flex-row items-center justify-between space-x-2 rounded-full outline-sky-200 w-16 hover:outline ">
        <Avatar>
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback className="bg-sky-500">
            <FaUser className="text-white" />
          </AvatarFallback>
        </Avatar>
        <ChevronDownIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 divide-y" align="end">
        {user ? (
          <>
            <DropdownMenuItem>Signed in as {user.email}</DropdownMenuItem>
            <DropdownMenuItem>
              <ExitIcon className="h-4 w-4 mr-2" />
              Settings
            </DropdownMenuItem>
            <LogoutButton>
              <DropdownMenuItem>
                <ExitIcon className="h-4 w-4 mr-2" />
                Logout
              </DropdownMenuItem>
            </LogoutButton>
          </>
        ) : (
          <SignUpButton>
            <DropdownMenuItem>
              <EnterIcon className="h-4 w-4 mr-2" />
              Sign Up
            </DropdownMenuItem>
          </SignUpButton>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
