import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import FriendLink from '../views/FriendLink.vue'
import Tag from '../views/Tag.vue'
import Good from '../views/Good.vue'
import About from '../views/About.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/friend-link',
      name: 'friend-link',
      component: FriendLink
    },
    {
      path: '/tag',
      name: 'tag',
      component: Tag
    },
    {
      path: '/good',
      name: '',
      component: Good
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})

export default router