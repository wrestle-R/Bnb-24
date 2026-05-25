import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/Button/Button'
import { useAuth } from '../hooks/useAuth'
import loginBgImg from '../assets/images/loginbg.jpg'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import ThemeToggle from '../components/ThemeToggle/ThemeToggle'

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
      <Card className="auth-card p-0">
        <img src={loginBgImg} alt="Sign up" className="auth-image" />
        <CardContent className="auth-form">
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="auth-theme-row">
              <ThemeToggle />
            </div>
            <h1>Create Account</h1>
            <p>Join Ettarra Coffee House.</p>
            <Input name="fullName" type="text" placeholder="Full name" required />
            <Input name="email" type="email" placeholder="Email" required />
            <Input name="phoneNumber" type="tel" placeholder="Phone number" required />
            <Input name="password" type="password" placeholder="Password" required />
            <Button type="submit">Sign up</Button>
            {error && <p className="chat-error">{error}</p>}
            <p>
              Already have an account? <Link to="/login">Login here</Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}

export default Signup
