// "use client"
import Login from '@/components/auth/Login'
import Link from 'next/link'
// import { redirect, useSearchParams } from 'next/navigation';
import React from 'react'
// import { toast } from 'sonner';
import {getServerSession} from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation'

export default async function login() {
    //   const searchParams = useSearchParams();
    //   const verify=searchParams.get('verify');
    //   const resetPassword=searchParams.get('resetPassword');
    
    //   if(verify==="successful"){
    //     toast.success("Email verification successful");
    //     redirect("/login");
    //   }
    
    //   if(resetPassword==='successful'){
    //     toast.success("Password reset successful");
    //     redirect("/login");
    //   }
    const session=await getServerSession(authOptions);
    if(session){
        redirect("/dashboard");
    }
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='w-[550px] bg-white rounded-xl px-10 shadow-xl py-5 px-10'>
            <h1 className="text-4xl font-extrabold 
                bg-gradient-to-r text-center from-pink-400 to-purple-500 text-transparent bg-clip-text">Clash</h1>
            <h1 className='mt-2 text-3xl font-bold'>Login</h1>
            <p>Welcome Back!</p>
            <Login/>
            <p className='text-center mt-2'>Don't have an account? {" "} 
                <strong>
                    <Link href='/register'>
                        Register
                    </Link>
                </strong>
            </p>
        </div>
    </div>
  )
}
