import React from 'react'
import { useState } from 'react'
import useFetch from '../hooks/useFetch'

// const apiUrl = 'https://nominatim.openstreetmap.org/search'

type Props = {
  countrycodes?: string
}

export default function AddressAutocomplete({ countrycodes = 'gb' }: Props) {
  const { data, setAddress } = useFetch({ countrycodes })
  const [textfield, setTextfield] = useState('')

  return (
    <div>
      <label htmlFor="address-input">Enter your address:</label>
      <input
        type="text"
        id="address-input"
        value={textfield}
        onChange={(e) => {
          const value = e.target.value
          setTextfield(value)
          setAddress(value)
        }}
      />

      {!!data.length && (
        <ul>
          {data.map((suggestion, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  setTextfield(data[index].display_name)
                }}
              >
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
