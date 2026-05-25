import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/Button/Button'
import { useAuth } from '../hooks/useAuth'
import loginBgImg from '../assets/images/loginbg.jpg'

function Signup() {
  const { signup } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const fullName = String(formData.get('fullName') || '').trim()
    const email = String(formData.get('email') || '').trim()
    const password = String(formData.get('password') || '').trim()

    if (!fullName || !email || !password) {
      setError('Name, email, and password are required.')
      return
    }

    await signup({ fullName, email, password })
    navigate('/')
  }

  return (
    <section className="auth-shell page-pad">
      <div className="auth-card">
        <img src={loginBgImg} alt="Sign up" className="auth-image" />
        <form className="auth-form" onSubmit={handleSubmit}>
          <h1>Create Account</h1>
          <p>Join Ettarra Coffee House.</p>
          <input name="fullName" type="text" placeholder="Full name" required />
          <input name="email" type="email" placeholder="Email" required />
          <input name="phoneNumber" type="tel" placeholder="Phone number" required />
          <input name="password" type="password" placeholder="Password" required />
          <Button type="submit">Sign up</Button>
          {error && <p className="chat-error">{error}</p>}
          <p>
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </form>
      </div>
    </section>
  )
}

export default Signup
