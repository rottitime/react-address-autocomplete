import React, { useId } from 'react'
import { useState } from 'react'
import useFetch from '../hooks/useFetch'

type Props = {
  countrycodes?: string
  label: string
  hideLabel?: boolean
}

export default function AddressAutocomplete({
  countrycodes = 'gb',
  label,
  hideLabel
}: Props) {
  const { data, setAddress, clear } = useFetch({ countrycodes })
  const id = useId()
  const inuputId = `input_${id}`
  const [textfield, setTextfield] = useState('')

  return (
    <div>
      {!hideLabel && <label htmlFor={inuputId}>{label}</label>}
      <input
        aria-label={label}
        type="text"
        id={inuputId}
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
                  clear()
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
