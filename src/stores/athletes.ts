import { Athlete } from '@/types/athlete'
import { create } from 'zustand'

interface AthletesState {
    items: Athlete[]
    update: (items: Athlete[]) => void
}

export const useAthletesStore = create<AthletesState>((set) => ({
  items: [],   
  update: (items: Athlete[]) => {
    set({ items })
  },
}))