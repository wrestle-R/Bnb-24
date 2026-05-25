import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/Button/Button'
import { useAuth } from '../hooks/useAuth'
import loginBgImg from '../assets/images/loginbg.jpg'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import ThemeToggle from '../components/ThemeToggle/ThemeToggle'

function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const email = String(formData.get('email') || '').trim()
    const password = String(formData.get('password') || '').trim()

    if (!email || !password) {
      setError('Email and password are required.')
      return
    }

    await login({ email, password })
    navigate('/')
  }

  return (
    <section className="auth-shell page-pad">
      <Card className="auth-card p-0">
        <img src={loginBgImg} alt="Login" className="auth-image" />
        <CardContent className="auth-form">
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="auth-theme-row">
              <ThemeToggle />
            </div>
            <h1>Sign In</h1>
            <p>Access your Ettarra account.</p>
            <Input name="email" type="email" placeholder="Email" required />
            <Input name="password" type="password" placeholder="Password" required />
            <Button type="submit">Login</Button>
            {error && <p className="chat-error">{error}</p>}
            <p>
              Don&apos;t have an account? <Link to="/signup">Register here</Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}

export default Login
