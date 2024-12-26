import { ComponentProps } from 'react'
import { cn } from '../../../app/utils/cn'

interface ButtonProps extends ComponentProps<'button'> {}

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        'bg-rickBlueLight shadow-none hover:scale-105 hover:shadow-portalGlow disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed px-6 h-8 sm:h-12 rounded-[44px] font-getSchwifty text-1xl sm:text-2xl text-black transition-all duration-150 ease-in-out',
        className
      )}
    />
  )
}
