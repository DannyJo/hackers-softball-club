import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/HomeView.vue'),
      },
      {
        path: 'seasons/:season/players',
        name: 'PlayerStatistics',
        component: () => import(/* webpackChunkName: "players" */ '@/views/PlayersView.vue'),
      },
      {
        path: 'seasons/:season/fixtures',
        name: 'Fixtures',
        component: () => import(/* webpackChunkName: "fixtures" */ '@/views/FixturesView.vue'),
      },
      {
        path: 'seasons/:season',
        name: 'Season',
        component: () => import(/* webpackChunkName: "season" */ '@/views/SeasonView.vue'),
        children: [
        ]
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
