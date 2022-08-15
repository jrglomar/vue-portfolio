import {createRouter, createWebHistory} from 'vue-router'

import Home from '../views/Home'
import About from '../views/About'
import Projects from '../views/Projects'

// Routes are declared here
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;