import ForgotPassword from '@/components/auth/ForgotPassword'
import Link from 'next/link'
import React from 'react'

export default function forgotPassword() {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='w-[550px] bg-white rounded-xl px-10 shadow-xl py-5 px-10'>
            <h1 className="text-4xl font-extrabold 
                bg-gradient-to-r text-center from-pink-400 to-purple-500 text-transparent bg-clip-text">Clash</h1>
            <h1 className='mt-2 text-3xl font-bold'>Forgot Password</h1>
            <p>Enter your email below. </p>
            <ForgotPassword/>
            <p className='text-center mt-2'>Back to {" "} 
                <strong>
                    <Link href='/lohin'>
                        Login
                    </Link>
                </strong>
            </p>
        </div>
    </div>
  )
}
