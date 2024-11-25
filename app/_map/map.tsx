"use client"

import React, { useEffect, useRef, useState } from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import style from './styles'

const initial = [
  [
    [ 151.20404340507804, -33.89210662757878 ],
    [ 151.20229253436435, -33.89182328022459 ],
    [ 151.20151403339378, -33.895481111099194 ],
    [ 151.20188314683526, -33.8939178260353 ],
    [ 151.202876772266, -33.89406155307119 ],
  ], [
    [ 151.20371963283526, -33.8938456788014 ],
    [ 151.20331179267868, -33.89566183404423 ],
    [ 151.20412740078626, -33.89584133467012 ],
    [ 151.20448259091557, -33.89396581892746 ],
    [ 151.2037464322384, -33.893857716524145 ],
  ], [
    [ 151.20542560977702, -33.89300212745141 ],
    [ 151.20485056669645, -33.89588602029117 ],
    [ 151.20594139994347, -33.896052921125715 ],
  ], [
    [ 151.2073565115944, -33.893261592108956 ],
    [ 151.2067373753274, -33.89609725014756 ],
    [ 151.20774007232762, -33.89627382281484 ],
  ], [
    [ 151.20925980181408, -33.893482075394985 ],
    [ 151.20870309304905, -33.89639453100965 ],
    [ 151.20960163669224, -33.89648197051722 ],
    [ 151.2102043216671, -33.89360381054122 ],
    [ 151.20924754903285, -33.89346987230906 ],
  ], [
    [ 151.2112452920236, -33.89381060437331 ],
    [ 151.2106456197036, -33.89659360751695 ],
    [ 151.2116202303123, -33.896777318363 ],
    [ 151.2119433614663, -33.89507223461719 ],
    [ 151.21159791258532, -33.896777318363 ],
    [ 151.21246134546982, -33.89688848247661 ],
    [ 151.21288939499976, -33.89448323621401 ],
  ],

  [
    [ 151.20088582535345, -33.898582544499085 ],
    [ 151.20214098242474, -33.89840437531826 ],
    [ 151.20163853584597, -33.89844922564456 ],
    [ 151.2021224873243, -33.899911207328074 ],
    [ 151.20204133730363, -33.899911207328074 ],
    [ 151.2022212238403, -33.90066856256643 ],
  ], [
    [ 151.2023498912057, -33.89840437531826 ],
    [ 151.20286172018268, -33.90060986283352 ],
    [ 151.2027087086363, -33.89980859591528 ],
    [ 151.20352868522997, -33.899652460058554 ],
    [ 151.20371551178124, -33.9004553508098 ],
  ], [
    [ 151.20446016173582, -33.90011296995476 ],
    [ 151.2040041469088, -33.89829891420841 ],
    [ 151.20543580018796, -33.89834425149503 ],
    [ 151.20515120842174, -33.89986004785121 ],
    [ 151.20530907420965, -33.89904208965987 ],
    [ 151.2041974032643, -33.8989576012619 ],
  ], [
    [ 151.20582648826957, -33.898389379118 ],
    [ 151.20704909824815, -33.89859724475045 ],
    [ 151.2063724562081, -33.89847901116385 ],
    [ 151.2063855635472, -33.89920882079948 ],
    [ 151.206262241991, -33.899962076832246 ],
  ],

  [
    [ 151.20181085808275, -33.90278792437946 ],
    [ 151.20288284078538, -33.90544050427288 ],
    [ 151.20444790363183, -33.90459962601011 ],
    [ 151.20351007995663, -33.90244591723754 ],
    [ 151.2017686548201, -33.90273106677221 ],
  ],
  [
    [ 151.20518622739132, -33.90413553409231 ],
    [ 151.20553060777064, -33.90268553942266 ],
    [ 151.20647093979966, -33.9027538166886 ],
    [ 151.2063341735904, -33.903116572621435 ],
  ], [
    [ 151.20733024033694, -33.90305024806138 ],
    [ 151.20788759335142, -33.90339269193863 ],
    [ 151.2089221938333, -33.90347784942539 ],
    [ 151.20942219210775, -33.90238931604758 ],
    [ 151.20849464753843, -33.901961051450314 ],
    [ 151.20726617773602, -33.90306099359151 ],
    [ 151.2064500087725, -33.903573436181965 ],
    [ 151.2067456204877, -33.904225789180146 ],
    [ 151.20755469367145, -33.90407941298443 ],
  ],[
    [ 151.20884191670785, -33.90527622905335 ],
    [ 151.209730812114, -33.90368995583795 ],
    [ 151.21003089917014, -33.90338203455 ],
    [ 151.21048652899594, -33.90339269193863 ],
    [ 151.2111248712191, -33.903488481426145 ],
    [ 151.20992817048534, -33.90566051134384 ],
    [ 151.21056157245152, -33.904516934393726 ],
    [ 151.2095015776452, -33.90410035684116 ],
  ],[
    [ 151.21054271523332, -33.905927109328594 ],
    [ 151.21185198619838, -33.90361990243416 ],
    [ 151.21254190920217, -33.90369931137899 ],
    [ 151.2122434698843, -33.905146909297414 ],
    [ 151.212556039839, -33.90367663862287 ],
    [ 151.21416425059545, -33.90388024804347 ],
    [ 151.21355855239972, -33.906130509107065 ],
  ],
]

