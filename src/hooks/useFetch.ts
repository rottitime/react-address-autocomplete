import { useState } from 'react'
import { CountryCodes, MapData } from '../types'

type ApiParams = {
  q: string
  format: 'xml' | 'json' | 'jsonv2' | 'geojson' | 'geocodejson'
  addressdetails: string
  limit: string
  countrycodes?: string
}

export type Props = {
  countrycodes?: (keyof typeof CountryCodes)[]
}

const apiUrl = 'https://nominatim.openstreetmap.org/search'

const useFetch = ({ countrycodes = [] }: Props) => {
  const [status, setStatus] = useState<'idle' | 'fetching' | 'fetched'>('idle')
  const [data, setData] = useState<MapData[]>([])

  const clear = () => setData([])

  const setAddress = async (address: string) => {
    if (address.length > 2) {
      const params: ApiParams = {
        q: address,
        format: 'json',
        addressdetails: '1',
        limit: '10',
        countrycodes: countrycodes.join(',')
      }

      setStatus('fetching')
      try {
        const res = await fetch(`${apiUrl}?${new URLSearchParams(params).toString()}`)
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
