import { ReactSVG } from 'react-svg'
import bag from '~/static/icons/bag.svg'
import bell from '~/static/icons/bell.svg'
import chat from '~/static/icons/chat.svg'
import chevrondown from '~/static/icons/chevron-down.svg'
import chevronleft from '~/static/icons/chevron-left.svg'
import chevronright from '~/static/icons/chevron-right.svg'
import chevronup from '~/static/icons/chevron-up.svg'
import close from '~/static/icons/close.svg'
import cloudupload from '~/static/icons/cloud-upload.svg'
import coffee from '~/static/icons/coffee.svg'
import creditcard from '~/static/icons/credit-card.svg'
import danger from '~/static/icons/danger.svg'
import download from '~/static/icons/download.svg'
import edit from '~/static/icons/edit.svg'
import ellypsisvertical from '~/static/icons/ellypsis-vertical.svg'
import ellypsis from '~/static/icons/ellypsis.svg'
import error from '~/static/icons/error.svg'
import exit from '~/static/icons/exit.svg'
import eyeclosed from '~/static/icons/eye-closed.svg'
import eyecrossed from '~/static/icons/eye-crossed.svg'
import eye from '~/static/icons/eye.svg'
import favourite from '~/static/icons/favourite.svg'
import hamburger from '~/static/icons/hamburger.svg'
import image from '~/static/icons/image.svg'
import inbox from '~/static/icons/inbox.svg'
import info from '~/static/icons/info.svg'
import language from '~/static/icons/language.svg'
import link from '~/static/icons/link.svg'
import location from '~/static/icons/location.svg'

const ICON_RESOURCES = {
  bag,
  bell,
  chat,
  chevrondown,
  chevronleft,
  chevronright,
  chevronup,
  close,
  cloudupload,
  coffee,
  creditcard,
  danger,
  download,
  edit,
  ellypsisvertical,
  ellypsis,
  error,
  exit,
  eyeclosed,
  eyecrossed,
  eye,
  favourite,
  hamburger,
  image,
  inbox,
  info,
  language,
  link,
  location,
}

export type IconName = keyof typeof ICON_RESOURCES

const DEFAULT_SIZE = '1.5rem'

interface IconProps {
  name: IconName
  className?: string
  width?: string
  height?: string
}

export const Icon = ({
  name,
  className,
  width = DEFAULT_SIZE,
  height = DEFAULT_SIZE,
}: IconProps) => {
  const src = ICON_RESOURCES[name]
  return (
    <ReactSVG
      src={src}
      style={{ width, height }}
      useRequestCache={true}
      beforeInjection={(svg) => {
        svg.setAttribute('class', className ?? 'stroke-black')
        svg.setAttribute('style', `width: ${width}; height: ${height};`)
      }}
    />
  )
}
