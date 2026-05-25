/* global test, expect */
import { act, renderHook } from '@testing-library/react'
import { AuthProvider } from './AuthContext'
import { useAuth } from '../hooks/useAuth'

test('login sets authenticated user', async () => {
  const wrapper = ({ children }) => <AuthProvider>{children}</AuthProvider>
  const { result } = renderHook(() => useAuth(), { wrapper })

  await act(async () => {
    await result.current.login({ email: 'demo@bnb.com', password: '123456' })
  })

  expect(result.current.isAuthenticated).toBe(true)
})
