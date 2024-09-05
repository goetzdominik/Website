'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import MainBody from '@/components/MainBody'
import Image from 'next/image'
import Cards from '@/components/Cards'

import { useRouter } from 'next/navigation';



export default function Home() {
  return (
    // min-h-screen flex-col items-center justify-between pl-24 pr-24 pb-12 pt-12
    <main className="">



         {/* <MainBody/> */}
         
        <Cards/>


    </main>
  )
}
