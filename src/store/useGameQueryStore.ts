import { create } from "zustand"

export interface GameQuery {
  genreId?: number
  platformId?: number
  sortOrder?: string
  search?: string
}

interface GameQueryStore {
  gameQuery: GameQuery
  setSearchText: (searchText: string) => void
  setGenreId: (genreId: number) => void
  setPlatformId: (platformId: number | null) => void
  setSortOrder: (search: string) => void
}

export const useGameQueryStore = create<GameQueryStore>()((set) => ({
  gameQuery: {},
  setSearchText: (search) => {
    set({ gameQuery: { search } })
  },
  setGenreId: (genreId) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, genreId } })),
  setPlatformId: (platformId) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, platformId: platformId ?? undefined },
    })),
  setSortOrder: (sortOrder) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, sortOrder } })),
}))
