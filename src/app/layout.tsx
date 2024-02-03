"use client"

// import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from "./firebase"
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'


const inter = Inter({ subsets: ['latin'] })


// export const metadata: Metadata = {
//   title: 'netflix',
//   description: '',
// }

export default function RootLayout({children,}: {  children: React.ReactNode}) {

  const router = useRouter()
  useEffect(()=>{
    const unsub = onAuthStateChanged(auth, (user) =>{
      if(!user){
        router.push("/loginpage")
      }
    })
    return()=>{
      unsub()
    }
  })

  return (
    <html lang="en">
      <head>
      <title>Netflix</title>

      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
