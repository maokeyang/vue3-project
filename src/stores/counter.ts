import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  // 相当于getter
  const doubleCount = computed(() => count.value * 2)
  // 相当于action
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
