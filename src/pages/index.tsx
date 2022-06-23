import Head from 'next/head';
import React, { useState, useEffect } from 'react'
import { DiPython } from 'react-icons/di';
import { DiCss3 } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si'
import { DiReact } from 'react-icons/di'
import { SiTypescript } from 'react-icons/si'
import { SiPostgresql } from 'react-icons/si'

import { FaDiscord } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { SiTwitter } from 'react-icons/si';
import { SiGmail } from 'react-icons/si';

import axios from "axios";
const options = {method: 'GET', url: 'http://127.0.0.1:3000/spotify'};

export default function Home() {
  // axios.request(options).then(function (response) {
  //   console.log(response.data.playing);
  //   if(response.data.code === 200){
  //     let playing = response.data.playing;
  //   }
  //   else {
  //     let playing = 'Not playing anything';
  //   }
    
  // }).catch(function (error) {
  //   console.error(error);
  // });
  

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

        <h2 className="lg:text-5xl text-4xl font-black text-white text-center hover:scale-105 transition-transform duration-300">
          Hey, I'm borox
        </h2>

        <p className='lg:text-xl text-xl text-white leading-6 tracking-wide mb-12 pt-4 text-center'>
          <img src='https://www.emojimeaning.com/img/img-apple-64/1f1f5-1f1f1.png' className='inline-block w-8 h-8'/> I have 15 yo, i like to create cool thing in python.
        </p>

        <div className='flex items-center content-center justify-center relative'>
            <a href='https://discord.com/users/314424536256872449' target='_blank' className='bg-[#3d48c0] opacity-80 hover:opacity-100 duration-500 w-[3rem] h-[3rem] rounded-lg flex items-center justify-center hover:scale-110 transition-transform'>
              <FaDiscord className='fill-[#b9bfff] w-[1.875rem] h-[1.875rem] cursor-pointer' />
            </a>

            <a href='https://github.com/borox345' target='_blank' className='bg-[#1a1a1a] opacity-90 hover:opacity-100 duration-500 w-[3rem] h-[3rem] rounded-lg flex items-center justify-center ml-5 hover:scale-110 transition-transform'>
              <FaGithub className='fill-[#979595] w-[1.875rem] h-[1.875rem] cursor-pointer' />
            </a>

            <a href='mailto:borox.tv@gmail.com' target='_blank' className='bg-[#c62220] opacity-90 hover:opacity-100 duration-500 w-[3rem] h-[3rem] rounded-lg flex items-center justify-center ml-5 hover:scale-110 transition-transform'>
              <SiGmail className='fill-[#f56a60] w-[1.5625rem] h-[1.5625rem] cursor-pointer' />
            </a>

            <a href='https://twitter.com/borox345' target='_blank' className='bg-[#1c93e4] opacity-90 hover:opacity-100 duration-500 w-[3rem] h-[3rem] rounded-lg flex items-center justify-center ml-5 hover:scale-110 transition-transform'>
              <SiTwitter className='fill-[#97d5ff] w-[1.5625rem] h-[1.5625rem] cursor-pointer' />
            </a>
        </div>
{/* 
        <h2 className='lg:text-3xl text-3xl font-black text-white text-center mt-10'>
          💻 Technologies
        </h2>

        <div className='flex'>
          <div className='bg-[#060910] rounded-2xl inline-flex content-start mt-5 m-auto'>
            <DiPython className='text-white w-16 h-16 pt-2 pb-2 pl-5'/>
            <DiCss3 className='text-white w-16 h-16 pt-2 pb-2 pl-5'/>
            <SiTailwindcss className='text-white w-16 h-16 pt-2 pb-2 pl-5'/>
            <DiReact className='text-white w-16 h-16 pt-2 pb-2 pl-5'/>
            <SiTypescript className='text-white w-16 h-16 pt-2 pb-2 pl-5'/>
            <SiPostgresql className='text-white w-16 h-16 pt-2 pb-2 pl-5'/>
          </div>
        </div> */}



      </main >
    </div >
  )
}
