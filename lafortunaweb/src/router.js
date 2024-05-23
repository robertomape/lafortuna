import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import GamesLotery from './components/GamesLotery.vue'
import GamesL2 from './components/GamesL2.vue'

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
  {
    path: '/games2',
    name: 'GamesL2',
    component: GamesL2
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
