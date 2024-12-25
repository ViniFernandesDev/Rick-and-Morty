import { Card } from '../components/Card/Card'
import { Input } from '../components/Input/Input'
import { Logo } from '../components/Logo/Logo'
import { Button } from '../components/Button/Button'

import { useHomeController } from './useHomeController'

export function Home() {
  const {
    search,
    setSearch,
    loading,
    error,
    currentPage,
    totalPaginationPages,
    listCharacters,
    handleNext,
    handlePrevious
  } = useHomeController()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div className="max-w-4xl m-auto">
      <div className="pt-8 pb-10 text-center w-full">
        <Logo />
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

      <section className="flex flex-col justify-between min-h-[700px]">
        <div className="flex justify-center flex-wrap gap-5">
          {listCharacters?.length === 0 && (
            <h1 className="text-white">Nenhum personagem encontrado</h1>
          )}

          {listCharacters?.map(character => (
            <Card
              id={character.id}
              name={character.name}
              image={character.image}
            />
          ))}
        </div>

        <div className="text-white w-full flex items-center justify-center gap-3 mt-12">
          <Button
            className="bg-portalGreenLight"
            onClick={handlePrevious}
            disabled={currentPage === 0}
          >
            Anterior
          </Button>

          <Button
            className="bg-portalGreenLight"
            onClick={handleNext}
            disabled={currentPage === totalPaginationPages - 1}
          >
            Próximo
          </Button>
        </div>
      </section>
    </div>
  )
}
