import { persist } from "zustand/middleware"
import { create } from "zustand"

import { Chat } from "types"

interface BotStore {
	chats: Chat[]
	add: (payload: Chat) => void
	clear: () => void
}

export const useBotStore = create<BotStore>()(
	persist((set) => ({
    chats: [],
    add: (payload) => set((state) => ({
      chats: [...state.chats, payload]
    })),
    clear: () => set(() => ({
      chats: []
    }))
  }), { name: "bot-store" })
)
