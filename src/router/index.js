import Vue from 'vue'
import Router from 'vue-router'

// Containers
import full from './../containers/full'

import MainTemplate from './../containers/mainTemplate'
import Home from './../views/home'
import Tours from './../views/tours'
import TourDetail from './../views/tourDetail'
import addTour from './../views/addTour'
import editTour from './../views/editTour'
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
          path:'addTour',
          name:'addTour',
          component:addTour         
        },
        {          
          path:'edit/:id',
          name:'editTour',
          component:editTour          
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