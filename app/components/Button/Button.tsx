interface Props {
  title: string
  className: string
}

export const Button = ({ title, className }: Props) => {
  return (
    <button title={title} className={className}>
      Lol
    </button>
  )
}
