import type { Meta, StoryObj } from '@storybook/react'

import { Input } from '../Input'

const meta = {
  component: Input,
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'firstName',
    labelText: 'First Name',
    type: 'text',
    autoComplete: 'given-name',
  },
}

export const WithHelperText: Story = {
  args: {
    name: 'firstName',
    labelText: 'First Name',
    type: 'text',
    autoComplete: 'given-name',
    helpText: 'Help meeeeeee',
  },
}
