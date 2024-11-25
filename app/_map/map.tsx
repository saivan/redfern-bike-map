"use client"

import React, { useCallback, useEffect, useRef, useState } from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import { initialPath } from './path'
import style from './styles'


interface MapComponentProps {
  highlighted: number | null;
}

const editMode = false

export const MapComponent: React.FC<MapComponentProps> = ({ highlighted }) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null)
  const mapRef = useRef<maplibregl.Map | null>(null)
  const [coordinates, setCoordinates] = useState<[number, number][]>([])
  const [pathCount, setPathCount] = useState(initialPath.length)

  const getPathStyle = useCallback((index: number) => ({
    color: highlighted === null || highlighted === index ? '#059669' : '#94a3b8',
    width: highlighted === null || highlighted === index ? 28 : 8
  }), [highlighted])

  useEffect(() => {
    if (mapContainerRef.current) {
      const map = new maplibregl.Map({
        container: mapContainerRef.current,
        style: style as maplibregl.StyleSpecification,
        center: [151.20799137790868, -33.90345518308053],
        zoom: 15.68,
        pitch: 55.55,
      })

      mapRef.current = map

      map.on('load', () => {
        // Add initial paths
        initialPath.forEach((path, index) => {
          const style = getPathStyle(index)

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
              'line-color': style.color,
              'line-width': style.width
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

      if (editMode) {
        map.on('click', (e) => {
          const { lng, lat } = e.lngLat
          const newCoordinate: [number, number] = [lng, lat]
          setCoordinates(prev => [...prev, newCoordinate])
        })
      }

      return () => {
        map.remove()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Update path colors when highlighted prop changes
  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current
      initialPath.forEach((_, index) => {
        const style = getPathStyle(index)
        const layer = map.getLayer(`route-${index}`)
        if (layer) {
          map.setPaintProperty(
            `route-${index}`,
            'line-color',
            style.color
          )
          map.setPaintProperty(
            `route-${index}`,
            'line-width',
            style.width
          )
        }
      })
    }
  }, [highlighted, getPathStyle])

  // Separate useEffect for key handling
  useEffect(() => {
    // Do nothing if we are not in edit mode
    if (editMode==false) return

    // Otherwise handle key presses
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
