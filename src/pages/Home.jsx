import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-3xl w-full mx-auto px-6 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Welcome to Auth App
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            A minimal starter for authentication flows using React, Vite and Tailwind.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Link
              to="/signup"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow"
            >
              Get started — Sign up
            </Link>

            <a
              href="#features"
              className="inline-block px-6 py-3 border border-gray-200 rounded-lg text-gray-700 bg-white hover:bg-gray-50"
            >
              Learn more
            </a>
          </div>
        </div>

        <section id="features" className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold mb-2">Simple</h3>
            <p className="text-sm text-gray-600">Focused sign up and authentication UI.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold mb-2">Tailwind</h3>
            <p className="text-sm text-gray-600">Built with Tailwind for quick styling.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold mb-2">Vite</h3>
            <p className="text-sm text-gray-600">Fast development with Vite HMR.</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
