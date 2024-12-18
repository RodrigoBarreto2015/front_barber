import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean
  variant?: 'primary' | 'secondary'
}

export function Button({ 
  children, 
  fullWidth = false, 
  variant = 'primary', 
  className = '', 
  ...props 
}: ButtonProps) {
  const baseStyles = "group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
  const variantStyles = {
    primary: "text-white bg-red-600 hover:bg-red-700 focus:ring-red-500",
    secondary: "text-red-600 bg-white hover:bg-gray-50 focus:ring-red-500"
  }
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${
        fullWidth ? 'w-full' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}