import Head from 'next/head';
import React, { useState, useEffect } from 'react'
import axios from "axios";

export default function Home() {

  return (
    <div className="container flex items-center justify-center p-4 mx-auto min-h-screen">
      <Head>
        <title>borox</title>
        <meta property="og:description" content="Python enjoyer."></meta>
        <meta property="og:title" content="Hey, I'm borox"></meta>
        <meta property="og:image" content="https://i.imgur.com/ORUp0RS.jpg"></meta>
        <meta name="theme-color" content="#1a1a1a"></meta>
        <meta name="keywords" content="borox"></meta>
        <meta property="og:locale" content="en-US"></meta>
        <link rel="icon" href="https://i.imgur.com/PZsvhHZ.png" type="image/jpg" sizes="16x16"></link>
      </Head>

      <main className='w-[80%] md:w-[45rem]'>
        <div className='flex items-center justify-center '>
          <img className='rounded-full w-[128px] h-[128px] object-center flex' src='https://cdn.discordapp.com/avatars/314424536256872449/ea2dbd3897b5727f3db3ed2b5760c781.png?size=1024'></img>
        </div>

        <h2 className="lg:text-5xl text-4xl font-black text-white text-center mt-10">
          Hey, I'm <span className='hover:font-black'>borox</span>
        </h2>

        <p className='lg:text-xl text-xl text-white leading-6 tracking-wide mb-12 pt-4 text-center'>
          i enjoy to code in <span className='hover:font-black text-[#3f7dae]'><a target='_blank' href='https://python.org'>python</a></span>
          <br />
          <br />
          <a href='/contact'>/contact</a>
        </p>




      </main >
    </div >
  )
}
