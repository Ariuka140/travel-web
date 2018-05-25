<template>
  <div class="app">
      <header class="newHeader">        
            <button type="button" class="sidebar-toggle-box" @click="toggleLeft()">          
              <div class="fa fa-bars" style="color:#676b70"></div>
            </button>
            <router-link title="Travel" to="/admin/adminDashboard" style="margin-left: 8px;" >
                <img src="./../images/logo.png" alt="Logo" width="85" height="30" class="logo_transparent_static" style="padding: 5px 0px;">
            </router-link>            
            <ul class="adminHeader">
              <li><i class="fa fa-phone"></i> 0123456789</li>
              <li class="hidden-info">
                <i class="fa fa-map-marker"></i> Ulaanbaatar, Mongolia
              </li>
            </ul>
      </header>
     <div id="left-panel" class="leftPanel">
       <LeftSide/>
     </div>
      <div id="right-panel" class="right-panel">
    
    	<router-view></router-view>
    </div>
    

  </div>
</template>

<script>
import LeftSide from './../components/LeftSide.vue'
export default {
  name: 'full',
  components: {      
      
      LeftSide
  },
  methods:{
    toggleLeft(){

      $('#left-panel').animate({width: 'toggle'});
    }
  }

}

</script>
<style>
	.app{
		background: container-bg;
		display: table;	
		width: 100%
	}
	

</style>