import { createRouter, createWebHistory } from 'vue-router';
import account from './account.vue';
const routes = [
  {
    path: '/settings',
    component: account, // Component chứa navigation
    children: [
      {
        path: 'account', // Trang account là trang mặc định
        component:account,
      },
      // {
      //   path: 'profile',
      //   component: () => import('@/views/Profile.vue'),
      // },
      // {
      //   path: 'products',
      //   component: () => import('@/views/Products.vue'),
      // },
      // {
      //   path: 'messages',
      //   component: () => import('@/views/Messages.vue'),
      // },
      {
        path: '',
        redirect: '/settings/account' // Khi vào /settings thì chuyển hướng đến account
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;