export const MapComponent: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null)
  const mapRef = useRef<maplibregl.Map | null>(null)
  const [coordinates, setCoordinates] = useState<[number, number][]>([])
  const [pathCount, setPathCount] = useState(initial.length)

  useEffect(() => {
    if (mapContainerRef.current) {
      const map = new maplibregl.Map({
        container: mapContainerRef.current,
        style,
        center: [151.20829960955678, -33.901047347112765],
        zoom: 15.68,
        pitch: 55.55,
      })

      mapRef.current = map

      map.on('load', () => {
        // Add initial paths
        initial.forEach((path, index) => {
          map.addSource(`route-${index}`, {
            type: 'geojson',
            data: {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'LineString',
                coordinates: path
              }
            }
          })

          map.addLayer({
            id: `route-${index}`,
            type: 'line',
            source: `route-${index}`,
            layout: {
              'line-join': 'round',
              'line-cap': 'round'
            },
            paint: {
              'line-color': '#059669',
              'line-width': 12
            }
          })
        })

        // Add source for current path
        map.addSource(`route-${pathCount}`, {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: []
            }
          }
        })

        map.addLayer({
          id: `route-${pathCount}`,
          type: 'line',
          source: `route-${pathCount}`,
          layout: {
            'line-join': 'round',
            'line-cap': 'round'
          },
          paint: {
            'line-color': '#888',
            'line-width': 8
          }
        })
      })

      map.on('click', (e) => {
        const { lng, lat } = e.lngLat
        const newCoordinate: [number, number] = [lng, lat]
        setCoordinates(prev => [...prev, newCoordinate])
      })

      return () => {
        map.remove()
      }
    }
  }, [])

  // Separate useEffect for key handling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && coordinates.length >= 2) {
        e.preventDefault()
        console.log('Copy this array:')
        console.log(JSON.stringify(coordinates, null, 2) + ',')
        
        if (mapRef.current) {
          const map = mapRef.current
          const newPathCount = pathCount + 1
          
          map.addSource(`route-${newPathCount}`, {
            type: 'geojson',
            data: {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'LineString',
                coordinates: []
              }
            }
          })

          map.addLayer({
            id: `route-${newPathCount}`,
            type: 'line',
            source: `route-${newPathCount}`,
            layout: {
              'line-join': 'round',
              'line-cap': 'round'
            },
            paint: {
              'line-color': '#888',
              'line-width': 8
            }
          })

          setPathCount(newPathCount)
          setCoordinates([])
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [coordinates, pathCount])

  // Update the current path
  useEffect(() => {
    if (mapRef.current && coordinates.length >= 2) {
      const map = mapRef.current
      const source = map.getSource(`route-${pathCount}`) as maplibregl.GeoJSONSource
      if (source) {
        source.setData({
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: coordinates
          }
        })
      }
    }
  }, [coordinates, pathCount])

  return <div ref={mapContainerRef} style={{ width: '100%', height: '100vh' }} />
}
