import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-[pulse_4s_ease-in-out_infinite]"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-[pulse_6s_ease-in-out_infinite]"></div>
      </div>

      <div className="max-w-3xl w-full mx-auto px-6 py-12 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6 animate-[fadeInDown_0.6s_ease-out] shadow-sm hover:shadow-md transition-shadow">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>Your trusted authentication solution</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-6 animate-[fadeInDown_0.8s_ease-out] [perspective:1000px] hover:[transform:rotateX(5deg)] transition-transform duration-300">
            Welcome to Auth App
          </h1>
          <p className="text-xl text-gray-700 mb-4 animate-[fadeInUp_0.8s_ease-out_0.2s_both] [perspective:1000px] max-w-2xl mx-auto">
            A minimal starter for authentication flows using React, Vite and Tailwind.
          </p>
          <p className="text-sm text-gray-500 mb-8 animate-[fadeInUp_0.8s_ease-out_0.3s_both]">
            Fast • Secure • Beautiful
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
            <Link
              to="/signup"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:[transform:translateY(-5px)_rotateX(10deg)] [perspective:1000px]"
            >
              <span>Get started — Sign up</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            <a
              href="#features"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-300 rounded-xl text-gray-700 bg-white hover:bg-gray-50 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:[transform:translateY(-3px)] [perspective:1000px] font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Learn more</span>
            </a>
          </div>
        </div>

        <section id="features" className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-[fadeInUp_0.8s_ease-out_0.6s_both] hover:[transform:translateY(-10px)_rotateY(5deg)_scale(1.05)] [perspective:1000px] [transform-style:preserve-3d] border border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-900 [transform:translateZ(20px)]">Simple</h3>
            <p className="text-sm text-gray-600 [transform:translateZ(10px)]">Focused sign up and authentication UI with intuitive design.</p>
          </div>
          <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-[fadeInUp_0.8s_ease-out_0.8s_both] hover:[transform:translateY(-10px)_rotateY(5deg)_scale(1.05)] [perspective:1000px] [transform-style:preserve-3d] border border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-900 [transform:translateZ(20px)]">Tailwind</h3>
            <p className="text-sm text-gray-600 [transform:translateZ(10px)]">Built with Tailwind CSS for rapid and beautiful styling.</p>
          </div>
          <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-[fadeInUp_0.8s_ease-out_1s_both] hover:[transform:translateY(-10px)_rotateY(5deg)_scale(1.05)] [perspective:1000px] [transform-style:preserve-3d] border border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-900 [transform:translateZ(20px)]">Vite</h3>
            <p className="text-sm text-gray-600 [transform:translateZ(10px)]">Lightning-fast development with Vite's instant HMR.</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
