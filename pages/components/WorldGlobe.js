import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import * as d3 from "d3"

const Globe = dynamic(() => import('react-globe.gl'), { ssr: false })

const WorldGlobe = () => {
  const [countries, setCountries] = useState({ features: [] });
  const [hoverCountry, setHoverCountry] = useState();

  useEffect(() => {
    fetch('../../datasets/countries.json').then(res => res.json()).then(setCountries);
  }, [])

  return (
    <div>
      <Globe
        globeImageUrl="https://unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundImageUrl="https://unpkg.com/three-globe/example/img/night-sky.png"
        lineHoverPrecision={0}
        polygonsData={countries.features}
        polygonAltitude={country => country === hoverCountry ? 0.1 : 0.02}
        polygonCapColor={country => 'green'}
        polygonSideColor={country => 'darkGreen'}
        polygonStrokeColor={country => '#111'}
        polygonLabel={({ properties: country }) => country.ADMIN}
        onPolygonClick={({ properties: country }) => console.log(country.ADMIN)}
        onPolygonHover={setHoverCountry}
        polygonsTransitionDuration={50}
      />
    </div>
  )
}

export default WorldGlobe
