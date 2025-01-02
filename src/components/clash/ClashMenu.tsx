"use client";
import React, { Suspense, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";
import dynamic from "next/dynamic";
const EditClash = dynamic(() => import("./EditClash"));
const DeleteClash = dynamic(() => import("./DeleteClash"));

export default function ClashMenu({ clash, token }: { clash: clashData, token:string }) {
    const [Open, setOpen] = useState(false);
    const [DeleteOpen, setDeleteOpen] = useState(false);
  return (
    <div>
        {Open && <Suspense fallback={<p>Loading...</p>}> <EditClash clash={clash} token={token} Open={Open} setOpen={setOpen} /> </Suspense>}
        {DeleteOpen && <Suspense fallback={<p>Loading...</p>}> <DeleteClash clash={clash} token={token} open={DeleteOpen} setOpen={setDeleteOpen} /> </Suspense>}
      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none">
          <EllipsisVertical />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={()=>{setOpen(true);}}>Edit</DropdownMenuItem>
          <DropdownMenuItem>Copy Link</DropdownMenuItem>
          <DropdownMenuItem onClick={()=>{setDeleteOpen(true);}}>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
