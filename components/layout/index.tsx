import Link from 'next/link'
import type { ReactNode } from 'react'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col mx-auto h-screen">
      <nav className="relative z-20 border-b border-gray-200 py-5 shadow-[0_0_15px_0_rgb(0,0,0,0.1)]">
        <div className="flex items-center px-14 mx-auto max-w-7xl lg:px-6">
          <div className="flex flex-row items-center">
            <Link className="no-underline transition-colors" href="/">
              <span>
                <svg height={26} viewBox="0 0 75 65" fill="#000">
                  <title>Vercel Logo</title>
                  <path d="M37.59.25l36.95 64H.64l36.95-64z" />
                </svg>
              </span>
            </Link>
            <ul className="flex content-center items-center">
              <li className="ml-2 text-gray-200">
                <svg
                  viewBox="0 0 24 24"
                  width={32}
                  height={32}
                  stroke="currentColor"
                  strokeWidth={1}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  shapeRendering="geometricPrecision"
                >
                  <path d="M16.88 3.549L7.12 20.451" />
                </svg>
              </li>
              <li className="font-medium" style={{ letterSpacing: '.01px' }}>
                <a
                  className="no-underline transition-colors"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/chhpt/nextjs-starter"
                >
                  Next.js Starter
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden flex-1 justify-end md:flex">
            <nav className="inline-flex flex-row items-center">
              <span className="flex items-center ml-2 h-full cursor-not-allowed">
                <a
                  data-variant="ghost"
                  className="relative inline-flex h-10 cursor-pointer select-none items-center justify-center whitespace-nowrap rounded-md px-3.5 align-middle text-[15px] font-medium leading-10 no-underline outline-0 transition-colors duration-200 ease-in hover:bg-[rgba(0,68,255,0.06)]"
                  href="https://github.com/vercel/examples/tree/main"
                  target="_blank"
                  rel="noreferrer"
                >
                  More Examples →
                </a>
              </span>
              <span className="flex items-center ml-2 h-full cursor-not-allowed">
                <a
                  data-variant="primary"
                  className="cursor-pointer relative inline-flex h-10 select-none items-center justify-center whitespace-nowrap rounded-md border border-solid px-3.5 align-middle text-[15px] font-medium leading-10 no-underline shadow-[0_5px_10px_rgb(0,68,255,0.12)] outline-0 transition-colors duration-200 ease-in"
                  href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fchhpt%2Fnextjs-starter&project-name=nextjs-starter&repository-name=nextjs-starter"
                  target="_blank"
                  rel="noreferrer"
                >
                  Clone &amp; Deploy
                </a>
              </span>
            </nav>
          </div>
        </div>
      </nav>
      {children}
    </div>
  )
}
