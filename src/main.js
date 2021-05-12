import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

// Importing components
import SectionOptions from './components/SectionOptions.vue'
import ManSection from './components/ManSection/ManSection.vue'
import WomanSection from './components/WomanSection/WomanSection.vue'

const routes = [
    {
        path: '/', component: SectionOptions, name: 'section-options'
    },
    {
        path: '/man', component: ManSection, name: 'man-section'
    },
    {
        path: '/woman', component: WomanSection, name: 'woman-section'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


const app = createApp(App)

// Connecting components
app.use('section-options', SectionOptions)
app.use('man-section', ManSection)
app.use('woman-section', WomanSection)


app.use(router)
app.mount('#app')
