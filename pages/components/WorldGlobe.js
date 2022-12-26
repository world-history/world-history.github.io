import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import * as three from "three"

const Globe = dynamic(() => import('react-globe.gl'), { ssr: false })

const WorldGlobe = ({ width, waterColor, landColor, landHoverColor, landSideColor, outlineColor, textColor, normalHeight, hoverHeight }) => {
  const [countries, setCountries] = useState({ features: [] });
  const [hoverCountry, setHoverCountry] = useState();

  useEffect(() => {
    fetch('../../datasets/countries.json').then(res => res.json()).then(setCountries);
  }, [])

  const globeMaterial = new three.MeshPhongMaterial();
  globeMaterial.color = new three.Color(waterColor);

  const hideGlobeLoader = () => {
    document.getElementById("globeLoader").hidden = true;
  }

  return (
    <div>
      <Globe
        width={width}
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        backgroundColor='#00000000'
        lineHoverPrecision={0}
        atmosphereAltitude={0.2}
        polygonsData={countries.features}
        polygonAltitude={country => country === hoverCountry ? hoverHeight : normalHeight}
        polygonCapColor={country => country === hoverCountry ? landHoverColor : landColor}
        polygonSideColor={country => landSideColor}
        polygonStrokeColor={country => outlineColor}
        labelColor={textColor}
        polygonLabel={({ properties: country }) => country.ADMIN}
        onPolygonClick={({ properties: country }) => console.log(country.ADMIN)}
        onPolygonHover={setHoverCountry}
        polygonsTransitionDuration={50}
        globeMaterial={globeMaterial}
        onGlobeReady={hideGlobeLoader}
      />
    </div>
  )
}

export default WorldGlobe
