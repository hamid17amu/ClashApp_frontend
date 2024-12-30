"use client";

import React, { useActionState, useEffect } from "react";
import { SubmitButton } from "@/components/Common/SubmitButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { forgotPasswordAction } from "@/actions/authAction";
import { toast } from "sonner";
import { redirect } from "next/navigation";

export default function ForgotPassword() {
  const initState = {
    status: 0,
    message: "",
    error: {},
    data:{
        email:null,
    }
  };

  const [state, formAction] = useActionState(forgotPasswordAction, initState);

  useEffect(() => {
    if(state.status===500){
      toast.error(state.message);
    }else if(state.status===200){
      toast.success(state.message);
      redirect("/login");
    }

  }, [state]);

  
  return (
    <div>
      <form action={formAction}>
        <div className="mt-4">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" placeholder="Enter your email" />
          </div>
          <span className="text-red-400">{state.error?.email}</span>
        <div className="mt-4">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}
