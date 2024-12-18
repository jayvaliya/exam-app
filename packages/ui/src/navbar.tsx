"use client"

import Link from 'next/link'
import { usePathname } from "next/navigation"
import { Button } from './button';
import { Logo} from '@repo/assets'
import { TextButton } from './text-button';

const Navbar= () => {

  const pathname = usePathname()
  const pageType = pathname === "/" ? "landing": "dashboard"

  return (
    <nav className="block w-full px-8 py-2 mx-auto bg-white bg-opacity-90 sticky top-0 shadow lg:px-8 lg:py-3 backdrop-blur-lg backdrop-saturate-150 z-[9999]">
      <div className="container flex flex-wrap items-center justify-between px-10 text-slate-800">
        <Link href="/"
          className="px-8 cursor-pointer py-1.5">
            <Logo />
        </Link>
        {pageType === 'landing' ? (
          <div className='flex flex-row justify-end items-center gap-2'>
            <div className='flex'>

              <TextButton size={'md'} text={'Features'} onClick={()=>{}}  />
              <TextButton size={'md'} text={'About'} onClick={()=>{}}  />
              <TextButton size={'md'} text={'Blog'} onClick={()=>{}}  />
              <TextButton size={'md'} text={'FAQ'} onClick={()=>{}}  />

            </div>
            <div className="w-[1px] h-6 mx-1 items-center bg-gray-800"></div>
            <Button variant={"secondary"} size={'md'} text={'Log in'} onClick={()=>{}}/>
            <Button variant={'primary'} size={'md'} text={'Start for free'} onClick={()=>{}} className=' overflow-hidden'/>
          </div>
        ) : (
          <>
            <div className="hidden lg:block">
              <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-0">
                <Link href="/editor" className="flex items-center">
                  <Button variant={'secondary'} size={'md'} text={'Editor'} onClick={()=>{}} className=' overflow-hidden'/>
                </Link>
                 <Link href="/search" className="flex items-center">
                  <Button variant={'secondary'} size={'md'} text={'Search'} onClick={()=>{}} className=' overflow-hidden'/>
                </Link>               
                <Link href="/publish" className="flex items-center">
                  <Button variant={'secondary'} size={'md'} text={'Publish'} onClick={()=>{}} className=' overflow-hidden'/>
                </Link>
             </ul>
            </div>
            <button
              className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
              type="button">
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </span>
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;