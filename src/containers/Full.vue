<template>
  <div class="app">
    <div id="right-panel" class="right-panel">
    	<RightSide/>
    	<router-view></router-view>
    </div>
    

  </div>
</template>

<script>

import RightSide from './../components/RightSide.vue'
export default {
  name: 'full',
  components: {      
      RightSide
  },

}
</script>
<style>
	.app{
		background: container-bg;
		display: table;	
		width: 100%
	}
	

</style>