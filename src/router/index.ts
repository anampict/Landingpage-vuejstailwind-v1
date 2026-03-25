import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// ─── Navbar Navigation Config ────────────────────────────────────────
// Each entry uses either `routerTo` (Vue Router) or `href` (anchor link).
export interface NavItem {
  label: string
  routerTo?: string
  href?: string
}

export const navItems: NavItem[] = [
  { label: 'HOME', routerTo: '/' },
  { label: 'SUSTAINABILITY', routerTo: '/sustainability' },
  { label: 'PROJECTS', routerTo: '/projects' },
  { label: 'ABOUT US', routerTo: '/about' },
]

// ─── Routes ──────────────────────────────────────────────────────────
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
    },
    {
      path: '/sustainability',
      name: 'sustainability',
      component: () => import('../views/SustainabilityView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
