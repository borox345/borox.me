import Head from 'next/head';
import React, { useState, useEffect } from 'react'

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

                <p className='lg:text-xl text-xl text-white leading-6 tracking-wide mb-12 pt-4 text-center'>
                    <br />
                    <span className='text-[#557eca]'>discord:</span> <a href='https://discord.com/users/314424536256872449'>borox#0178</a>
                    <br />
                    <span className='text-[#1d9bf0]'>twitter:</span> <a href='https://twitter.com/borox345'>@borox345</a>
                    <br />
                    <span className='text-[#727272]'>github:</span> <a href='https://github.com/borox345'>@borox345</a>
                    <br />
                    <span className='text-[#ff6969]'>mail:</span> <a href='mailto:borox.tv@gmail.com'>borox.tv@gmail.com</a>
                </p>

            </main >
        </div >
    )
}
