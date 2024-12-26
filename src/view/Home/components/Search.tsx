import { Input } from '../../components/Input/Input'

interface SearchProps {
  search: string
  setSearch: (value: string) => void
}

export function Search({ search, setSearch }: SearchProps) {
  return (
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
  )
}
