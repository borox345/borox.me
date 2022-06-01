import Head from 'next/head';
import React, { useState, useEffect } from 'react'
import { BsSpotify } from 'react-icons/bs';
import axios from "axios";

const options = {method: 'GET', url: 'http://127.0.0.1:3000/spotify'};

export default function Home() {
  axios.request(options).then(function (response) {
    console.log(response.data.playing);
    if(response.data.code === 200){
      let playing = response.data.playing;
    }
    else {
      let playing = 'Not playing anything';
    }
    
  }).catch(function (error) {
    console.error(error);
  });
  

  return (
    <div className="container flex items-center justify-center p-4 mx-auto min-h-screen">
      <Head>
        <title>borox.me</title>
        <meta property="og:description" content="cool guy."></meta>
        <meta property="og:title" content="Hi! I'm borox."></meta>
        <meta property="og:image" content="https://i.imgur.com/18tX74U.png"></meta>
        <meta name="theme-color" content="#1a1a1a"></meta>
        <meta name="keywords" content="borox"></meta>
        <meta property="og:locale" content="en-US"></meta>
      </Head>

      <main>

        <h1 className="lg:text-4xl text-4xl font-black text-white text-center hover:scale-105 transition-transform duration-300">
          <span className="cursor-pointer text-[#7b97f3]">borox.me</span>
        </h1>


        <div className='flex items-center content-center justify-center mt-[1.25rem]'>
          <a className='text-white text-base hover:text-[#7b97f3]' href='https://discord.com/users/314424536256872449'>
            discord/
          </a>

          <a className='text-white text-base hover:text-[#7b97f3] ml-3' href='https://github.com/borox345'>
            github/
          </a>

          <a className='text-white text-base hover:text-[#7b97f3] ml-3' href='https://github.com/borox345'>
            mail/
          </a>

          <a className='text-white text-base hover:text-[#7b97f3] ml-3' href='https://twitter.com/borox345'>
            twitter/
          </a>
        </div>

        <h2 className="lg:text-1xl text-1xl font-black text-white text-center hover:scale-105 transition-transform duration-300 pt-3">
          <a href='https://ayo.so/borox'>
            <span className="cursor-pointer text-[#7b97f3]">ayo.so/borox</span>
          </a>
        </h2>

        <footer>
          <div className='flex items-center content-center justify-center mt-[1.25rem]'>
            <a href='https://open.spotify.com/track/4uOHYc6dCVLcNdQBRUlA0G'>
              <p className='text-[#1DB954] text-center'><BsSpotify className='inline-block'/> PLAYING</p>
            </a>
          </div>
        </footer>
        


      </main >
    </div >
  )
}
