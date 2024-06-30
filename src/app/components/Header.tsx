'use client'
import { Menu } from 'antd'
import clsx from 'clsx'
import { caveat } from '../fonts'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="h-20  w-screen z-50 bg-white relative">
      <div className="max-w-screen-xl px-3 mx-auto flex items-center justify-between h-full">
        <div className="h-full">
          <Link href="/">
            <div
              className={clsx(
                'w-fit flex h-full items-center text-4xl translate-x-1/2',
                caveat.className
              )}
            >
              <span className="text-amber-500 font-normal">art</span>
              <span className="text-gray-700">nao</span>
            </div>
          </Link>
          <div className="h-1 bg-amber-500 w-32 mt-auto rounded-full" />
        </div>
        <div className="flex items-center h-full gap-6 text-base font-semibold text-gray-700 tracking-wider relative px-4">
          <Link className="cursor-pointer" href="/artists">
            Artists
          </Link>
          <Link className="cursor-pointer" href="/arts">
            Arts
          </Link>
          <Link className="cursor-pointer" href="/about">
            About us
          </Link>
          <Link className="cursor-pointer" href="/contact">
            Contact
          </Link>
          <div className="h-1 bg-gray-100 w-full mt-auto rounded-full absolute bottom-0 left-0 right-0" />
        </div>
        <div className="w-fit bg-amber-300 text-gray-900 font-semibold px-6 py-2 rounded-sm">
          Login
        </div>
      </div>
    </header>
  )
}

export { Header }
