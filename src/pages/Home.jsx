import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="max-w-3xl w-full mx-auto px-6 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 animate-[fadeInDown_0.8s_ease-out] [perspective:1000px] hover:[transform:rotateX(5deg)] transition-transform duration-300">
            Welcome to Auth App
          </h1>
          <p className="text-lg text-gray-600 mb-8 animate-[fadeInUp_0.8s_ease-out_0.2s_both] [perspective:1000px]">
            A minimal starter for authentication flows using React, Vite and Tailwind.
          </p>

          <div className="flex items-center justify-center gap-4 animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
            <Link
              to="/signup"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:[transform:translateY(-5px)_rotateX(10deg)] [perspective:1000px]"
            >
              Get started — Sign up
            </Link>

            <a
              href="#features"
              className="inline-block px-6 py-3 border border-gray-200 rounded-lg text-gray-700 bg-white hover:bg-gray-50 shadow hover:shadow-lg transition-all duration-300 hover:scale-105 hover:[transform:translateY(-3px)] [perspective:1000px]"
            >
              Learn more
            </a>
          </div>
        </div>

        <section id="features" className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 animate-[fadeInUp_0.8s_ease-out_0.6s_both] hover:[transform:translateY(-10px)_rotateY(5deg)_scale(1.05)] [perspective:1000px] [transform-style:preserve-3d]">
            <h3 className="font-semibold mb-2 [transform:translateZ(20px)]">Simple</h3>
            <p className="text-sm text-gray-600 [transform:translateZ(10px)]">Focused sign up and authentication UI.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 animate-[fadeInUp_0.8s_ease-out_0.8s_both] hover:[transform:translateY(-10px)_rotateY(5deg)_scale(1.05)] [perspective:1000px] [transform-style:preserve-3d]">
            <h3 className="font-semibold mb-2 [transform:translateZ(20px)]">Tailwind</h3>
            <p className="text-sm text-gray-600 [transform:translateZ(10px)]">Built with Tailwind for quick styling.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 animate-[fadeInUp_0.8s_ease-out_1s_both] hover:[transform:translateY(-10px)_rotateY(5deg)_scale(1.05)] [perspective:1000px] [transform-style:preserve-3d]">
            <h3 className="font-semibold mb-2 [transform:translateZ(20px)]">Vite</h3>
            <p className="text-sm text-gray-600 [transform:translateZ(10px)]">Fast development with Vite HMR.</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
