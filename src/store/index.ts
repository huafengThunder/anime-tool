import { defineStore } from 'pinia'
// 下拉状态
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
