import Vue from 'vue';
import Router from 'vue-router';
import Hello from '../page/Hello';
import User from '../page/User';
import Card from '../page/Card';
import test from '../page/test/test';
import StoreViewer from '../page/StoreViewer';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/store',
      name: StoreViewer.name,
      component: StoreViewer
    },
    {
      path: '/user',
      name: User.name,
      component: User
    },
    {
      path: '/card',
      name: Card.name,
      component: Card
    },
    {
      path: '/test',
      name: test.name,
      component: test
    }
  ]
});
