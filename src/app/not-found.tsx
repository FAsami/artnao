import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6'

const NotFound = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col">
      <Image src="/gif/error-404.gif" alt="Login" width={300} height={300} />
      <div className="flex flex-col items-center justify-center">
        <div className="text-5xl text-center mb-2 text-gray-800 font-extrabold">
          404
        </div>
        <div className="text-center text-lg text-neutral-500">
          Opps page not found !
        </div>
        <Link
          href="/"
          className="text-neutral-600 px-6 py-2 mt-8 text-base rounded flex items-center gap-2"
        >
          Let me take you to home <FaArrowRight className="text-neutral-600" />
        </Link>
      </div>
    </div>
  )
}

export default NotFound
