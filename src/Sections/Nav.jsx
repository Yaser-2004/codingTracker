import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="bg-black dark:bg-neutral-900">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="#" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-[#EBEFFF]">
                CODINGSSS
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="#" className="px-3 py-2 text-sm font-medium text-[#EBEFFF]">Home</Link>
            <Link href="#" className="px-3 py-2 text-sm font-medium text-[#EBEFFF]">Product</Link>
            <Link href="#" className="px-3 py-2 text-sm font-medium text-[#EBEFFF]">Services</Link>
            <Link href="#" className="px-3 py-2 text-sm font-medium text-[#EBEFFF]">Contact</Link>
            <button className="ml-4 inline-flex items-center justify-center px-10 py-3 text-sm font-medium rounded-full text-black bg-[#EBEFFF] hover:scale-105 transition-all duration-200">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button type="button" className="mobile-menu-button inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary hover:bg-gray-100 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
