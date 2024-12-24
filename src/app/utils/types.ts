interface Character {
  id: string
  name: string
  image: string
}

interface CharactersResults {
  results: Character[]
}

export interface CharactersData {
  characters: CharactersResults
}
