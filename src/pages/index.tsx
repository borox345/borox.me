import Head from 'next/head';
import { FaDiscord } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si'

export default function Home() {


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
        <div className=''>

          <h1 className="lg:text-6xl text-4xl font-black text-white text-center hover:scale-110 transition-transform">
            Hi! I'm <span className="text-[#5865F2] cursor-pointer">borox</span>!
          </h1>
          <p className='text-white text-center lg:text-2xl md:text-xl text-xl'>
            <span className='font-bold'>front-end</span> begginer and <span className='font-bold'>python</span> enjoyer
          </p>

          <div className='flex items-center justify-center relative top-[20px]'>
            <a href='https://discord.com/users/314424536256872449' target='_blank' className='bg-[#3d48c0] opacity-80 hover:opacity-100 duration-500 w-[3rem] h-[3rem] rounded-lg flex items-center justify-center hover:scale-110 transition-transform'>
              <FaDiscord className='fill-[#b9bfff] w-[1.875rem] h-[1.875rem] cursor-pointer' />
            </a>
            <a href='https://github.com/borox345' target='_blank' className='bg-[#1a1a1a] opacity-90 hover:opacity-100 duration-500 w-[3rem] h-[3rem] rounded-lg flex items-center justify-center relative left-5 hover:scale-110 transition-transform'>
              <FaGithub className='fill-[#979595] w-[1.875rem] h-[1.875rem] cursor-pointer' />
            </a>
          </div>

        </div>



        <div className='relative top-[32rem] text-left' id='left-content'>
          <h1 className='text-white text-4xl'>technologies</h1>
          <SiTypescript className='fill-[#358EF1] h-[1.875rem] w-[1.875rem] ' />
        </div>

      </main>
    </div>
  )
}
