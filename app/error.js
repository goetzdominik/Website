'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 import { Button } from '@nextui-org/react'
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className='text-center'>
      <h1 className='page_title'>Erorr</h1>
      <h2>Something went wrong!</h2>
      <Button className='bg-gray-200 p-4 mt-4 rounded-lg'
      onClick={
        // Attempt to recover by trying to re-render the segment
        () => reset()
      }>

        Try again
        </Button>
      
    </div>
  )
}