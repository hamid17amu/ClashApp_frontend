import Navbar from '@/components/base/Navbar'
import Addclash from '@/components/clash/AddClash'
import React from 'react'
import { authOptions, customSession } from '../api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'
import { fetClash } from '../fetch/clashFetch'
import ClashCard from '@/components/clash/ClashCard'

export default async function dashboard() {
  const session:customSession | null = await getServerSession(authOptions);
  const clashData:Array<clashData>|[] = await fetClash(session?.user?.token!);
  return (
    <div className='container mx-auto'>
        <Navbar/>
        <div className='text-end mt-10'>
          <Addclash user={session?.user!}/>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
          {clashData.length>0 && clashData?.map((clash:clashData)=>{
            return <ClashCard key={clash.id} clash={clash} token={session?.user?.token!}/>
          })}
        </div>
    </div>
  )
}
