import type { NextPage } from 'next'
import Head from "next/head";
import Script from 'next/script';
import { createRoot } from "react-dom/client"

import WorldGlobe from './components/WorldGlobe'

const Home: NextPage = () => {
  // Globe Stuff
  if (typeof window !== "undefined") {
    const container = document.getElementById("globeCanvas");
    const globe = <WorldGlobe 
      width={600} 
      waterColor="#0377fc" 
      landColor="#00d423" 
      landHoverColor="#25f748"
      landSideColor="#02b51f" 
      outlineColor="#fff" 
      textColor="#000" 
      normalHeight={0.02} 
      hoverHeight={0.1}
    />

    createRoot(container!).render(globe);
  }

  return (
    <div>
      <Head>
        <Script src="https://kit.fontawesome.com/c3b7daf096.js" crossOrigin="anonymous"></Script>
      </Head>

      <p id="globeLoader">Loading...</p>
      <i className="fa-solid fa-spinner animate-spin"></i>
      <div id='globeCanvas' className='z-5 cursor-grab active:cursor-grabbing float-right'></div>
    </div>
  )
}

export default Home
