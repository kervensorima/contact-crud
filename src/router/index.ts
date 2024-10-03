import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactListView from '@/views/ContactListView.vue'
import AddContactView from '@/views/AddContactView.vue'
import EditContactView from '@/views/EditContactView.vue'
import ContactDetailView from '@/views/ContactDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/browse-contact',
      name: 'contact-list',
      component: ContactListView
    },
    { path: '/add-contact', name: 'add-contact', component: AddContactView },
    { path: '/edit-contact/:id', name: 'edit', component: EditContactView },
    { path: '/contact-detail/:id', name: 'detail', component: ContactDetailView }
  ]
})

export default router
