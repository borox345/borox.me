import Head from 'next/head';
import React, { useState, useEffect } from 'react'
import axios from "axios";

import { BsTwitter } from 'react-icons/bs'
import { BsDiscord } from 'react-icons/bs'
import { BiMailSend } from 'react-icons/bi'

import { IoIosArrowDown } from 'react-icons/io'

export default function Home() {

  return (
    <div className="h-full overflow-auto">
      <Head>
        <title>borox</title>
      </Head>

      <section id='home' className='min-h-full px-4 flex flex-col justify-center items-center text-center lg:mt-[350px] md:mt-[300px] mt-[250px]'>
        <div className='flex items-center justify-center'>
          <img className='rounded-full w-[128px] h-[128px] object-center flex  hover:animate-spin' src='https://i.imgur.com/PZsvhHZ.png'></img>
        </div>

        <h2 className="lg:text-6xl md:text-6xl text-5xl font-black text-center mt-10">
          Hey, I'm borox!
        </h2>

        <p className='text-lg leading-6 tracking-wide mb-12 pt-4 text-center font-black'>
          <span className='hover:font-black text-[#3c86be]'><a target='_blank' href='https://python.org'>python</a> </span> enjoyer
        </p>

        {/* <div className='flex items-center justify-center animate-pulse flex-grow mt-10'>
          <a href='#contact'>
            <IoIosArrowDown className='w-16 h-16 ' />
          </a>
        </div> */}
      </section>


    </div >
  )
}
