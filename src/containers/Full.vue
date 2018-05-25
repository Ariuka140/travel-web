<template>
  <div class="app">
      <header class="newHeader">
        <button type="button" class="sidebar-toggle-box" @click="toggleLeft()">          
          <div class="fa fa-bars"></div>
        </button>
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