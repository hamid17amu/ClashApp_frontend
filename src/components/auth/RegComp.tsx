"use client";

import { Label } from "@radix-ui/react-label";
import React, { useEffect } from "react";
import { Input } from "../ui/input";
import { SubmitButton } from "../Common/SubmitButton";
import { registerAction } from "@/actions/authAction";
import { useActionState } from "react";
import { toast } from "sonner";
export default function Register() {
  const initState = {
    status: 0,
    message: "",
    error: {},
  };
  const [state, formAction] = useActionState(registerAction, initState);

  useEffect(() => {
    if(state.status===500){
      toast.error(state.message);
    }else if(state.status===200){
      toast.success(state.message);
    }

  }, [state]);

  return (
    <div>
      <form action={formAction}>
        <div className="mt-2">
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
          />
        </div>
        <span className="text-red-400">{state.error?.name}</span>
        <div className="mt-2">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <span className="text-red-400">{state.error?.email}</span>
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
