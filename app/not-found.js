import Link from 'next/link'
 import { Button } from '@nextui-org/react'
export default function NotFound() {
  return (
    <div className='text-center min-h-96'>
        <h2 className='page_title my-6'> Not Found</h2>
        <p>The page you were looking for does not exist.</p>
        <Button className='bg-gray-200 p-4 mt-4 rounded-lg'>

        <Link className='' href="/">Return Home</Link>
        </Button>
     
    </div>
  )
}