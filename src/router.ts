// router.ts
import { createRouter, createWebHistory } from 'vue-router';
import TopPage from './pages/TopPage.vue';

const routes = [
  { path: '/', name: 'Top', component: TopPage },
  { path: '/profile', name: 'Profile', redirect: '/' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
