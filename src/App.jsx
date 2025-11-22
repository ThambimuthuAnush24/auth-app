import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import Navigation from './components/Navigation'


function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Fallback: redirect unknown routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App