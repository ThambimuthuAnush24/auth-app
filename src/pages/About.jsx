import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
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

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Responsive Design</h3>
                <p className="text-sm text-gray-600">
                  Works seamlessly on desktop, tablet, and mobile devices.
                </p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Clean UI</h3>
                <p className="text-sm text-gray-600">
                  Modern, accessible interface with smooth transitions.
                </p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Fast Development</h3>
                <p className="text-sm text-gray-600">
                  Hot module replacement for instant feedback.
                </p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Extensible</h3>
                <p className="text-sm text-gray-600">
                  Easy to customize and add new features.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-700 mb-4">
                Ready to get started? Create your account today!
              </p>
              <Link
                to="/signup"
                className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow transition-colors"
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
