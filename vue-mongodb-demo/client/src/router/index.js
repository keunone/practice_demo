import Vue from 'vue';
import Router from 'vue-router';
// import Index from '@/components/index';
// import Layout from '@/components/layout/index';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'projects' }
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../pages/projects/index')
    },
    {
      path: '/companies',
      name: 'companies',
      component: () => import('../pages/companies/index')
    },
    {
      path: '/resumes',
      name: 'resumes',
      component: () => import('../pages/resumes/index')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/login/index')
    }
    // {
    //   path: '/',
    //   name: 'index',
    //   component: Layout,
    //   children: [
    //     {
    //       path: 'dashboard',
    //       name: 'dashboard',
    //       component: () => import('../pages/projects/index')
    //     },
    //   ],
    // },
    // {
    //   path: '/',
    //   name: 'projects',
    //   component: Layout,
    //   children: [
    //     { path: 'projects', name: 'projects',
    //    component: () => import('../pages/projects/index') },
    //   ],
    // },
    // {
    //   path: '/',
    //   name: 'companies',
    //   component: Layout,
    //   children: [
    //     { path: 'companies', name: 'companies',
    //    component: () => import('../pages/companies/index') },
    //   ],
    // },
  ]
});
