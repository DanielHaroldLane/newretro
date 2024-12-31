import type { Meta, StoryObj } from '@storybook/react'

import { Footer } from '../'

const meta = {
  component: Footer,
} satisfies Meta<typeof Footer>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    sections: [
      {
        heading: {
          label: 'Repair Services',
          href: 'https://www.google.com',
        },
        items: [
          {
            label: 'Tech Repair',
            href: 'https://www.reddit.com',
          },
          {
            label: 'Screen Replacement',
            href: 'https://www.google.com',
          },
          {
            label: 'Laptop Repairs',
            href: 'https://www.google.com',
          },
        ],
      },
      {
        heading: {
          label: 'Console Modification',
          href: 'https://www.google.com',
        },
        items: [
          {
            label: 'Sega Modification',
            href: 'https://www.reddit.com',
          },
          {
            label: 'Nintendo Modification',
            href: 'https://www.google.com',
          },
          {
            label: 'Sony Modification',
            href: 'https://www.google.com',
          },
          {
            label: 'Microsoft Modification',
            href: 'https://www.google.com',
          },
        ],
      },
      {
        heading: {
          label: 'Help Centre',
          href: 'https://www.google.com',
        },
        items: [
          {
            label: 'Help Wiki',
            href: 'https://www.reddit.com',
          },
          {
            label: 'Help & Servicing',
            href: 'https://www.google.com',
          },
          {
            label: 'Tips & Tricks',
            href: 'https://www.google.com',
          },
          {
            label: 'Tutorials & Guides',
            href: 'https://www.google.com',
          },
        ],
      },
    ],
  },
}
