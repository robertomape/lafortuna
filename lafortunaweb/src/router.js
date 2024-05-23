import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import GamesLotery from './components/GamesLotery.vue'


const routes = [
  // Define tus rutas aquí
  {
    path: '/', 
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/games',
    name: 'GamesLotery',
    component: GamesLotery
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
