"use client";
 
import { useFormStatus } from 'react-dom'
import { Button } from '../ui/button'
 
export function SubmitButton() {
  const { pending } = useFormStatus()
 
  return (
    <Button disabled={pending} className='w-full'>{pending?"Processing...":"Submit"}</Button>
  )
}