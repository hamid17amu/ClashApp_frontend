import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import React from 'react'

export default function login() {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='w-[550px] bg-white rounded-xl px-10 shadow-xl py-5 px-10'>
            <h1 className="text-4xl font-extrabold 
                bg-gradient-to-r text-center from-pink-400 to-purple-500 text-transparent bg-clip-text">Clash</h1>
            <h1 className='mt-2 text-3xl font-bold'>Login</h1>
            <p>Welcome Back!</p>
            <form>
                <div className='mt-4'>
                    <Label htmlFor='email'>Email</Label>
                    <Input type='email' id='email' placeholder='Enter your email' />
                    <Label htmlFor='password'>Password</Label>
                    <Input type='password' id='password' placeholder='Enter your password' /> 
                    <div className='text-right font-bold mt-1'>
                        <Link href='/forgot-password'>
                            Forgot Password ?
                        </Link>
                    </div>
                </div>
                <div className='mt-4'>
                    <Button type='submit' className='w-full'>Login</Button>
                </div>
            </form>

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
