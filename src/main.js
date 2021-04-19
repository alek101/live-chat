import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

<<<<<<< HEAD
//import firebase auth service
import { projectAuth } from './firebase/config'

let app

projectAuth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App)
        .use(router)
        .mount('#app')
    }
})


=======
createApp(App).use(router).mount('#app')
>>>>>>> parent of f8806e9 (fix)
