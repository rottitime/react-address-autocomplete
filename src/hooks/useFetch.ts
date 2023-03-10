import { useState } from 'react'
import { MapData } from '../types'

const apiUrl = 'https://nominatim.openstreetmap.org/search'

type Params = {
  q: string
  format: 'xml' | 'json' | 'jsonv2' | 'geojson' | 'geocodejson'
  addressdetails: string
  limit: string
  countrycodes: string
}

type Props = {
  countrycodes: string
}

const useFetch = ({ countrycodes }: Props) => {
  const [status, setStatus] = useState<'idle' | 'fetching' | 'fetched'>('idle')
  const [data, setData] = useState<MapData[]>([])

  const clear = () => setData([])

  const setAddress = async (address: string) => {
    if (address.length > 2) {
      const params: Params = {
        q: address,
        format: 'json',
        addressdetails: '1',
        limit: '5',
        countrycodes
      }

      setStatus('fetching')
      try {
        const res = await fetch(`${apiUrl}?` + new URLSearchParams(params))
        const data = await res.json()
        setData(data)
        setStatus('fetched')
      } catch (e) {
        console.error(e)
      }
    } else {
      setData([])
      setStatus('fetched')
    }
  }

  return { status, data, setAddress, clear } as const
}

export default useFetch
