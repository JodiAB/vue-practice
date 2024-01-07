// router.js

import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView';
import ResumeView from '../views/ResumeView.vue';
import ProjectsView from '../views/ProjectsView.vue';
import Testimonials from '../views/Testimonials.vue';
import ContactView from '../views/ContactView.vue';

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/resume',
    name: 'resume',
    component: ResumeView,
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView,
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    component: Testimonials,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
