'use client'
import { Roboto } from 'next/font/google'
import './globals.css'
import 'flowbite';
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Navbar_new from '@/components/Navbar_new'
import { NextUIProvider } from '@nextui-org/react'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"


const merriweather = Roboto({
  weight: '400',
  subsets: ['latin']
});



export default function RootLayout({ children }) {
  return (
    
    <html lang="en">  
      <head>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css" rel="stylesheet" />
      <link rel="icon" href="favicon.ico"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon-16x16.png"/>
      <title>Dominik Götz - ETH</title>
      </head>
      
      <body className={merriweather.className}>
      <NextUIProvider>
      <div className = "min-h-screen ">
          <div className=' ' >
          <Navbar/>
          {/* <Navbar_new/> */}

          <div className="flexflex-col items-center justify-between pl-6 pr-6 pt-24 pb-12 sm:pl-12 md:pl-24 lg:pl-36 sm:pr-12 md:pr-24 lg:pr-36 sm:pb-6 md:pb-12 sm:pt-12 md:pt-24">
          {children}
          <Analytics />
          <SpeedInsights/>
          </div>
          </div>

          <Footer/>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>
      </div>
      </NextUIProvider>
      </body>
      
    </html>
    
  )
}
