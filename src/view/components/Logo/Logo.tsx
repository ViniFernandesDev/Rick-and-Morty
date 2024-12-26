import { cn } from '../../../app/utils/cn'
import { ComponentProps } from 'react'

import logo from '../../../assets/logo.png'

interface LogoProps extends ComponentProps<'div'> {}

export function Logo({ className }: LogoProps) {
  return (
    <img
      src={logo}
      className={cn(
        'max-w-full sm:max-w-[600px] drop-shadow-portalGlow inline-block ',
        className
      )}
    />
  )
}
