import type { Meta, StoryObj } from '@storybook/react'

import { SelectInput } from '../'

const meta = {
  component: SelectInput,
} satisfies Meta<typeof SelectInput>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'countryList',
    labelText: 'Select your country',
    options: [
      {
        value: '1',
        text: 'United States of America',
      },
      {
        value: '2',
        text: 'United Kingdom',
      },
      {
        value: '3',
        text: 'Uruguay',
      },
    ],
  },
}
