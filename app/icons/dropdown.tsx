interface DropdownIconProps {
  className?: string
}

const DropdownIcon = ({ className }: DropdownIconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.41 7.99991L12 13L16.59 7.99991L18 9.40991L12 15.4099L6 9.40991L7.41 7.99991Z"
      fill="#000000"
    ></path>
  </svg>
)

export default DropdownIcon
