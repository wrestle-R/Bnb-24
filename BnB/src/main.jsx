import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/variables.css'
import './styles/global.css'
import App from './App'
import { applyTheme, getPreferredTheme } from './hooks/useTheme'

applyTheme(getPreferredTheme())

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
