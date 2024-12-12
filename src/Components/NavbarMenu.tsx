import React from 'react'
import Image from 'next/image';
import Logo from '@/app/assets/images/logotekno.png'
import Link from 'next/link';
const Navbar = () => {
  return (
    <nav className="w-full bg-primary" >
      <div className="container mx-auto flex items-center justify-between">
        <Image
          src={Logo}
          alt="Company Logo"
          width={100}
          height={40}
          className="cursor-pointer mx-8"
        />
        <ul className='flex p-6 gap-5 text-white font-semibold mx-10'>
          <li className='hover:cursor-pointer mt-1' >Home</li>
          <li className='hover:cursor-pointer mt-1'>About</li>
          <li className='hover:cursor-pointer mt-1'>Contact</li>
          <li className='hover:cursor-pointer border-white border-2 py-1 px-2 rounded-lg '><Link href="/Login" >Login</Link></li>
          <li className='mt-2 ml-3  '>
            <span className=' font-bold '>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search font-bold" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </span></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;