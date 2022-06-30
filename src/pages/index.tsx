import Head from 'next/head';
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import axios from "axios";

import { BsTwitter } from 'react-icons/bs'
import { BsDiscord } from 'react-icons/bs'
import { BiMailSend } from 'react-icons/bi'
import { IoIosArrowDown } from 'react-icons/io'

import memoji  from '../../assets/images/meMoji.png'

export default function Home() {

  return (
    <div className="h-full overflow-auto">
      <Head>
        <title>borox</title>
      </Head>

      <section id='home' className='min-h-full px-4 flex flex-col justify-center items-center text-center lg:mt-[300px] py-8'>
        <div className='flex items-center justify-center'>
          <Image height={'150px'} width={'150px'} className='rounded-full object-center flex  hover:animate-spin' src={memoji}/>
        </div> 

        <h2 className="lg:text-6xl md:text-6xl text-5xl font-black text-center mt-10">
          Hey, I'm borox!
        </h2>

        <p className='text-lg leading-6 tracking-wide mb-12 pt-4 text-center font-black'>
          <span className='hover:font-black text-[#3c86be]'><a target='_blank' href='https://python.org'>python</a> </span> enjoyer
        </p>

        <div className='flex items-center justify-center flex-grow mt-20 animate-bounce'>
          <a href='#contact'>
            <IoIosArrowDown className='w-16 h-16 ' />
          </a>
        </div>
      </section>

      <section id='contact' className='py-16 px-8 flex flex-col justify-center items-center min-h-screen'>
        <h1 className='text-6xl font-black text-center'>Contact!</h1>

        <div className='text-xl grid gap-3 mt-5 text-center font-semibold contact-grid'>
          <a href='https://twitter.com/borox345' className='h-[1.5em] w-[1.5em] text-[#1DA1F2] justify-self-end cursor-pointer'>
            <BsTwitter className='w-8 h-8'/>
          </a>
          <a href='https://twitter.com/borox345'>@borox345</a>

          <a href='https://discord.com/users/314424536256872449' className='justify-self-end h-[1.5em] w-[1.5em] text-[#5865f2] cursor-pointer'>
            <BsDiscord className='w-8 h-8'/>
          </a>
          <div>
            <a href='https://discord.com/users/314424536256872449'>
              borox
              <span className='text-[#858383] hover:text-[#e6e4e4]'>#0178</span>
            </a>
          </div>

          {/* <a href='mailto:borox.tv@gmail.com' className='justify-self-end h-[1.5em] w-[1.5em] text-[#ff4e4e] cursor-pointer'>
            <BiMailSend className='w-8 h-8'/>
          </a>
          <a href='https://twitter.com/borox345'>borox@borox.me</a> */}
          

        </div>

      </section>


    </div >
  )
}
