import './Button.css'

function Button({ children, className = '', ...props }) {
  return (
    <button className={`btn-primary ${className}`.trim()} {...props}>
      {children}
    </button>
  )
}

export default Button
