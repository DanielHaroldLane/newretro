import type { Meta, StoryObj } from '@storybook/react'

import { TextInput } from '../'

const meta = {
  component: TextInput,
} satisfies Meta<typeof TextInput>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'firstName',
    labelText: 'First Name',
    autoComplete: 'given-name',
  },
}

export const WithAlwaysShownHelperTextAndNoValidation: Story = {
  args: {
    name: 'firstName',
    labelText: 'First Name',
    autoComplete: 'given-name',
    helper: {
      alwaysShow: true,
      informationText: 'Please provide your first name.',
    },
  },
}

export const WithAlwaysShownHelperTextAndValidation: Story = {
  args: {
    name: 'firstName',
    labelText: 'First Name',
    autoComplete: 'given-name',
    helper: {
      alwaysShow: true,
      validationText: 'Please provide your first name.',
      informationText: 'Test information text',
    },
    validationFunction: (value) => {
      if (value.trim() === '') return false
      return true
    },
  },
}

export const WithValidationHelperText: Story = {
  args: {
    name: 'firstName',
    labelText: 'First Name',
    autoComplete: 'given-name',
    validationFunction: (value) => {
      if (value.trim().toLowerCase() === '') return false
      return true
    },
    helper: {
      validationText: 'You need to provide a first name',
    },
  },
}

export const WithInvalidValidationAndNoHelperText: Story = {
  args: {
    name: 'firstName',
    labelText: 'First Name',
    autoComplete: 'given-name',
    validationFunction: () => {
      return false
    },
  },
}
