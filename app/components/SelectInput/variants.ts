import { cva } from 'class-variance-authority'

export const labelVariants = cva(
  [
    'absolute',
    'left-2',
    'right-2',
    'transition-all',
    'ease-in-out',
    'group-focus-within:top-0',
    'group-focus-within:text-sm',
    'pointer-events-none',
    'text-gray-500',
  ],
  {
    variants: {
      text: {
        default: ['top-3'],
        optionSelected: ['top-0 text-sm'],
      },
    },
  }
)
