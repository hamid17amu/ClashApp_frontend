import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { getImageUrl } from "@/lib/utils";
import { Button } from "../ui/button";
import ClashMenu from "./ClashMenu";

export default function ClashCard({ clash, token }: { clash: clashData, token:string }) {
  return (
      <Card>
        <CardHeader className="flex justify-between items-center flex-row">
          <CardTitle>{clash.title}</CardTitle>
            <ClashMenu clash={clash} token={token}/>
        </CardHeader>
        <CardContent className="h-[300px]">
          {clash?.image && (
            <Image
              src={getImageUrl(clash.image)}
              alt={clash.title}
              width={500}
              height={500}
              className="rounded-md w-full h-[220px] object-contain"
            ></Image>
          )}
        {/* <CardDescription> */}
          <p>{clash.description}</p>
          <p>
            <strong>Expire At :-</strong>{" "}{
            new Date(clash.expire_at).toDateString()}
          </p>
        {/* </CardDescription> */}
        </CardContent>
        <CardFooter className="space-x-4">
            <Button>Items</Button>
        </CardFooter>
      </Card>
  );
}
