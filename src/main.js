import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import Store from './store/GlobalState'

// Importing components
import SectionOptions from './components/SectionOptions.vue'
import ManSection from './components/ManSection/ManSection.vue'
import WomanSection from './components/WomanSection/WomanSection.vue'
import ManJacketsItems from './components/ManSection/ManSectionItems/Jackets/ManJacketsItems.vue'
import UserRegistration from './components/UI/Registration/UserRegistration.vue'

const routes = [
    {
        path: '/', component: SectionOptions, name: 'section-options'
    },
    {
        path: '/man', component: ManSection, name: 'man-section', 
    },
    {
        path: '/woman', component: WomanSection, name: 'woman-section'
    },
    {
        path: '/jackets-man', component: ManJacketsItems, name: 'man-jackets-items'
    },
    {
        path: '/registration', component: UserRegistration, name: 'user-registration'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)

app.use(Store)

// Connecting components
app.use('section-options', SectionOptions)
app.use('man-section', ManSection)
app.use('woman-section', WomanSection)


app.use(router)
app.mount('#app')
