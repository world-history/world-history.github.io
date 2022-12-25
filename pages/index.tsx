import { DocumentData, DocumentSnapshot } from 'firebase/firestore/lite';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { createRoot } from "react-dom/client"
import { writeData, readDoc, queryDocs } from "./api/index"

import WorldGlobe from './components/WorldGlobe'

const Home: NextPage = () => {
  if (typeof window !== "undefined") {
    const container = document.getElementById("globeCanvas");
    createRoot(container!).render(<WorldGlobe />)
  }

  return (
    <div>
      <div id='globeCanvas'></div>
    </div>
  )
}

export default Home
