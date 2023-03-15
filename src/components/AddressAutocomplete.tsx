import React, { ChangeEvent, useEffect, useId, useState } from 'react'
import useDebounce from '../hooks/useDebounce'
import useFetch, { Props as useFetchProps } from '../hooks/useFetch'
import { MapData } from '../types'

type Props = {
  label: string
  hideLabel?: boolean
  onSelected?: (data: MapData) => void
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
} & Pick<useFetchProps, 'countrycodes'>

export default function AddressAutocomplete({
  countrycodes,
  label,
  hideLabel,
  onSelected,
  onChange
}: Props) {
  const { data, setAddress, clear } = useFetch({ countrycodes })
  const id = useId()
  const inputId = `input_${id}`
  const listId = `list_${id}`
  const [textfield, setTextfield] = useState('')

  const debouncedSearchQuery = useDebounce(textfield, 600)

  useEffect(() => {
    setAddress(textfield)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchQuery])

  const results = data.filter((mapData) => mapData.display_name !== textfield)
  const hasResults = !!textfield && !!results.length

  //TODO: Add aria-autocomplete="list"
  return (
    <div>
      {!hideLabel && <label htmlFor={inputId}>{label}</label>}
      <input
        aria-label={label}
        aria-owns={listId}
        aria-autocomplete="list"
        type="text"
        id={inputId}
        value={textfield}
        onChange={(e) => {
          setTextfield(e.target.value)
          if (typeof onChange === 'function') onChange(e)
        }}
      />

      <div role="listbox" aria-live="polite" id={listId} aria-expanded={hasResults}>
        {hasResults && (
          <ul>
            {results.map((suggestion, index) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    const mapData = data[index]
                    setTextfield(mapData.display_name)
                    clear()
                    if (typeof onSelected === 'function') onSelected(mapData)
                  }}
                >
                  {suggestion?.display_name}
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
}
