import {
    createApp
} from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

class AosPlugin {
    config = {
        once: true
        // Your AOS config here
    }

    install(Vue) {
        AOS.init(this.config)

        Vue.mixin({
            updated() {
                this.$nextTick(function () {
                    AOS.refreshHard() // This is needed to avoid the un-animate aos effect
                })
            }
        })
    }
}

createApp(App).use(new AosPlugin()).mount('#app')