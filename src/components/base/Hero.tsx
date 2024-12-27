import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function Hero() {
  return (
    <div>
        <div className='w-full h-screen flex justify-center items-center flex-col'>
            <div>
                <Image src="/banner.svg" width={600} height={600} alt='banner'></Image>
            </div>
            <div className='mt-4 text-center'>
                <h1 className="text-6xl md:text-7xl lg: text-9xl font-extrabold 
                bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text">Clash</h1>
                <p className='text-2xl md:text-3xl lg:text-4xl text-center font-bold'>
                  Discover the better choice together.
                </p>
                <Link href='/login'>
                  <Button className='mt-4'>Start free</Button>
                </Link>
            
            </div>
        </div>
    </div>
  )
}
