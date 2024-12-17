import type { PropsWithChildren } from 'react'

interface Props {
  title: string
  className: string
}

export const Button = ({
  title,
  className,
  children,
}: Props & PropsWithChildren) => {
  return (
    <button title={title} className={className}>
      {children}
    </button>
  )
}
