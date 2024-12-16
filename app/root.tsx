import { LinksFunction } from '@remix-run/node'
import { Links, Meta, Outlet, Scripts } from '@remix-run/react'
import stylesheet from './tailwind.css?url'
import { Button } from './components/Button'

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
        <Button title="derp" className="text-[1rem]" />
        <Outlet />
        <Scripts />
      </body>
    </html>
  )
}
