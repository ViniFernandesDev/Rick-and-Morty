import { useNavigate } from 'react-router-dom'

import { Button } from '../components/Button/Button'
import { Logo } from '../components/Logo/Logo'

export function Initial() {
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-mortyYellow flex items-center justify-center flex-col">
        <div className="flex flex-col items-center text-center gap-6">
          <Logo />

          <p className="font-getSchwifty max-w-[630px] text-white text-3xl leading-[60px] tracking-[3px]">
            Explore os heróis, vilões e criaturas do multiverso de Rick and
            Morty.
          </p>
        </div>

        <Button className="mt-16" onClick={() => navigate('/home')}>
          QUERO COMEÇAR
        </Button>
      </div>
    </div>
  )
}
