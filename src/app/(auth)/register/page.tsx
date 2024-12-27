import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import React from 'react'

export default function register() {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='w-[550px] bg-white rounded-xl px-10 shadow-xl py-5 px-10'>
            <h1 className="text-4xl font-extrabold 
                bg-gradient-to-r text-center from-pink-400 to-purple-500 text-transparent bg-clip-text">Clash</h1>
            <h1 className='mt-2 text-3xl font-bold'>Sign Up</h1>
            <p>Welcome to Clash!</p>
            <form>
                <div className='mt-4'>
                    <Label htmlFor='name'>Name</Label>
                    <Input type='text' id='name' name='name' placeholder='Enter your name' />
                    <Label htmlFor='email'>Email</Label>
                    <Input type='email' id='email' name='email' placeholder='Enter your email' />
                    <Label htmlFor='password'>Password</Label>
                    <Input type='password' name='password' id='password' placeholder='Enter your password' /> 
                    <Label htmlFor='cpassword'>Password</Label>
                    <Input type='password' name='cpassword' id='cpassword' placeholder='Confirm your password' /> 
                </div>
                <div className='mt-4'>
                    <Button type='submit' className='w-full'>Login</Button>
                </div>
            </form>

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
