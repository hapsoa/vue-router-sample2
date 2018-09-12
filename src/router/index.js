import Vue from 'vue';
import Router from 'vue-router';
import Hello from '../page/Hello';
import User from '../page/User';
import Card from '../page/Card';

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
      path: '/user',
      name: User.name,
      component: User
    },
    {
      path: '/card',
      name: Card.name,
      component: Card
    }
  ]
});
