"use client";
import Link from 'next/link'
import {Logo} from '@repo/assets';
import { TextButton } from './text-button';
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaDiscord,
} from 'react-icons/fa';
import Icon from './icon';

export const Footer = () => {
  return (
    <div className='px-5 pt-8 pb-4 w-full h-96 flex flex-col justify-end bg border-t border-gray-400 '>
      <div className="flex justify-between flex-1 ">
        <div className="flex flex-col gap-10">
          <Link href="/"
            className="cursor-pointer py-1.5">
              <Logo />
              <p className=' pl-2 font-medium text-lg text-gray-700'>Discover, share, and access study material easily.</p>
          </Link>
          <div className='flex gap-4'>
            <Icon icon={FaDiscord} size='md' />
            <Icon icon={FaInstagram} size='md' />
            <Icon icon={FaTwitter} size='md' />
            <Icon icon={FaLinkedinIn} size='md' />
          </div>
        </div>
        <div className=' flex flex-1 justify-end pr-10 gap-10'>
          <div className='flex flex-col gap-2'>
            <p className=' text-lg font-semibold px-2'>Features</p>
            <Link href="#"
              className="cursor-pointer ">
              <TextButton size={'sm'} text={'How It Works'}  onClick={()=>{}}  />
            </Link>
            <Link href="#"
              className="cursor-pointer ">
              <TextButton size={'sm'} text={'Sharing'}  onClick={()=>{}}  />
            </Link>
            <Link href="#"
              className="cursor-pointer ">
              <TextButton size={'sm'} text={'Collaboration'}  onClick={()=>{}}  />
            </Link>
            <Link href="#"
              className="cursor-pointer ">
              <TextButton size={'sm'} text={'Notes'}  onClick={()=>{}}  />
            </Link>
            <Link href="#"
              className="cursor-pointer ">
              <TextButton size={'sm'} text={'Ai Summery'}  onClick={()=>{}}  />
            </Link>
          </div>
          <div className='flex flex-col'>
            <p className=' text-lg font-semibold px-2'>Company</p>
            <Link href="#"
              className="cursor-pointer ">
              <TextButton size={'sm'} text={'About us'}  onClick={()=>{}}  />
            </Link>
            <Link href="#"
              className="cursor-pointer ">
              <TextButton size={'sm'} text={'Careers'}  onClick={()=>{}}  />
            </Link>
            <Link href="#"
              className="cursor-pointer ">
              <TextButton size={'sm'} text={'Terms & privacy'}  onClick={()=>{}}  />
            </Link>
          </div>
        </div>
      </div>
      <div className='flex items-center'>
        <div className='flex items-center'>
          <TextButton size={'sm'} text={'Privacy'} className=' text-xs  mx-1' onClick={()=>{}}  />
          <div className="w-[0.9px] rounded-md h-4 mx-1 items-center bg-gray-800"></div>
          <TextButton size={'sm'} text={'Terms'} className=' text-xs mx-1' onClick={()=>{}}  />
        </div>
        <div className="inline-block text-yellow-700 font-bold text-xs px-3 py-1 rounded">
          &copy; Noter Inc.
        </div>

      </div>
    </div>
  );
};
