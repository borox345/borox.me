import Head from 'next/head'
import { AppProps } from 'next/app'
import '../styles/main.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>borox.me</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:description" content="python enjoyer"></meta>
        <meta property="og:title" content="Hey, I'm borox"></meta>
        <meta property="og:image" content="https://i.imgur.com/sSiADsG.png"></meta>
        <meta name="theme-color" content="#1a1a1a"></meta>
        <meta name="keywords" content="borox"></meta>
        <meta property="og:locale" content="en-US"></meta>
        <link rel="icon" href="https://i.imgur.com/PZsvhHZ.png" type="image/jpg" sizes="16x16"></link>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp