import { useState } from 'react'

const apiUrl = 'https://nominatim.openstreetmap.org/search'

type Data = {
  display_name: string
}

const useFetch = () => {
  const [status, setStatus] = useState('idle')
  const [data, setData] = useState<Data[]>([])

  const setAddress = async (address: string) => {
    if (address.length > 2) {
      const params = {
        q: address,
        format: 'json',
        addressdetails: '1',
        limit: '5',
        countrycodes: 'gb'
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
