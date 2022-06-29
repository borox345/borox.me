import Head from 'next/head';
import React, { useState, useEffect } from 'react'
import axios from "axios";

import { IoIosArrowDown } from 'react-icons/io'

export default function Home() {

    return (
        <div className="container flex items-center justify-center p-4 mx-auto min-h-screen">
            <Head>
                <title>borox</title>
            </Head>

            <main className='flex items-center justify-center'>
                <img src='https://c.tenor.com/oslAUCxTbO4AAAAC/rock-sus.gif'></img>
            </main >
        </div >
    )
}
