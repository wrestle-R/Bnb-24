import { Button as ShadcnButton } from '@/components/ui/button'
import './Button.css'

function Button({ children, className = '', ...props }) {
  return (
    <ShadcnButton className={`btn-primary ${className}`.trim()} {...props}>
      {children}
    </ShadcnButton>
  )
}

export default Button
