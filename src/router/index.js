import Vue from 'vue'
import Router from 'vue-router'

// Containers
import full from './../containers/Full'

import Home from './../views/Home'
import addPackage from './../views/addPackage'
import adminDashboard from './../views/adminDashboard'


Vue.use(Router) 

export default new Router({
  mode: 'history', // Demo is living in GitHub.io, so required!
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',      
      name: 'Home',
      component : Home      
    },{
     path: '/admin',      
     name: 'Admin',
     redirect:'/admin/adminDashboard',
     component: full,
     children:[
        {          
          path:'addPackage',
          name:'addPackage',
          component:addPackage          
        },
        {          
          path:'adminDashboard',
          name:'adminDashboard',
          component:adminDashboard          
        }
      ]
    }
    ]
    
});