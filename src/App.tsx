import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/Landing'
import LoginPage from './pages/Login'
import SignupPage from './pages/Signup'
import DashboardPage from './pages/Dashboard'
import ChatPage from './pages/Chat'
import GoalsPage from './pages/Goals'
import CirclesPage from './pages/Circles'
import InvestmentsPage from './pages/Investments'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/goals" element={<GoalsPage />} />
        <Route path="/circles" element={<CirclesPage />} />
        <Route path="/investments" element={<InvestmentsPage />} />
      </Routes>
    </Router>
  )
}
