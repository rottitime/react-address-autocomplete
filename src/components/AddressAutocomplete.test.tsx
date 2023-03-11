import React, { ComponentProps } from 'react'
import {
  screen,
  render
  // waitFor,
} from '@testing-library/react'
import AddressAutocomplete from './AddressAutocomplete'
// import userEvent from '@testing-library/user-event'

const props: ComponentProps<typeof AddressAutocomplete> = {
  label: 'address label'
}

describe('AddressAutocomplete', () => {
  afterEach(() => {
    fetchMock.resetMocks()
  })

  it('renders default', async () => {
    const { label } = props
    render(<AddressAutocomplete {...props} />)

    const textfield = screen.getByLabelText(label)

    expect(screen.getByText(label)).toBeVisible()
    expect(textfield).toBeVisible()
    expect(textfield).toHaveValue('')
    expect(textfield).toHaveAttribute('aria-label', label)
    expect(screen.getByRole('region')).toBeInTheDocument()
    expect(screen.getByRole('region')).toBeEmptyDOMElement()
  })

  it('label hidden', async () => {
    const { label } = props
    render(<AddressAutocomplete {...props} hideLabel />)
    expect(screen.queryByText(label)).not.toBeInTheDocument()
    expect(screen.getByLabelText(label)).toHaveAttribute('aria-label', label)
  })

  // it('renders with value', async () => {
  //   render(
  //     <AddressAutocomplete
  //       label="my-label"
  //       value="my-value"
  //       options={mockOptions}
  //       onChange={jest.fn()}
  //     />
  //   )
  //   expect(screen.getByLabelText('my-label')).toHaveValue('my-value')
  // })

  // it('loading', async () => {
  //   render(
  //     <AddressAutocomplete
  //       label="my-label"
  //       loading={true}
  //       options={[]}
  //       onChange={jest.fn()}
  //     />
  //   )

  //   await userEvent.click(screen.getByLabelText('my-label'))

  //   await waitFor(async () => {
  //     expect(screen.getByTestId('loading-icon')).toBeInTheDocument()
  //   })
  //   expect(screen.getByText('Loading…')).toBeInTheDocument()
  // })

  // describe('on typing', () => {
  //   it('renders full list', async () => {
  //     render(
  //       <AddressAutocomplete
  //         label="my-label"
  //         options={mockOptions}
  //         onChange={jest.fn()}
  //       />
  //     )

  //     const textfield = screen.getByLabelText('my-label')

  //     await userEvent.click(textfield)

  //     await waitFor(async () => {
  //       expect(screen.getByText(mockOptions[0].title)).toBeVisible()
  //     })
  //     expect(screen.getByText(mockOptions[1].title)).toBeVisible()
  //     expect(screen.getByText(mockOptions[2].title)).toBeVisible()
  //   })

  //   it('sets value', async () => {
  //     const mockSelected = jest.fn()
  //     render(
  //       <AddressAutocomplete
  //         label="my-label"
  //         options={mockOptions}
  //         onChange={(data) => mockSelected(data)}
  //       />
  //     )

  //     const textfield = screen.getByLabelText('my-label')
  //     await userEvent.click(textfield)
  //     await userEvent.type(textfield, 'Sec')
  //     expect(mockSelected).toHaveBeenLastCalledWith('Sec')
  //   })

  //   it('shows matches', async () => {
  //     render(
  //       <AddressAutocomplete
  //         label="my-label"
  //         options={mockOptions}
  //         onChange={jest.fn()}
  //       />
  //     )

  //     const textfield = screen.getByLabelText('my-label')

  //     await userEvent.click(textfield)

  //     await waitFor(async () => {
  //       expect(screen.getByText(mockOptions[0].title)).toBeVisible()
  //     })

  //     await userEvent.type(textfield, 'Sec')

  //     expect(screen.getByText(mockOptions[1].title)).toBeVisible()
  //     expect(screen.queryByText(mockOptions[0].title)).not.toBeInTheDocument()
  //     expect(screen.queryByText(mockOptions[2].title)).not.toBeInTheDocument()
  //   })

  //   it('shows disabled', async () => {
  //     const mockSelected = jest.fn()
  //     render(
  //       <AddressAutocomplete
  //         label="my-label"
  //         disableOptions={[mockOptions[1].title]}
  //         options={mockOptions}
  //         onChange={(data) => mockSelected(data)}
  //       />
  //     )

  //     const textfield = screen.getByLabelText('my-label')
  //     await userEvent.click(textfield)
  //     const option = screen.getByText(mockOptions[1].title)
  //     expect(option).toBeVisible()
  //     expect(option).toHaveAttribute('aria-disabled', 'true')
  //   })
  // })

  // describe('on selecting', () => {
  //   it('sets value', async () => {
  //     const mockSelected = jest.fn()
  //     render(
  //       <AddressAutocomplete
  //         label="my-label"
  //         options={mockOptions}
  //         onChange={(data) => mockSelected(data)}
  //       />
  //     )

  //     const textfield = screen.getByLabelText('my-label')

  //     expect(textfield).toHaveValue('')

  //     await userEvent.click(textfield)

  //     await waitFor(async () => {
  //       expect(screen.getByText(mockOptions[0].title)).toBeVisible()
  //     })

  //     await userEvent.click(screen.getByText(mockOptions[1].title))

  //     expect(textfield).toHaveValue(mockOptions[1].title)
  //     expect(mockSelected).toHaveBeenLastCalledWith(mockOptions[1].title)
  //   })
  // })
})
