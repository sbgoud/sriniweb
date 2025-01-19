import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white shadow-xl">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="SRINI Logo"
            width={40}
            height={40}
            className="rounded-md hover:scale-105 transition-transform duration-300"
            priority
          />
          <Link
            href="/"
            className="text-2xl font-bold hover:text-gray-200 tracking-wide transition-colors"
          >
            SRINI Foundation
          </Link>
        </div>

        {/* Hamburger Icon (visible on mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center p-2 rounded hover:bg-white/10 transition-colors"
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            // X icon when menu is open
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 6L18 18M6 18L18 6" />
            </svg>
          ) : (
            // Hamburger icon when menu is closed
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Nav Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:block absolute md:static top-16 left-0 w-full md:w-auto 
            bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 
            md:bg-transparent md:top-auto md:left-auto`}
        >
          <div className="flex flex-col md:flex-row md:space-x-6">
            <Link
              href="/about"
              className="px-4 py-2 hover:bg-white/10 transition-colors text-lg"
            >
              About
            </Link>
            <Link
              href="/founders"
              className="px-4 py-2 hover:bg-white/10 transition-colors text-lg"
            >
              Founders
            </Link>
            <Link
              href="/gadkol"
              className="px-4 py-2 hover:bg-white/10 transition-colors text-lg"
            >
              Gadkol
            </Link>
            <Link
              href="/achievements"
              className="px-4 py-2 hover:bg-white/10 transition-colors text-lg"
            >
              Achievements
            </Link>
            <Link
              href="/board"
              className="px-4 py-2 hover:bg-white/10 transition-colors text-lg"
            >
              Board
            </Link>
            <Link
              href="/gallery"
              className="px-4 py-2 hover:bg-white/10 transition-colors text-lg"
            >
              Gallery
            </Link>
            <Link
              href="/news"
              className="px-4 py-2 hover:bg-white/10 transition-colors text-lg"
            >
              News
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 hover:bg-white/10 transition-colors text-lg"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
