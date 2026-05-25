/* global test, expect */
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AuthProvider } from '../context/AuthContext'
import AppRoutes from './AppRoutes'

test('renders home route', () => {
  render(
    <AuthProvider>
      <MemoryRouter initialEntries={['/']}>
        <AppRoutes />
      </MemoryRouter>
    </AuthProvider>,
  )

  expect(screen.getByText(/serving only the best since 2013/i)).toBeInTheDocument()
})
