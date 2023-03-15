import React, { ComponentProps } from 'react'
import { screen, render, waitFor, fireEvent, within } from '@testing-library/react'
import AddressAutocomplete from './AddressAutocomplete'
import { MapData } from '../types'

const props: ComponentProps<typeof AddressAutocomplete> = {
  label: 'address label'
}

const mockData: Pick<MapData, 'display_name'>[] = [...Array(3).keys()].map((i) => ({
  display_name: `Random title ${i}`
}))

describe('AddressAutocomplete', () => {
  afterEach(() => {
    fetchMock.resetMocks()
  })

  it('renders default', async () => {
    const { label } = props
    render(<AddressAutocomplete {...props} />)

    const textfield = screen.getByLabelText(label)
    const list = screen.getByRole('listbox')

    expect(screen.getByText(label)).toBeVisible()
    expect(screen.getByText(label)).toHaveAttribute('for', textfield.id)
    expect(textfield).toBeVisible()
    expect(textfield).toHaveValue('')
    expect(textfield).toHaveAttribute('aria-label', label)
    expect(textfield).toHaveAttribute('aria-owns', list.id)
    expect(list).toBeInTheDocument()
    expect(list).toBeEmptyDOMElement()
    expect(list).toHaveAttribute('aria-expanded', 'false')
  })

  it('label hidden', async () => {
    const { label } = props
    render(<AddressAutocomplete {...props} hideLabel />)
    expect(screen.queryByText(label)).not.toBeInTheDocument()
    expect(screen.getByLabelText(label)).toHaveAttribute('aria-label', label)
  })

  describe('fetch', () => {
    it('creates list', async () => {
      fetchMock.mockResponse(JSON.stringify(mockData))
      render(<AddressAutocomplete {...props} hideLabel />)

      const textfield = screen.getByLabelText(props.label)
      const list = screen.getByRole('listbox')

      fireEvent.change(textfield, { target: { value: 'Hyrule castle' } })

      await waitFor(() => expect(textfield).toHaveValue('Hyrule castle'))
      await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1))

      expect(list).toHaveAttribute('aria-expanded', 'true')
      expect(list).not.toBeEmptyDOMElement()

      mockData.forEach(({ display_name }) => {
        expect(within(list).getByText(display_name)).toBeInTheDocument()
      })
    })
  })
})
