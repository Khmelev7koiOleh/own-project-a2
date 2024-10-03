import { defineStore } from 'pinia'

export const useThisStore = defineStore('This', {
  state: () => ({
    openForm: false,
    openFormLog: false,
    SideMenu: false
  }),
  actions: {},

  persist: true
})
