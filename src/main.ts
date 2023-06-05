import { createApp } from 'vue'
import { plugin as anu } from './@anu'
import App from './App.vue'
import router from './router'

import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

const app = createApp(App)

app.use(router)
app.use(anu, {
  defaults: {
    ACard: {
      title: 'My Custom Title',
      ABtn: {
        icon: 'i-bx-home',
      },
      AAlert: {
        class: '!bg-purple-300',
        ABtn: {
          class: 'bg-transparent border border-red-500 text-red-500',
        },
      },
    },
  },
})

app.mount('#app')
