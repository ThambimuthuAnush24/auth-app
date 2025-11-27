import { Link } from 'react-router-dom'
import { useState, useEffect, useCallback, useMemo } from 'react'

const Dashboard = () => {
  const [stats, setStats] = useState([
    { label: 'Total Users', value: '2,543', change: '+12%', icon: '👥' },
    { label: 'Active Sessions', value: '1,234', change: '+8%', icon: '⚡' },
    { label: 'Success Rate', value: '98.5%', change: '+2.3%', icon: '✓' },
    { label: 'Avg Response', value: '245ms', change: '-15%', icon: '⏱️' }
  ])
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [lastUpdated, setLastUpdated] = useState(new Date())

  useEffect(() => {
    console.log('Dashboard mounted')
    
    // Simulate real-time updates
    const interval = setInterval(() => {
      setStats(prev => prev.map(stat => ({
        ...stat,
        value: stat.label === 'Active Sessions' 
          ? String(Math.floor(Math.random() * 500 + 1000))
          : stat.value
      })))
      setLastUpdated(new Date())
    }, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [])

  const refreshDashboard = useCallback(() => {
    setIsRefreshing(true)
    setTimeout(() => {
      setStats(prev => prev.map(stat => ({
        ...stat,
        value: String(Math.floor(Math.random() * 1000 + 1000))
      })))
      setLastUpdated(new Date())
      setIsRefreshing(false)
    }, 1000)
  }, [])

  const totalMetrics = useMemo(() => {
    return stats.reduce((acc, stat) => {
      const numValue = parseInt(stat.value.replace(/,/g, ''))
      return acc + (isNaN(numValue) ? 0 : numValue)
    }, 0)
  }, [stats])

  const recentActivity = [
    { user: 'John Doe', action: 'Signed up', time: '2 minutes ago', status: 'success' },
    { user: 'Jane Smith', action: 'Updated profile', time: '15 minutes ago', status: 'info' },
    { user: 'Mike Johnson', action: 'Password reset', time: '1 hour ago', status: 'warning' },
    { user: 'Sarah Williams', action: 'Account verified', time: '3 hours ago', status: 'success' }
  ]

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 animate-[fadeInDown_0.6s_ease-out]">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your app.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 animate-[fadeInUp_0.6s_ease-out_${0.1 * (index + 1)}s_both] hover:[transform:translateY(-10px)_scale(1.03)] [perspective:1000px] border border-gray-100`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl">{stat.icon}</div>
                <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                  stat.change.startsWith('+') 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-red-100 text-red-700'
                }`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-6 animate-[fadeInLeft_0.8s_ease-out_0.5s_both] hover:shadow-2xl transition-all duration-500">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-2xl">📊</span>
              Recent Activity
            </h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:[transform:translateX(5px)] border border-gray-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                      {activity.user.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{activity.user}</p>
                      <p className="text-sm text-gray-600">{activity.action}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`inline-block w-2 h-2 rounded-full mb-1 ${
                      activity.status === 'success' ? 'bg-green-500' :
                      activity.status === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                    }`}></span>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl shadow-xl p-6 animate-[fadeInRight_0.8s_ease-out_0.6s_both] hover:shadow-2xl transition-all duration-500">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              Quick Actions
            </h2>
            <div className="space-y-3">
              <Link
                to="/profile"
                className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:[transform:scale(1.05)]"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="font-semibold">View Profile</span>
              </Link>
              <Link
                to="/settings"
                className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:[transform:scale(1.05)]"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-semibold">Settings</span>
              </Link>
              <Link
                to="/contact"
                className="flex items-center gap-3 p-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-xl hover:from-pink-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:[transform:scale(1.05)]"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-semibold">Contact Support</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
