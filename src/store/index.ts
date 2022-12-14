import { defineStore } from 'pinia'
// ä¸ćçść
export const animeTypeStore = defineStore('animeType', {
  state: () => {
      return {
        animeType: 'css'
      }
  },
  getters: {
    getState():string {
      return this.animeType
    }
  },
  actions: {
    changeState(val:string) {
      this.animeType = val
    },
  }
})
