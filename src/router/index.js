import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddPost from '@/views/AddPost.vue'
import Blog from '@/views/Blog.vue'
import EditBlog from '@/views/EditBlog.vue'

const routes = [
  {
    path: '/:message?',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/add-post',
    name: 'add-post',
    component: AddPost
  },
  {
    path: '/edit-post/:title',
    name: 'edit-post',
    component: EditBlog
  },
  {
    path: '/post/:title',
    name: 'post',
    component: Blog
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
