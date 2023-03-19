import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { ComponentProps } from 'react'
import AddressAutocomplete from '../index'

export default {
  title: 'AddressAutocomplete',
  component: AddressAutocomplete,
  argTypes: {
    countrycodes: {
      description:
        'Limit search results to one or more countries. <countrycode> must be the ISO 3166-1alpha2 code, e.g. gb for the United Kingdom, de for Germany.'
    }
  }
} as ComponentMeta<typeof AddressAutocomplete>

const Template: ComponentStory<typeof AddressAutocomplete> = (args) => (
  <AddressAutocomplete {...args} />
)

export const Default = Template.bind({})
Default.args = {
  label: 'Enter your address',
  placeholder: 'e.g. 10 downing street',
  style: { width: 500 }
} as ComponentProps<typeof AddressAutocomplete>

export const StylesDisabled = Template.bind({})
StylesDisabled.args = {
  ...Default.args,
  disableStyles: true
}

export const WithCountryCode = Template.bind({})
WithCountryCode.args = {
  ...Default.args,
  countrycodes: ['GB']
}
