import { ComponentProps, forwardRef } from 'react'
import { cn } from '../../../app/utils/cn'

interface InputProps extends ComponentProps<'input'> {
  name: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, name, id, className, ...props }, ref) => {
    const inputId = id ?? name

    return (
      <div className="relative flex item-center flex-col">
        <input
          ref={ref}
          id={inputId}
          name={name}
          placeholder={placeholder}
          {...props}
          className={cn(
            'bg-transparent font-getSchwifty tracking-[2px] rounded-lg border border-gray-500 px-3 h-[52px] text-portalGreenLight  focus:border-portalGreenLight transition-all outline-none',
            className
          )}
        />
      </div>
    )
  }
)
