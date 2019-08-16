import React from 'react'
import ReactMapboxGl, { GeoJSONLayer, Popup } from 'react-mapbox-gl'

import './dashboard.css'
import { getVessels } from '@seaspan/mock-package'

const Map = ReactMapboxGl({ accessToken: process.env.REACT_APP_MAPBOX })
const darkTheme = 'mapbox://styles/mapbox/dark-v9'

const circleLayout = {
  visibility: 'visible'
}
const circlePaint = {
  'circle-color': '#C8102E'
}
function Dashboard() {
  const [activeIndex, setActiveIndex] = React.useState(null)
  const [vessels, setVessels] = React.useState([])
  const [zoom, setZoom] = React.useState(0)

  React.useEffect(() => {
    getVessels()
      .then(vessels => {
        setVessels(vessels)
      })
      .catch(console.error)
  })
  const handleHover = data => {
    const id = data.features[0].properties.id
    const index = data.features[0].properties.index
    const event = new CustomEvent('highlight-vessel', {
      detail: {
        id
      }
    })
    window.dispatchEvent(event)
    setActiveIndex(index)
  }
  const handleLeave = () => {
    setActiveIndex(null)
  }
  const onZoom = data => {
    const newZoom = data.transform._zoom
    if (newZoom !== zoom) {
      setZoom(newZoom)
    }
  }
  return (
    // eslint-disable-next-line
    <Map style={darkTheme} className="map" zoom={[zoom]} onZoomEnd={onZoom}>
      {activeIndex !== null ? (
        <Popup coordinates={vessels[activeIndex].location}>
          <main className="popup">
            <h5>{vessels[activeIndex].name}</h5>
            <p>Lat: {vessels[activeIndex].location[1]}</p>
            <p>Lon: {vessels[activeIndex].location[0]}</p>
          </main>
        </Popup>
      ) : null}
      {vessels.map((vessel, index) => {
        return (
          <GeoJSONLayer
            key={vessel.name}
            data={{
              type: 'Feature',
              properties: {
                id: vessel.id,
                index
              },
              geometry: {
                type: 'Point',
                coordinates: vessel.location
              }
            }}
            circleLayout={circleLayout}
            circlePaint={circlePaint}
            circleOnMouseEnter={handleHover}
            circleOnMouseLeave={handleLeave}
          />
        )
      })}
    </Map>
  )
}

export default Dashboard
