import logo from '~/static/FooterLogo.png'
import { wrapped } from '~/utils'

type FooterItem = {
  href: string
  label: string
}

type FooterSection = {
  items: Array<FooterItem>
  heading: FooterItem
}

interface FooterProps {
  sections: Array<FooterSection>
}

const FooterWrapper = wrapped('footer', {
  className: 'flex flex-wrap bg-black text-white',
})

const FooterLayout = wrapped('div', {
  className:
    'ml-8 mr-8 mt-8 grid w-full grid-cols-1 gap-x-4 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-8',
})

const FooterSectionContainer = wrapped('div', {
  className: 'mb-4',
})

export const Footer = ({ sections }: FooterProps) => {
  return (
    <FooterWrapper>
      <FooterLayout>
        <FooterSectionContainer>
          <img
            className="h-8 w-32"
            height={32}
            width={128}
            src={logo}
            alt="Footer Logo"
          />
        </FooterSectionContainer>
        {sections.map(({ items, heading }: FooterSection) => {
          return (
            <FooterSectionContainer key={heading.href}>
              <h2>
                <a href={heading.href} aria-label={heading.label} rel="">
                  {heading.label}
                </a>
              </h2>
              <ul>
                {items.map(({ href, label }: FooterItem) => {
                  return (
                    <li key={href} className="text-sm text-slate-400">
                      <a href={href} aria-label={label} rel="">
                        {label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </FooterSectionContainer>
          )
        })}
      </FooterLayout>
    </FooterWrapper>
  )
}
