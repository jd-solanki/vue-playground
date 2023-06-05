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
    },
  },
})

app.mount('#app')
