import { useState, useEffect } from 'react'

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you would send this data to your backend
    console.log('Sign up data:', formData)
    alert('Sign up functionality would be implemented here!')
  }

  useEffect(() => {
    console.log('SignUp component rendered')
  }, [])

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-white overflow-hidden">
      <div className="max-w-md w-full mx-auto">
        <div className="text-center mb-8 animate-[fadeInDown_0.8s_ease-out]">
          <h2 className="text-3xl font-bold text-gray-900 hover:[transform:scale(1.05)_rotateX(5deg)] transition-transform duration-300 [perspective:1000px]">
            Create your account
          </h2>
          <p className="mt-2 text-gray-600">Join us today and get started</p>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl animate-[fadeInUp_0.8s_ease-out_0.2s_both] transition-all duration-500 hover:[transform:translateY(-5px)_rotateX(2deg)_scale(1.01)] [perspective:1000px] [transform-style:preserve-3d]">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:scale-105 hover:[transform:translateY(-3px)_rotateX(5deg)] [perspective:1000px]"
              >
                Sign up
              </button>
            </div>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500 cursor-pointer hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp