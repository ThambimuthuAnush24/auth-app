import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

const Navigation = () => {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isActive = (path) => {
    return location.pathname === path
  }

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/contact', label: 'Contact' }
  ]

  const userLinks = [
    { path: '/profile', label: 'Profile', icon: '👤' },
    { path: '/settings', label: 'Settings', icon: '⚙️' }
  ]

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 shadow-lg backdrop-blur-sm bg-opacity-95 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center group">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">Auth App</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'bg-white text-blue-700 shadow-lg scale-105'
                    : 'text-white hover:bg-white hover:bg-opacity-20 hover:scale-105'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="h-6 w-px bg-white bg-opacity-30 mx-2"></div>
            
            {userLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1 ${
                  isActive(link.path)
                    ? 'bg-white text-blue-700 shadow-lg scale-105'
                    : 'text-white hover:bg-white hover:bg-opacity-20 hover:scale-105'
                }`}
              >
                <span>{link.icon}</span>
                {link.label}
              </Link>
            ))}
            
            <div className="h-6 w-px bg-white bg-opacity-30 mx-2"></div>
            
            <Link
              to="/login"
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-xl border-2 ${
                isActive('/login')
                  ? 'bg-white text-blue-600 border-white scale-105'
                  : 'bg-transparent text-white border-white hover:bg-white hover:text-blue-600 hover:scale-105'
              }`}
            >
              Login
            </Link>
            
            <Link
              to="/signup"
              className={`ml-2 px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-xl ${
                isActive('/signup')
                  ? 'bg-yellow-400 text-gray-900 scale-105'
                  : 'bg-white text-blue-600 hover:bg-yellow-400 hover:text-gray-900 hover:scale-110'
              }`}
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 rounded-lg p-2 transition-all duration-300 hover:scale-110"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 animate-[fadeInDown_0.3s_ease-out]">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive(link.path)
                      ? 'bg-white text-blue-700 shadow-lg'
                      : 'text-white bg-white bg-opacity-10 hover:bg-opacity-20'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="h-px bg-white bg-opacity-30 my-2"></div>
              
              {userLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    isActive(link.path)
                      ? 'bg-white text-blue-700 shadow-lg'
                      : 'text-white bg-white bg-opacity-10 hover:bg-opacity-20'
                  }`}
                >
                  <span>{link.icon}</span>
                  {link.label}
                </Link>
              ))}
              
              <div className="h-px bg-white bg-opacity-30 my-2"></div>
              
              <Link
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md border-2 ${
                  isActive('/login')
                    ? 'bg-white text-blue-600 border-white'
                    : 'bg-transparent text-white border-white hover:bg-white hover:text-blue-600'
                }`}
              >
                Login
              </Link>
              
              <Link
                to="/signup"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md ${
                  isActive('/signup')
                    ? 'bg-yellow-400 text-gray-900'
                    : 'bg-white text-blue-600 hover:bg-yellow-400 hover:text-gray-900'
                }`}
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
