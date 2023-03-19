import React, {
  ChangeEvent,
  InputHTMLAttributes,
  useEffect,
  useId,
  useState
} from 'react'
// import useDebounce from '../hooks/useDebounce'
// import useFetch, { Props as useFetchProps } from '../hooks/useFetch'
import { MapData } from '../types'
import './AddressAutocomplete.css'
import Loader from './Loader'

type Props = {
  label?: string
  disableStyles?: boolean
  onSelected?: (data: MapData) => void
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
} & InputHTMLAttributes<HTMLInputElement>

export default function AddressAutocomplete({
  label,
  onSelected,
  onChange,
  disableStyles,
  ...props
}: Props) {
  // const { data, setAddress, clear, status } = useFetch({ countrycodes })
  const id = 'useId'
  const inputId = `input_${id}`
  const listId = `list_${id}`
  const [textfield, setTextfield] = useState('')

  // useEffect(() => {
  //   setAddress(textfield)
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [debouncedSearchQuery])

  // const results = data.filter((mapData) => mapData.display_name !== textfield)
  // const hasResults = !!textfield && !!results.length

  return (
    <div
      className={`rottitime-address ${
        !!disableStyles ? 'diable-styles' : 'enable-styles'
      }`}
    >
      {!!label && <label htmlFor={inputId}>{label}</label>}
      <div className="input-wrapper">
        <input
          aria-label={label}
          aria-owns={listId}
          aria-autocomplete="list"
          autoComplete="off"
          type="text"
          id={inputId}
          // value={textfield}
          onChange={(e) => {
            // setTextfield(e.target.value)
            if (typeof onChange === 'function') onChange(e)
          }}
          {...props}
        />
        {/* {status === 'fetching' && <Loader />} */}
      </div>

      <div role="listbox" aria-live="polite" id={listId}>
        {/* {hasResults && (
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
        )} */}
      </div>
    </div>
  )
}
