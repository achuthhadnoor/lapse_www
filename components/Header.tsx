import Link from 'next/link'
import React, { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  const NavMenu = () => (
    <nav className="mt-24 flex h-full w-full flex-col items-end gap-10 rounded align-middle text-sm uppercase text-neutral-200 md:flex-row">
      <Link
        href={'/'}
        onClick={() => {
          setOpen(false)
        }}
      >
        <span className="px-2 py-1 text-3xl">Home</span>
      </Link>
      <Link
        href={'#features'}
        onClick={() => {
          setOpen(false)
        }}
      >
        <span className="px-2 py-1 text-3xl">Features</span>
      </Link>
      <Link
        href={'#faq'}
        onClick={() => {
          setOpen(false)
        }}
      >
        <span className="px-2 py-1 text-3xl">FAQ</span>
      </Link>
      {/* <Link href={'/'} onClick={()=>{setOpen(false)}}>
        <span className="px-2 py-1">Pricing</span>
      </Link>
      <Link href={'/'} onClick={()=>{setOpen(false)}}>
        <span className="px-2 py-1">Resources</span>
      </Link> */}

      <a
        href="https://achuth.notion.site/Changelog-4c898f8b4ec140abb1d6a6d2e9108a15"
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl"
      >
        Changelog
      </a>
      <Link
        href={'#feedback'}
        onClick={() => {
          setOpen(false)
        }}
      >
        <span className="px-2 py-1 text-3xl">Feedback</span>
      </Link>
    </nav>
  )
  return (
    <>
      <header className="sticky top-0 z-50 bg-black/10 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-2 py-4 align-middle lg:px-0">
          <Link href="/" className="hidden md:inline">
            <span className=" bg-gradient-to-r from-green-400 to-green-700/40 bg-clip-text text-3xl font-bold text-transparent ">
              Lapse
            </span>
          </Link>
          <span className="md:hidden">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.70667 6.78C5.52 6.14 6 5.5 6.66667 5.5H18C18.5523 5.5 19 5.94772 19 6.5V17.7601C19 18.4376 18.3405 18.919 17.6952 18.7125L8.8175 15.8716C8.50091 15.7703 8.25535 15.5183 8.16227 15.1992L5.70667 6.78Z"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </span>
          <div className="hidden lg:flex">
            <NavMenu />
          </div>
          <div className="flex gap-4">
            <Link href="/download">
              <button className="rounded bg-gradient-to-r from-green-700/40 p-[0.5px]">
                <div className="flex items-center gap-2 rounded  bg-black/20 p-2">
                  <span className="hidden md:inline-block">Download</span>
                  <span className="md:hidden">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.75 11.25V14.25C15.75 14.6478 15.592 15.0294 15.3107 15.3107C15.0294 15.592 14.6478 15.75 14.25 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V11.25"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.25 7.5L9 11.25L12.75 7.5"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 11.25V2.25"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.861 4.55483C13.3623 3.95654 13.71 3.13997 13.71 2.31531C13.71 2.20212 13.7019 2.08893 13.6776 2C12.8772 2.03234 11.907 2.5336 11.3249 3.21273C10.8722 3.73017 10.4517 4.55483 10.4517 5.37948C10.4517 5.50884 10.4679 5.63012 10.4841 5.67054C10.5326 5.67863 10.6134 5.6948 10.6943 5.6948C11.4219 5.6948 12.3274 5.2097 12.861 4.55483ZM13.4351 5.86458C12.2223 5.86458 11.2441 6.6003 10.6134 6.6003C9.9424 6.6003 9.06923 5.91309 8.01819 5.91309C6.02122 5.91309 4 7.56241 4 10.667C4 12.6074 4.74381 14.6529 5.67357 15.9707C6.46589 17.0864 7.16119 18 8.15563 18C9.15008 18 9.58666 17.3451 10.8075 17.3451C12.0606 17.3451 12.3355 17.9838 13.4351 17.9838C14.5184 17.9838 15.238 16.9894 15.9171 16.0111C16.6852 14.8873 17.0005 13.7959 17.0167 13.7393C16.952 13.7231 14.8742 12.8742 14.8742 10.5053C14.8742 8.45174 16.5073 7.53007 16.5963 7.4573C15.5291 5.91309 13.8878 5.86458 13.4351 5.86458Z"
                        fill="currentColor"
                        fill-opacity="0.9"
                      ></path>
                    </svg>
                  </span>
                  <span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0)">
                        <path
                          d="M6.6607 8.98214V14.7946L0.571411 13.9554V8.98214H6.6607ZM6.6607 2.34821V8.23214H0.571411V3.1875L6.6607 2.34821ZM15.4286 8.98214V16L7.33034 14.8839V8.98214H15.4286ZM15.4286 1.14286V8.23214H7.33034V2.25893L15.4286 1.14286Z"
                          fill="currentColor"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect
                            width="16"
                            height="16"
                            fill="currentColor"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </div>
              </button>
            </Link>

            <button
              className="lg:hidden"
              onClick={() => {
                setOpen(true)
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
                  d="M3 8H21"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 15H21"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
      {open && (
        <div className="fixed left-0 top-0 z-50 h-screen w-screen bg-neutral-900/30 p-4 backdrop-blur-md">
          <div className="flex flex-col items-end gap-4 rounded-lg">
            <button
              onClick={() => {
                setOpen(false)
              }}
              className="rounded-full border-2  border-transparent p-2 outline-none focus:border-neutral-50"
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
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <NavMenu />
          </div>
        </div>
      )}
    </>
  )
}
