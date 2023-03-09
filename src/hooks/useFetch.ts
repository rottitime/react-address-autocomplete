import { useState } from 'react'

const apiUrl = 'https://nominatim.openstreetmap.org/search'

type Data = {
  place_id: number
  licence: string
  osm_type: string
  osm_id: number
  boundingbox: string[]
  lat: string
  lon: string
  display_name: string
  class: string
  type: string
  importance: number
  address: {
    house_number: string
    road: string
    suburb: string
    town: string
    county: string
    'ISO3166-2-lvl6': string
    state: string
    'ISO3166-2-lvl4': string
    postcode: string
    country: string
    country_code: string
  }
}

type Props = {
  countrycodes: string
}

const useFetch = ({ countrycodes }: Props) => {
  const [status, setStatus] = useState<'idle' | 'fetching' | 'fetched'>('idle')
  const [data, setData] = useState<Data[]>([])

  const setAddress = async (address: string) => {
    if (address.length > 2) {
      const params = {
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

  return { status, data, setAddress } as const
}

export default useFetch
