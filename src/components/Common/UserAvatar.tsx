"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function UserAvatar({name}:{name:string}) {
  return (
    <div>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>{name[1]}</AvatarFallback> 
      </Avatar>
    </div>
  );
}
