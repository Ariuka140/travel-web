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
		font-family: 'Open Sans' sans-serif !important;
		font-size: 16px;
		width: 100%
	}
	p {
    font-size: 16px;
    font-family: 'Open Sans' sans-serif;
    font-weight: 400;
    line-height: 24px;
    color: #878787;
	}
	p:focus {
	    border: none;
	    outline: 0;
	}
	a, button {
	    text-decoration: none;
	    outline: none!important;
	    color: #878787;

	    -webkit-transition: all 0.25s ease;
	    -moz-transition: all 0.25s ease;
	    -ms-transition: all 0.25s ease;
	    -o-transition: all 0.25s ease;
	    transition: all 0.25s ease;

	}
	a:hover,
	a:focus {
	    text-decoration: none;
	    color: #000;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
	    margin: 0;
	}
	ul,
	ol {
	    padding-left: 0;
	}
	.btn:focus,
	button:focus {
	    box-shadow: none !important;
	    outline: 0;
	}
	img {
	    max-width: 100%;
	}
	.btn,
	button,
	input,
	textarea {
	    box-shadow: none;
	    outline: 0 !important;
	}
	.no-padding {
	    padding: 0 !important;
	}

	.transition {
	    -webkit-transition: all 0.3s ease;
	    -moz-transition: all 0.3s ease;
	    -ms-transition: all 0.3s ease;
	    -o-transition: all 0.3s ease;
	    transition: all 0.3s ease;
	}


</style>