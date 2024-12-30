"use client";

import React, { useActionState, useEffect } from "react";
import { SubmitButton } from "@/components/Common/SubmitButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { loginAction } from "@/actions/authAction";
import { toast } from "sonner";
import {signIn} from 'next-auth/react'

export default function Login() {
  const initState = {
    status: 0,
    message: "",
    error: {},
    data:{
        email:null,
        password:null
    }
  };

  const [state, formAction] = useActionState(loginAction, initState);

  useEffect(() => {
    if(state.status===500){
      toast.error(state.message);
    }else if(state.status===200){
      toast.success(state.message);
      signIn("credentials", {
        email:state.data?.email,
        password:state.data?.password,
        redirect:true,
        callbackUrl:"/dashboard"
      })
      
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
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
          </div>
          <span className="text-red-400">{state.error?.password}</span>
          <div className="text-right font-bold mt-1">
            <Link href="/forgot-password">Forgot Password ?</Link>
          </div>
        <div className="mt-4">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}
