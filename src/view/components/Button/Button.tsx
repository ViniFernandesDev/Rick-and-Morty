import { ComponentProps } from 'react'
import { cn } from '../../../app/utils/cn'

interface ButtonProps extends ComponentProps<'button'> {}

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        'bg-yellowJedi shadow-none hover:scale-105 hover:shadow-jedi disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed px-6 h-12 rounded-[44px] font-starWars text-black transition-all duration-150 ease-in-out',
        className
      )}
    />
  )
}
