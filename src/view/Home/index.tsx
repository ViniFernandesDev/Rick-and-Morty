import { Card } from '../components/Card/Card'
import { Logo } from '../components/Logo/Logo'
import { Button } from '../components/Button/Button'
import { Search } from './components/Search'
import { CircleNotch } from '../../assets/CircleNotch'

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

  const isShowPagination = !loading && !error && listCharacters.length !== 0
  const isNotFoundCharacters = !loading && listCharacters?.length === 0

  return (
    <div className="max-w-4xl m-auto">
      <div className="fixed bg-spaceBlack sm:bg-transparent sm:relative pb-6 sm:pt-8 sm:pb-10 mb-8 sm:mb-0 text-left sm:text-center w-full pr-[100px] sm:pr-0">
        <Logo className="w-[340px] sm:w-full" />
      </div>

      <div className="mt-[130px] sm:mt-0">
        <Search search={search} setSearch={setSearch} />
      </div>

      <section className="flex flex-col justify-between min-h-[700px] pb-4">
        <div className="flex flex-col">
          {loading && (
            <div className="text-center">
              <CircleNotch className="animate-spin inline-block" />
            </div>
          )}

          {error && (
            <p className="text-red-400 font-getSchwifty text-3xl text-center mb-4">
              {error?.message ?? 'Erro desconhecido, atualize a página'}
            </p>
          )}

          {isNotFoundCharacters && (
            <p className="text-portalGreenLight animate-portal font-getSchwifty text-2xl text-center mb-4">
              {error?.message ?? 'Nenhum personagem encontrado'}
            </p>
          )}

          <div className="flex justify-center flex-wrap gap-5">
            {listCharacters?.map(character => (
              <Card
                key={character.id}
                id={character.id}
                name={character.name}
                image={character.image}
              />
            ))}
          </div>
        </div>

        {isShowPagination && (
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
        )}
      </section>
    </div>
  )
}
