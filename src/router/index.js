import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/home.vue';
import Login from '../components/children/login.vue';
import First from '../components/children/first.vue';

Vue.use(Router)

export default new Router({
  mode : "history",
  // base : __dirname,
  routes: [
    {
      path: '/',
      redirect : "/home"
    },{
        path : "/home",
        component : Home,
        children : [
          { path : "/" , name : "login" , component : Login },
          { path : "login" , component : Login},
          { path : "first" , name : "first" , component : First }
        ]
    }
  ]
})
