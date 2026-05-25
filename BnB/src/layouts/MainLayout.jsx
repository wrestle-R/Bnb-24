import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Chatbot from '../components/Chatbot/Chatbot'

function MainLayout() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Chatbot />
    </div>
  )
}

export default MainLayout
