import {createRouter, createWebHistory} from 'vue-router'

import Home from '../views/Home'
import About from '../views/About'
import Projects from '../views/Projects'
import Experiences from '../views/Experiences'

// Routes are declared here
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { title: 'JRTG-Portfolio' }
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        meta: { title: 'JRTG-Portfolio-About' }
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects,
        meta: { title: 'JRTG-Portfolio-Projects' }
    },
    {
        path: '/experiences',
        name: 'Experiences',
        component: Experiences,
        meta: { title: 'JRTG-Portfolio-Experience' }
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;