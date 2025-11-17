import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 animate-[fadeIn_0.8s_ease-out] hover:shadow-2xl transition-all duration-500 [perspective:1000px] hover:[transform:rotateX(2deg)_scale(1.01)]">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 animate-[slideInLeft_0.8s_ease-out] hover:[transform:translateX(10px)] transition-transform duration-300">
            About Auth App
          </h1>
          
          <div className="prose prose-lg">
            <p className="text-gray-700 mb-4">
              Auth App is a modern authentication starter built with the latest web technologies.
              This project demonstrates best practices for building secure and user-friendly
              authentication flows.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Technologies Used
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>React 18</strong> - Modern UI library with hooks</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Vite</strong> - Lightning-fast build tool and dev server</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Tailwind CSS</strong> - Utility-first CSS framework</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>React Router</strong> - Client-side routing</span>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
              Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-blue-50 rounded-lg animate-[fadeInUp_0.6s_ease-out_0.5s_both] hover:[transform:translateY(-8px)_rotateZ(-2deg)_scale(1.05)] transition-all duration-500 shadow hover:shadow-xl [perspective:1000px] [transform-style:preserve-3d]">
                <h3 className="font-semibold text-gray-900 mb-2 [transform:translateZ(15px)]">Responsive Design</h3>
                <p className="text-sm text-gray-600 [transform:translateZ(8px)]">
                  Works seamlessly on desktop, tablet, and mobile devices.
                </p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg animate-[fadeInUp_0.6s_ease-out_0.6s_both] hover:[transform:translateY(-8px)_rotateZ(2deg)_scale(1.05)] transition-all duration-500 shadow hover:shadow-xl [perspective:1000px] [transform-style:preserve-3d]">
                <h3 className="font-semibold text-gray-900 mb-2 [transform:translateZ(15px)]">Clean UI</h3>
                <p className="text-sm text-gray-600 [transform:translateZ(8px)]">
                  Modern, accessible interface with smooth transitions.
                </p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg animate-[fadeInUp_0.6s_ease-out_0.7s_both] hover:[transform:translateY(-8px)_rotateZ(-2deg)_scale(1.05)] transition-all duration-500 shadow hover:shadow-xl [perspective:1000px] [transform-style:preserve-3d]">
                <h3 className="font-semibold text-gray-900 mb-2 [transform:translateZ(15px)]">Fast Development</h3>
                <p className="text-sm text-gray-600 [transform:translateZ(8px)]">
                  Hot module replacement for instant feedback.
                </p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg animate-[fadeInUp_0.6s_ease-out_0.8s_both] hover:[transform:translateY(-8px)_rotateZ(2deg)_scale(1.05)] transition-all duration-500 shadow hover:shadow-xl [perspective:1000px] [transform-style:preserve-3d]">
                <h3 className="font-semibold text-gray-900 mb-2 [transform:translateZ(15px)]">Extensible</h3>
                <p className="text-sm text-gray-600 [transform:translateZ(8px)]">
                  Easy to customize and add new features.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 animate-[fadeInUp_0.8s_ease-out_0.9s_both]">
              <p className="text-gray-700 mb-4">
                Ready to get started? Create your account today!
              </p>
              <Link
                to="/signup"
                className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:[transform:translateY(-5px)_rotateX(10deg)] [perspective:1000px]"
              >
                Sign Up Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
