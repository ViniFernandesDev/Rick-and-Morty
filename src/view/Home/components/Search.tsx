import { Input } from '../../components/Input/Input'

interface SearchProps {
  search: string
  setSearch: (value: string) => void
}

export function Search({ search, setSearch }: SearchProps) {
  return (
    <div className="px-2 mb-12 sm:mb-16 sm:mx-auto sm:w-[600px]">
      <p className="text-white font-getSchwifty text-2xl sm:text-3xl text-center mb-4">
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
  )
}
