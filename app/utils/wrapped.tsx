import type { JSX, PropsWithChildren } from 'react'

export const wrapped = <
  T extends keyof JSX.IntrinsicElements | React.FC<unknown>,
  P extends T extends keyof JSX.IntrinsicElements
    ? JSX.IntrinsicElements[T]
    : React.ComponentProps<T>,
>(
  tagOrComponent: T,
  props?: Partial<P>
) => {
  return function Wrapped({
    children,
    ...rest
  }: PropsWithChildren<Partial<P>>) {
    const Component = tagOrComponent as unknown as React.FC<P>

    return (
      <Component {...props} {...(rest as PropsWithChildren<P>)}>
        {children}
      </Component>
    )
  }
}
