"use client";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from '../Common/UserAvatar'
import LogoutDialog from "../auth/LogoutDialog";
import Link from "next/link";

export default function Navbar() {
    const [LogOut, setLogOut] = useState(false);
  return (
    <>
    <LogoutDialog open={LogOut} setOpen={setLogOut}/>
    <nav className="flex justify-between image-center h-14 p-2 w-full">
      <Link href={"/"}>
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text">
        Clash
      </h1>
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger className=" focus:outline-none">
            <UserAvatar name="User"/>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem onClick={()=>{setLogOut(true);}}>LogOut</DropdownMenuItem>

        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
    </>
  );
}
