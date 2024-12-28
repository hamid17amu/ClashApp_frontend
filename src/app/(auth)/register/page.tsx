import Link from 'next/link'
import React from 'react'
import Register from '@/components/auth/RegComp'

export default function register() {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='w-[550px] bg-white rounded-xl px-10 shadow-xl py-5 px-10'>
            <h1 className="text-4xl font-extrabold 
                bg-gradient-to-r text-center from-pink-400 to-purple-500 text-transparent bg-clip-text">Clash</h1>
            <h1 className='mt-2 text-3xl font-bold'>Sign Up</h1>
            <p>Welcome to Clash!</p>
            <Register/>

            <p className='text-center mt-2'>Already have an account? {" "} 
                <strong>
                    <Link href='/login'>
                        Login
                    </Link>
                </strong>
            </p>
        </div>
    </div>
  )
}
