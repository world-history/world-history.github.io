import type { NextPage } from 'next'
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
      landSideColor="#02b51f" 
      outlineColor="#fff" 
      textColor="#000" 
      normalHeight={0.1} 
      hoverHeight={0.02}
    />

    createRoot(container!).render(globe);
  }

  return (
    <div>
      <div id='globeCanvas' className='z-5 cursor-grab active:cursor-grabbing float-right'></div>
    </div>
  )
}

export default Home
