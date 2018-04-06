import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

import Admin from '@/views/AdminDashboard'
import Home from '@/views/Home'
import Full from '@/containers/full'


import Colors from '@/views/theme/Colors'
import Typography from '@/views/theme/Typography'

import Charts from '@/views/Charts'
import Widgets from '@/views/Widgets'

// Views - Components
import Cards from '@/views/base/Cards'
import Forms from '@/views/base/Forms'
import Switches from '@/views/base/Switches'
import Tables from '@/views/base/Tables'
import Breadcrumbs from '@/views/base/Breadcrumbs'
import Carousels from '@/views/base/Carousels'
import Collapses from '@/views/base/Collapses'
import Jumbotrons from '@/views/base/Jumbotrons'
import ListGroups from '@/views/base/ListGroups'
import Navs from '@/views/base/Navs'
import Navbars from '@/views/base/Navbars'
import Paginations from '@/views/base/Paginations'
import Popovers from '@/views/base/Popovers'
import ProgressBars from '@/views/base/ProgressBars'
import Tooltips from '@/views/base/Tooltips'

import StandardButtons from '@/views/buttons/StandardButtons'
import ButtonGroups from '@/views/buttons/ButtonGroups'
import Dropdowns from '@/views/buttons/Dropdowns'
import SocialButtons from '@/views/buttons/SocialButtons'

// Views - Icons
import Flags from '@/views/icons/Flags'
import FontAwesome from '@/views/icons/FontAwesome'
import SimpleLineIcons from '@/views/icons/SimpleLineIcons'

import Page404 from '@/views/pages/Page404'
import Page500 from '@/views/pages/Page500'
import Login from '@/views/pages/Login'
import Register from '@/views/pages/Register'

import { Header as AppHeader, Sidebar, Aside as AppAside, Footer as AppFooter, Breadcrumb } from './../components/'

Vue.use(Router)

export default new Router({
	routes: [
    {
      path: '/',
      redirect: '/admin',
      name: 'Admin',
      component: Full,
      children: [
        {
          path: 'admin',
          name: 'Dashboard',
          component: Admin
        }]   
  	}, 

    {
      path: 'widgets',
      name: 'Widgets',
      component: Widgets
    }, 
    {
      path: 'theme',
      redirect: '/theme/colors',
      name: 'Theme',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: 'colors',
          name: 'Colors',
          component: Colors
        },
        {
          path: 'typography',
          name: 'Typography',
          component: Typography
        }
      ]
    },
    {
      path: 'charts',
      name: 'Charts',
      component: Charts
    },
    {
      path: 'base',
      redirect: '/base/cards',
      name: 'Base',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: 'cards',
          name: 'Cards',
          component: Cards
        },
        {
          path: 'forms',
          name: 'Forms',
          component: Forms
        },
        {
          path: 'switches',
          name: 'Switches',
          component: Switches
        },
        {
          path: 'tables',
          name: 'Tables',
          component: Tables
        },
        {
          path: 'breadcrumbs',
          name: 'Breadcrumbs',
          component: Breadcrumbs
        },
        {
          path: 'carousels',
          name: 'Carousels',
          component: Carousels
        },
        {
          path: 'collapses',
          name: 'Collapses',
          component: Collapses
        },
        {
          path: 'jumbotrons',
          name: 'Jumbotrons',
          component: Jumbotrons
        },
        {
          path: 'list-groups',
          name: 'List Groups',
          component: ListGroups
        },
        {
          path: 'navs',
          name: 'Navs',
          component: Navs
        },
        {
          path: 'navbars',
          name: 'Navbars',
          component: Navbars
        },
        {
          path: 'paginations',
          name: 'Paginations',
          component: Paginations
        },
        {
          path: 'popovers',
          name: 'Popovers',
          component: Popovers
        },
        {
          path: 'progress-bars',
          name: 'Progress Bars',
          component: ProgressBars
        },
        {
          path: 'tooltips',
          name: 'Tooltips',
          component: Tooltips
        }
      ]
    }, 
    {
      path: 'buttons',
      redirect: '/buttons/buttons',
      name: 'Buttons',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: 'standard-buttons',
          name: 'Standard Buttons',
          component: StandardButtons
        },
        {
          path: 'button-groups',
          name: 'Button Groups',
          component: ButtonGroups
        },
        {
          path: 'dropdowns',
          name: 'Dropdowns',
          component: Dropdowns
        },
        {
          path: 'social-buttons',
          name: 'Social Buttons',
          component: SocialButtons
        }
      ]
    },
    {
      path: 'icons',
      redirect: '/icons/font-awesome',
      name: 'Icons',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: 'flags',
          name: 'Flags',
          component: Flags
        },
        {
          path: 'font-awesome',
          name: 'Font Awesome',
          component: FontAwesome
        },
        {
          path: 'simple-line-icons',
          name: 'Simple Line Icons',
          component: SimpleLineIcons
        }
      ]
    },
    
  	{
  	   path: '/',
       component: Home,
       name: 'Home'
      } 
  	]
  })