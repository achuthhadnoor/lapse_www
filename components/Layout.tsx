import Link from "next/link";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="px-4 md:px-2 my-10">
      <header className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4">
        <span className="flex gap-1 items-center">
          <svg
            width="35"
            height="22"
            viewBox="0 0 35 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.0536 4.604L24.4376 17.3934H9.66965L17.0536 4.604Z"
              fill="currentColor"
            />
            <path
              d="M25.7491 17.0527L18.3652 4.26334L33.1331 4.26334L25.7491 17.0527Z"
              fill="currentColor"
            />
            <path
              d="M8.52647 17.0527L1.1425 4.26334L15.9104 4.26334L8.52647 17.0527Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <nav className="md:flex gap-4 font-light flex-wrap">
          {/* <nav className="flex flex-col relative top-10 left-10 bg-neutral-200 max-w-2xl w-full"> */}
          <Link
            href="/"
            className="text-md hover:bg-neutral-700 px-4 py-1 rounded"
          >
            Home
          </Link>
          <Link
            href="#download"
            className="text-md hover:bg-neutral-700 px-4 py-1 rounded"
          >
            Download
          </Link>
          {/* <Link
            href="/pricing"
            className="text-md hover:bg-neutral-700 px-4 py-1 rounded"
          >
            Pricing
          </Link> */}
          <Link
            href="/blog"
            className="text-md hover:bg-neutral-700 px-4 py-1 rounded"
          >
            Blog
          </Link>
          <Link
            href="/affiliate"
            className="text-md hover:bg-neutral-700 px-4 py-1 rounded"
          >
            Affiliate
          </Link>
          <Link
            href="/feedback"
            className="text-md hover:bg-neutral-700 px-4 py-1 rounded"
          >
            Feedback
          </Link>
        </nav>
        <span className="hidden md:inline-block text-blue-500">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23 2.9998C22.0424 3.67528 20.9821 4.19191 19.86 4.5298C19.2577 3.83731 18.4573 3.34649 17.567 3.12373C16.6767 2.90096 15.7395 2.957 14.8821 3.28426C14.0247 3.61151 13.2884 4.1942 12.773 4.95352C12.2575 5.71283 11.9877 6.61214 12 7.5298V8.5298C10.2426 8.57537 8.50127 8.18561 6.93101 7.39525C5.36074 6.60488 4.01032 5.43844 3 3.9998C3 3.9998 -1 12.9998 8 16.9998C5.94053 18.3978 3.48716 19.0987 1 18.9998C10 23.9998 21 18.9998 21 7.4998C20.9991 7.22126 20.9723 6.9434 20.92 6.6698C21.9406 5.6633 22.6608 4.39251 23 2.9998Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </header>
      {children}
      <footer className="flex justify-between">
        <span className="p-4">
          © {new Date().getFullYear()} Achuth Hadnoor. All rights reserved
        </span>
      </footer>
    </div>
  );
}
