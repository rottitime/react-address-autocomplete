import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { ComponentProps } from 'react'
import AddressAutocomplete from '../components/AddressAutocomplete'

export default {
  title: 'AddressAutocomplete',
  component: AddressAutocomplete,
  argTypes: {}
} as ComponentMeta<typeof AddressAutocomplete>

const Template: ComponentStory<typeof AddressAutocomplete> = (args) => (
  <AddressAutocomplete {...args} />
)

export const Default = Template.bind({})
Default.args = {
  countrycodes: 'gb'
} as ComponentProps<typeof AddressAutocomplete>
