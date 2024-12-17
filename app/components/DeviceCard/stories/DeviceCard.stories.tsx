import type { Meta, StoryObj } from '@storybook/react'

import { DeviceCard } from '../DeviceCard'

const meta = {
  component: DeviceCard,
} satisfies Meta<typeof DeviceCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
