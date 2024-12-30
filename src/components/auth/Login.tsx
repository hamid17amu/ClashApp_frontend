import React, { useActionState } from "react";
import { SubmitButton } from "@/components/Common/SubmitButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { loginAction } from "@/actions/authAction";

export default function Login() {
  const initState = {
    status: 0,
    message: "",
    error: {},
  };

  const [state, formAction] = useActionState(loginAction, initState);
  return (
    <div>
      <form action={formAction}>
        <div className="mt-4">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" placeholder="Enter your email" />
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
          <div className="text-right font-bold mt-1">
            <Link href="/forgot-password">Forgot Password ?</Link>
          </div>
        </div>
        <div className="mt-4">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}
