import Link from 'next/link'
import { useState } from 'react'
// import NowPlaying from 'components/NowPlaying';

export const ExternalLink = ({ href, children }: any) => (
  <a
    className="text-gray-500 transition hover:text-gray-600"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
)

export default function Footer() {
  const [email, setEmail] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const _date = new Date()
  return (
    <footer className="px-4 sm:px-20">
      <div className="flex flex-col justify-between gap-4 py-10 px-2 lg:flex-row">
        <div className="grid flex-1 grid-flow-row gap-2 text-gray-400  md:grid-flow-col md:grid-rows-3">
          <Link href="#feedback">Feedback</Link>
          {/* <ExternalLink href="https://gum.co/lapse_app">Buy</ExternalLink> */}
          <ExternalLink href="https://achuth.notion.site/Changelog-4c898f8b4ec140abb1d6a6d2e9108a15">
            Changelog
          </ExternalLink>
          <ExternalLink href="https://achuth.notion.site/Press-Kit-1a3b994e395d43efbaf6727fed4429f1">
            Press kit
          </ExternalLink>
          <ExternalLink href="https://achuth.notion.site/Privacy-Policy-ec65b78f07c443e2a3bcd46d834a263d">
            Privacy policy
          </ExternalLink>
          <ExternalLink href="https://achuth.notion.site/Terms-of-Service-cf16898198bd42eeb41f4a780f04ac94">
            {'Terms & conditions'}
          </ExternalLink>
          <ExternalLink href="https://achuth.notion.site/Refund-Policy-dd800e71934c4b9c85ce12bf504544f4">
            Refund Policy
          </ExternalLink>
        </div>
        <div className="mt-10 max-w-lg rounded-lg bg-green-900/30 px-2 py-4 sm:mt-0  sm:px-10">
          <h3 className="mb-5 text-2xl">Be the first to know</h3>
          <p className="mb-5 text-sm text-gray-300">
            We’ll inform you about new tips, apps and deals. No spam, we
            promise.
          </p>
          <form
            className="flex flex-col rounded-lg bg-black/50 p-2 sm:flex-row"
            onSubmit={async (e) => {
              e.preventDefault()
              let { status, error }: any = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  email: email,
                }),
              })
              switch (status) {
                case 201:
                  setSuccessMessage('You are subscribed')
                  break
                case 400:
                  setSuccessMessage(error)
                  break
              }
              setEmail('')
            }}
          >
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              placeholder="join@email.addess"
              className="flex-1 bg-transparent px-4 py-2  outline-none"
              required
              autoFocus={true}
            />
            <button
              type="submit"
              className="mt-5 w-full rounded-md bg-green-800 px-4 py-2 sm:mt-0 sm:w-fit "
            >
              Subscribe
            </button>
          </form>
          {successMessage && (
            <div className="fixed top-10 right-0 flex items-center rounded bg-lime-100 px-2 text-green-600 ">
              {successMessage}
              <span
                className="p-2"
                onClick={() => {
                  setSuccessMessage('')
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 6L18 18"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-between py-5 text-xs">
        <span>
          Copyright © {_date.getFullYear()} <i className="font-mono">Lapse</i>
        </span>
        <span>
          <a href="https://twitter.com/achuth_hadnoor">
            <svg
              fill="none"
              height="16"
              width="16"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  )
}
