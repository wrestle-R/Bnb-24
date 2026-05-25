import { useTheme } from '../../hooks/useTheme'
import './ThemeToggle.css'

function ThemeToggle({ className = '' }) {
  const { isLight, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`theme-toggle ${className}`.trim()}
      aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
      aria-pressed={isLight}
      title={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
    >
      <span className="theme-toggle-dot" aria-hidden="true" />
      <span className="theme-toggle-label">{isLight ? 'Light' : 'Dark'}</span>
    </button>
  )
}

export default ThemeToggle
