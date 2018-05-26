import Vue from 'vue'
import Router from 'vue-router'

// Containers
import full from './../containers/Full'

import MainTemplate from './../containers/MainTemplate'
import Home from './../views/Home'
import Tours from './../views/Tours'
import TourDetail from './../views/TourDetail'
import addPackage from './../views/addPackage'
import adminDashboard from './../views/adminDashboard'
//import responsive from 'vue-responsive'

//Vue.use(responsive)
Vue.use(Router) 

export default new Router({
  mode: 'history', // Demo is living in GitHub.io, so required!
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',      
      name: 'MainTemplate',
      component : MainTemplate,
      redirect:'/Home' ,
      children:[
        {          
          path:'',
          name:'Home',
          component:Home          
        },
        {          
          path:'/Tours',
          name:'Tours',
          component:Tours          
        },
        {          
          path:'/:id',
          name:'TourDetail',
          component:TourDetail          
        },
      ]     
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