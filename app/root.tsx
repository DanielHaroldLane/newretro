import type { LinksFunction } from '@remix-run/node'
import { Links, Meta, Outlet, Scripts } from '@remix-run/react'
import { DeviceCard } from '~/components/DeviceCard'

import { Button } from './components/Button'
import stylesheet from './tailwind.css?url'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
]

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        <h1 className="text-3xl">Hello world!</h1>
        <Button title="derp" className="text-[1rem]">
          Im a button lol
        </Button>
        <DeviceCard></DeviceCard>
        <Outlet />
        <Scripts />
      </body>
    </html>
  )
}
