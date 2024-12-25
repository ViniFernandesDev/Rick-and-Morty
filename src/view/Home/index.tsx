import logo from '../../assets/logo.png'

import { Card } from '../components/Card/Card'
import { Input } from '../components/Input/Input'
import { useHomeController } from './useHomeController'

export function Home() {
  const { filteredSearch, search, setSearch, loading, error } =
    useHomeController()

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

      <div className="mb-16 mx-auto w-[600px]">
        <p className="text-white font-getSchwifty text-3xl text-center mb-4">
          Encontre seus personagens favoritos
        </p>

        <Input
          name="search"
          placeholder="Ex. Morty"
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <section className="flex items-center justify-center flex-wrap gap-5 ">
        {filteredSearch?.map(character => (
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
