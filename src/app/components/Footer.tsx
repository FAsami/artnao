import clsx from 'clsx'
import Link from 'next/link'
import { caveat } from '../fonts'
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMoneyCheckAlt,
  FaMapMarkedAlt,
  FaRss,
  FaSitemap
} from 'react-icons/fa'
import { MdOutlineGavel, MdPrivacyTip } from 'react-icons/md'

const Footer = () => {
  return (
    <footer className="bg-amber-400 pt-10 border-t-4 border-t-slate-300">
      <div className="max-w-screen-xl mx-auto px-3 py-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <Link href="/">
              <div
                className={clsx(
                  'w-fit flex h-full items-center text-4xl mb-4',
                  caveat.className
                )}
              >
                <span className="text-white font-normal">art</span>
                <span className="text-gray-700">nao</span>
              </div>
            </Link>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com" aria-label="Facebook">
                <FaFacebook
                  className="text-gray-700 hover:text-white"
                  size={24}
                />
              </Link>
              <Link href="https://www.twitter.com" aria-label="Twitter">
                <FaTwitter
                  className="text-gray-700 hover:text-white"
                  size={24}
                />
              </Link>
              <Link href="https://www.instagram.com" aria-label="Instagram">
                <FaInstagram
                  className="text-gray-700 hover:text-white"
                  size={24}
                />
              </Link>
              <Link href="https://www.linkedin.com" aria-label="LinkedIn">
                <FaLinkedin
                  className="text-gray-700 hover:text-white"
                  size={24}
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-gray-700 text-lg font-semibold mb-2">
              Contact Us
            </h2>
            <div className="flex items-center text-gray-700 hover:text-white mt-2">
              <FaMapMarkedAlt size={20} />
              <span className="ml-1">221B Baker Street, London.</span>
            </div>
            <div className="flex items-center text-gray-700 hover:text-white mt-2">
              <FaPhone size={20} />
              <span className="ml-1">+88 01291222</span>
            </div>
            <div className="flex items-center text-gray-700 hover:text-white mt-2">
              <FaEnvelope size={20} />
              <span className="ml-1">info@foysal.dev</span>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <h2 className="text-gray-700 text-lg font-semibold mb-2">
              Important links
            </h2>
            <Link
              href="/artists"
              className="text-gray-700 hover:text-white mt-2"
            >
              Artists
            </Link>
            <Link href="/arts" className="text-gray-700 hover:text-white mt-2">
              Arts
            </Link>
            <Link
              href="/about-us"
              className="text-gray-700 hover:text-white mt-2"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-white mt-2"
            >
              Contact
            </Link>
          </div>
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <h2 className="text-gray-700 text-lg font-semibold mb-2">Policy</h2>
            <Link
              href="/terms"
              className="flex items-center text-gray-700 hover:text-white mt-2"
            >
              <MdOutlineGavel size={20} />
              <span className="ml-1">Terms and Conditions</span>
            </Link>
            <Link
              href="/privacy-policy"
              className="flex items-center text-gray-700 hover:text-white mt-2"
            >
              <MdPrivacyTip size={20} />
              <span className="ml-1">Privacy Policy</span>
            </Link>
            <Link
              href="/privacy-policy"
              className="flex items-center text-gray-700 hover:text-white mt-2"
            >
              <FaMoneyCheckAlt size={20} />
              <span className="ml-1">Refund Policy</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-gray-700 border-t border-t-amber-300 py-4">
        copyright &copy;2024{' '}
        <Link href="https://www.foysal.dev/">foysal.dev</Link>
      </div>
    </footer>
  )
}

export { Footer }
