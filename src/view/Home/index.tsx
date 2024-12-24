import logo from '../../assets/logo.png'

import { Card } from '../components/Card/Card'
import { useHomeController } from './useHomeController'

export function Home() {
  const { data, loading, error } = useHomeController()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div className="max-w-4xl m-auto">
      <div className="pt-8 pb-10 text-center w-full">
        <img
          src={logo}
          className="max-w-[500px] inline-block drop-shadow-portalGlow"
        />
      </div>

      <section className="flex items-center justify-center flex-wrap gap-5 ">
        {data?.map(character => (
          <Card
            id={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
      </section>
    </div>
  )
}
