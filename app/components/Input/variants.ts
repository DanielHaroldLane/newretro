import { cva } from 'class-variance-authority'

export const inputWrapperVariants = cva(
  ['group', 'relative', 'h-[3.25rem]', 'w-full', 'rounded-lg', 'border-2'],
  {
    variants: {
      border: {
        information: ['border-gray-300', 'focus-within:border-black'],
        error: [
          'border-red-700',
          'focus-within:shadow-red-700',
          'focus-within:shadow-[0_0_0_0.0625rem]',
        ],
      },
    },
  }
)

export const labelVariants = cva(
  [
    'absolute',
    'left-2',
    'right-2',
    'top-3',
    'transition-all',
    'ease-in-out',
    'group-focus-within:top-0',
    'group-focus-within:text-sm',
    'peer-[:not(:placeholder-shown)]:top-0',
    'peer-[:not(:placeholder-shown)]:text-sm',
  ],
  {
    variants: {
      text: {
        information: ['text-gray-500'],
        error: ['text-red-700', 'peer-[:not(:placeholder-shown)]:text-current'],
      },
    },
  }
)

export const helperTextVariants = cva(
  ['flex-row', 'pl-2', 'pr-2', 'pt-1', 'text-sm'],
  {
    variants: {
      text: {
        information: null,
        error: 'text-red-700',
      },
    },
  }
)
