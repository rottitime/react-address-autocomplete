import React from 'react'
import { useState } from 'react'
import useFetch from '../hooks/useFetch'

// const apiUrl = 'https://nominatim.openstreetmap.org/search'

type Props = {
  countrycodes?: string
}

export default function AddressAutocomplete({ countrycodes = 'gb' }: Props) {
  const [textfield, setTextfield] = useState('')
  // const [suggestions, setSuggestions] = useState([])

  const { data: suggestions, status, setAddress } = useFetch({ countrycodes })

  // useEffect(() => {
  //   if (address.length > 2) {
  //     const params = {
  //       q: address,
  //       format: 'json',
  //       addressdetails: 1,
  //       limit: 5,
  //       countrycodes: 'gb'
  //     }
  //     axios
  //       .get(apiUrl, { params })
  //       .then((response) => {
  //         setSuggestions(response.data)
  //       })
  //       .catch((error) => {
  //         console.error(error)
  //       })
  //   } else {
  //     setSuggestions([])
  //   }
  // }, [address])

  function selectAddress(index: number) {
    setAddress(suggestions[index].display_name)
    // setSuggestions([])
  }

  // function highlightAddress(address, query) {
  //   console.log({ address, query })
  // const highlighted = match(address, query)
  // return highlighted.value
  // }

  return (
    <div>
      <label htmlFor="address-input">Enter your address:</label>
      <input
        type="text"
        id="address-input"
        value={textfield}
        onChange={(e) => setTextfield(e.target.value)}
      />

      {!!suggestions.length && (
        <ul>
          {suggestions.map((suggestion, index) => {
            return (
              <li key={index} onClick={() => selectAddress(index)}>
                {suggestion?.display_name}
                {textfield}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
