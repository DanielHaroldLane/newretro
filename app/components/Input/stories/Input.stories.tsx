import type { Meta, StoryObj } from '@storybook/react'

import { HelperLevel, Input } from '../'

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

export const WithErrorHelperText: Story = {
  args: {
    name: 'firstName',
    labelText: 'First Name',
    type: 'text',
    autoComplete: 'given-name',
    helperDetails: {
      level: HelperLevel.Error,
      text: 'Please provide your first name.',
    },
  },
}

export const WithInformationHelperText: Story = {
  args: {
    name: 'firstName',
    labelText: 'First Name',
    type: 'text',
    autoComplete: 'given-name',
    helperDetails: {
      level: HelperLevel.Information,
      text: 'Please provide your first name.',
    },
  },
}
