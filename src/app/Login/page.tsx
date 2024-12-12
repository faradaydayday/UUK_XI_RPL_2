"use client"
import React from 'react'

import Image from 'next/image'
import logoinv from '@/app/assets/images/Pict Inventory.png'
import Link from 'next/link'
function page() {
  return (
    <>

      <div className='container flex justify-center items-center min-h-screen'>
        <div className='grid grid-cols-2 bg-white shadow-lg rounded-md w-[1000px]'>
          <div className='flex justify-center items-center'>
            <Image
              src={logoinv}
              alt='logo inventaris'
              className='max-w-full max-h-full'
            />
          </div>
          <div className='flex flex-col justify-center items-center py-20'>
            <h2 className='text-black font-bold text-3xl text-center mb-10'><Link href="/">Login</Link></h2>
            <form className='flex flex-col items-center w-full px-10'>
              <input
                type="text"
                placeholder='Username'
                className='bg-slate-100 text-black w-full py-3 rounded-lg px-4 mb-4'
              />
              <input
                type="password"
                placeholder='Password'
                className='bg-slate-100 w-full  text-black py-3 rounded-lg px-4 mb-4'
              />
              <button
                type="submit"
                className='bg-primary text-white w-96 py-3 mt-10 rounded-full text-xl font-semibold hover:bg-primary-dark'
              >
                Login
              </button>
            </form>
            <p className="mt-10 text-center text-sm/6 text-gray-500">
              new user
              <a href="#" className="font-semibold text-primary hover:text-indigo-500 underline ml-1">Register</a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default page