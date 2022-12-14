import '@/style/reset.scss'
import '@/style/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)
app.use(createPinia())
app.mount('#root')

// if (process.env.NODE_ENV === "development") {
//    globalThis.__VUE_OPTIONS_API__ = true
//    globalThis.__VUE_PROD_DEVTOOLS__ = true;
// } else {
//    globalThis.__VUE_OPTIONS_API__ = false;
//    globalThis.__VUE_PROD_DEVTOOLS__ = false;
// }
