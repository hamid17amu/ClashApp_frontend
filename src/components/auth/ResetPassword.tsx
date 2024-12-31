"use client";

import { Label } from "@radix-ui/react-label";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { SubmitButton } from "../Common/SubmitButton";
import { resetPasswordAction } from "@/actions/authAction";
import { useActionState } from "react";
import { toast } from "sonner";
import { redirect, useSearchParams } from "next/navigation";
export default function ResetPassword() {
  const searchParams = useSearchParams();
  let initState = {
    status: 0,
    message: "",
    error: {},
  };
  const [state, formAction] = useActionState(resetPasswordAction, initState);
  useEffect(() => {
    if (state.status === 500 || state.status === 422) {
      toast.error(state.message);
    } else if (state.status === 200) {
      toast.success(state.message);
      redirect("/login");
    }
  }, [state]);

  return (
    <div>
      <form action={formAction}>
        <input
          type="hidden"
          name="token"
          value={searchParams.get("token") ?? ""}
        />
        <input
          type="hidden"
          name="email"
          value={searchParams.get("email") ?? ""}
        />
        <div className="mt-2">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <span className="text-red-400">{state.error?.password}</span>
        <div className="mt-2">
          <Label htmlFor="cpassword">Confirm Password</Label>
          <Input
            type="password"
            name="cpassword"
            id="cpassword"
            placeholder="Confirm your password"
          />
        </div>
        <span className="text-red-400">{state.error?.confirm_password}</span>
        <div className="mt-4">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}
