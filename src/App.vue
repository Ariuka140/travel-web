<template>
  <div id="app">    
	<router-view></router-view>
</div>
</template>
<style >
	.white-text{
	  color:#ffffff
	}
	#app {
	  font-family: 'Avenir', Helvetica, Arial, sans-serif;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  text-align: center;
	  color: #2c3e50;
	
	}
</style>

<script>
	import jquery from './assets/js/jquery.min.js'
	import bootstrap from './assets/js/bootstrap.min.js'
	import owl from './assets/js/owl.carousel.min.js'
	import comingsoon from './assets/js/jquery.mb-comingsoon.min.js'
	import waypoints from './assets/js/waypoints.min.js'
	import counter from './assets/js/jquery.counterup.min.js'
	import theme from './assets/js/theme.js'	
	import BootstrapVue from 'bootstrap-vue'

	export default {
	  name: 'App',	  
	  
	}
</script>
