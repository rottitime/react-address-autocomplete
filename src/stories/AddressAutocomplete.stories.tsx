import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { ComponentProps } from 'react'
import AddressAutocomplete from '../components/AddressAutocomplete'

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
  label: 'Enter your address'
} as ComponentProps<typeof AddressAutocomplete>

export const WithCountryCode = Template.bind({})
WithCountryCode.args = {
  ...Default.args,
  countrycodes: ['GB']
}
