import { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Full-stack developer passionate about building amazing web applications.',
    location: 'San Francisco, CA',
    website: 'https://johndoe.com',
    joined: 'January 2024'
  })
  const [avatarUrl, setAvatarUrl] = useState('')
  const [uploadProgress, setUploadProgress] = useState(0)
  
  const fileInputRef = useRef(null)

  useEffect(() => {
    // Load profile from localStorage
    const savedProfile = localStorage.getItem('userProfile')
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile))
    }
    console.log('Profile loaded')
  }, [])

  useEffect(() => {
    // Save profile to localStorage
    localStorage.setItem('userProfile', JSON.stringify(profile))
  }, [profile])

  const handleAvatarUpload = useCallback((e) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadstart = () => setUploadProgress(0)
      reader.onprogress = (e) => {
        if (e.lengthComputable) {
          setUploadProgress((e.loaded / e.total) * 100)
        }
      }
      reader.onload = () => {
        setAvatarUrl(reader.result)
        setUploadProgress(100)
      }
      reader.readAsDataURL(file)
    }
  }, [])

  const handleProfileUpdate = useCallback((field, value) => {
    setProfile(prev => ({ ...prev, [field]: value }))
  }, [])

  const engagementScore = useMemo(() => {
    const completeness = Object.values(profile).filter(v => v).length / Object.keys(profile).length
    return Math.round(completeness * 100)
  }, [profile])

  const achievements = [
    { title: 'Early Adopter', icon: '🌟', description: 'Joined in the first month' },
    { title: 'Profile Master', icon: '✨', description: 'Completed profile 100%' },
    { title: 'Active User', icon: '🔥', description: '30 day streak' },
    { title: 'Community Helper', icon: '💪', description: 'Helped 10+ users' }
  ]

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8 animate-[fadeIn_0.8s_ease-out] hover:shadow-3xl transition-all duration-500">
          {/* Cover Image */}
          <div className="h-48 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative">
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
          </div>

          {/* Profile Info */}
          <div className="relative px-8 pb-8">
            <div className="flex flex-col md:flex-row items-start md:items-end gap-6 -mt-16">
              {/* Avatar */}
              <div className="relative group">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-2xl ring-4 ring-white group-hover:scale-110 transition-transform duration-300">
                  {profile.name.split(' ').map(n => n[0]).join('')}
                </div>
                <button className="absolute bottom-2 right-2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">{profile.name}</h1>
                    <p className="text-gray-600">{profile.email}</p>
                    <p className="text-sm text-gray-500 mt-1">Member since {profile.joined}</p>
                  </div>
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    {isEditing ? 'Save Profile' : 'Edit Profile'}
                  </button>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
              <h3 className="font-semibold text-gray-900 mb-2">About</h3>
              <p className="text-gray-700">{profile.bio}</p>
              <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {profile.location}
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  {profile.website}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8 animate-[fadeInUp_0.8s_ease-out_0.3s_both]">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-2xl">🏆</span>
            Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl border-2 border-yellow-200 hover:border-yellow-400 transition-all duration-300 hover:[transform:translateY(-5px)_scale(1.05)] shadow-lg hover:shadow-xl text-center"
              >
                <div className="text-4xl mb-2">{achievement.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{achievement.title}</h3>
                <p className="text-xs text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-[fadeInUp_0.8s_ease-out_0.5s_both]">
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-all duration-300 hover:[transform:translateY(-5px)]">
            <div className="text-4xl mb-2">📝</div>
            <div className="text-3xl font-bold text-blue-600">47</div>
            <div className="text-gray-600">Posts Created</div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-all duration-300 hover:[transform:translateY(-5px)]">
            <div className="text-4xl mb-2">👥</div>
            <div className="text-3xl font-bold text-purple-600">1,234</div>
            <div className="text-gray-600">Followers</div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-all duration-300 hover:[transform:translateY(-5px)]">
            <div className="text-4xl mb-2">⭐</div>
            <div className="text-3xl font-bold text-pink-600">892</div>
            <div className="text-gray-600">Total Likes</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
