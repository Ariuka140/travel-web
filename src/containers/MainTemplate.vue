<template>    
	<div class="transparent_home_page">
	<div class="wrapper-container">
	  <header id="masthead" class="site-header sticky_header affix-top">
	    <div class="header_top_bar" style="position:fixed;width:100%;margin-bottom:30px">
	      <div class="container">
	        <div class="row">
	          <div class="col-sm-4">
	            <aside id="text-15" class="widget_text">
	              <div class="textwidget">
	                <ul class="top_bar_info clearfix">
	                  <li><i class="fa fa-clock-o"></i> Mon - Sat 8.00 - 18.00. Sunday CLOSED</li>
	                </ul>
	              </div>
	            </aside>
	          </div>
	          <div class="col-sm-8 topbar-right">
	            <aside id="text-7" class="widget widget_text">
	              <div class="textwidget">
	                <ul class="top_bar_info clearfix">
	                  <li><i class="fa fa-phone"></i> 0123456789</li>
	                  <li class="hidden-info">
	                    <i class="fa fa-map-marker"></i> Ulaanbaatar, Mongolia
	                  </li>
	                </ul>
	              </div>
	            </aside>	         
	          </div>
	        </div>
	      </div>
	    </div>
	    <div class="navigation-menu" style="margin-top:30px;z-index:-1">
	      <div class="container">
	        <div class="menu-mobile-effect navbar-toggle button-collapse" data-activates="mobile-demo">
	          <span class="icon-bar"></span>
	          <span class="icon-bar"></span>
	          <span class="icon-bar"></span>
	        </div>
	        <div class="width-logo sm-logo">
	          <a href="#" title="Travel" rel="home">
	            <img src="./../images/logo.png" alt="Logo" width="474" height="130" class="logo_transparent_static">
	            <img src="./../images/logo_sticky.png" alt="Sticky logo" width="474" height="130" class="logo_sticky">
	          </a>
	        </div>
	        <nav class="width-navigation">
	          <ul class="nav navbar-nav menu-main-menu side-nav" id="mobile-demo">
	            <li>
	              <a href="index.html">Home</a>	             
	            </li>
	            <li>
	              <a href="tours.html">Tours</a>	             
	            </li>
							<li>
	              <a href="tours.html">Destinations</a>	             
	            </li>
	            <li><a href="contact.html">Contact</a></li>
	            <li class="menu-right">
	              <ul>
	                <li id="travel_social_widget-2" class="widget travel_search">
	                  <div class="search-toggler-unit">
	                    <div class="search-toggler">
	                      <i class="fa fa-search"></i>
	                    </div>
	                  </div>
	                  <div class="search-menu search-overlay search-hidden">
	                    <div class="closeicon"></div>
	                    <form method="get" class="search-form" action="http://html.physcode.com/travel/tours.html">
	                      <input type="search" class="search-field" placeholder="Search ..." value="" name="s" title="Search for:">
	                      <input type="submit" class="search-submit font-awesome" value="&#xf002;">
	                    </form>
	                    <div class="background-overlay"></div>
	                  </div>
	                </li>
	              </ul>
	            </li>
	          </ul>
	        </nav>
	      </div>
	    </div>
	  </header>
		<router-view></router-view>	 
	  <div class="wrapper-footer wrapper-footer-newsletter">
	    <div class="main-top-footer">
	      <div class="container">
	        <div class="row">
	          <aside class="col-sm-3 widget_text"><h3 class="widget-title">CONTACT</h3>
	            <div class="textwidget">
	              <div class="footer-info">
	                <p>Lorem ipsum dolor sit amet, cons ectetueradipiscing elit, sed diam nonu my nibh euis motincidunt ut laoreetd
	                </p>
	                <ul class="contact-info">
	                  <li><i class="fa fa-map-marker fa-fw"></i> 1945 Washington, San Francisco</li>
	                  <li><i class="fa fa-phone fa-fw"></i> +1 234 456 7890</li>
	                  <li>
	                    <i class="fa fa-envelope fa-fw"></i><a href="mailto:hello@siteinfo.com"> hello@siteinfo.com</a>
	                  </li>
	                </ul>
	              </div>
	            </div>
	          </aside>
	          <aside class="col-sm-3 widget_text"><h3 class="widget-title">INFORMATION</h3>
	            <div class="textwidget">
	              <ul class="menu list-arrow">
	                <li><a href="#">Press Centre</a></li>
	                <li><a href="#">Travel News</a></li>
	                <li><a href="#">About Us</a></li>
	                <li><a href="#">Privacy Policy</a></li>
	                <li><a href="#">Contact Us</a></li>
	              </ul>
	            </div>
	          </aside>
	          <aside class="col-sm-3 widget_text"><h3 class="widget-title">Our Menu</h3>
	            <div class="textwidget">
	              <ul class="menu list-arrow">
	                <li><a href="#">About us</a></li>
	                <li><a href="#">Career</a></li>
	                <li><a href="#">Terms</a></li>
	                <li><a href="#">Privacy Policy</a></li>
	                <li><a href="#">Contact</a></li>
	              </ul>
	            </div>
	          </aside>
	          <aside class="col-sm-3 custom-instagram widget_text">
	            <h3 class="widget-title">Instagram</h3>
	            <div class="textwidget">
	              <ul>
	                <li><img src="./../images/instagram/1.jpg" alt="instagram"></li>
	                <li><img src="./../images/instagram/2.jpg" alt="instagram"></li>
	                <li><img src="./../images/instagram/3.jpg" alt="instagram"></li>
	                <li><img src="./../images/instagram/4.jpg" alt="instagram"></li>
	                <li><img src="./../images/instagram/5.jpg" alt="instagram"></li>
	                <li><img src="./../images/instagram/6.jpg" alt="instagram"></li>
	              </ul>
	            </div>
	          </aside>
	        </div>
	      </div>
	    </div>
	    <div class="container wrapper-copyright">
	      <div class="row">
	        <div class="col-sm-6">
	          <div><p>Copyright © 2017 Travel. All Rights Reserved.</p></div>
	        </div>
	        <div class="col-sm-6">
	          <aside id="text-5" class="widget_text">
	            <div class="textwidget">
	              <ul class="footer_menu">
	                <li><a href="#">Terms of Use</a></li>
	                <li>|</li>
	                <li><a href="#">Privacy Policy</a></li>
	                <li>|</li>
	                <li><a href="https://twitter.com/physcode"><i class="fa fa-twitter"></i></a></li>
	                <li><a href="https://www.facebook.com/physcode/"><i class="fa fa-facebook"></i></a></li>
	                <li><a href="https://www.instagram.com/physcode/"><i class="fa fa-instagram"></i></a>
	                </li>
	              </ul>
	            </div>
	          </aside>
	        </div>
	      </div>
	    </div>
	  </div>
	  <div class="wrapper-subscribe">
	    <div class="subscribe_shadow"></div>
	    <div class="form-subscribe parallax-section stick-to-bottom form-subscribe-full-width">
	      <div class="shortcode_title text-white title-center title-decoration-bottom-center margin-bottom-3x">
	        <div class="title_subtitle">To receive our best monthly deals</div>
	        <h3 class="title_primary">JOIN THE NEWSLETTER</h3>
	        <span class="line_after_title"></span>
	      </div>
	      <div class="form-subscribe-form-wrap">
	        <aside class="mailchimp-container">
	          <form class="epm-sign-up-form" name="epm-sign-up-form" action="#" method="post">
	            <div class="epm-form-field">
	              <label for="epm-email">Email Address</label>
	              <input type="email" placeholder="Email Address" name="epm-email" tabindex="8" class="email" id="epm-email" value="">
	            </div>


	            <input type="submit" name="epm-submit-chimp" value="Sign Up Now" data-wait-text="Please wait..." tabindex="10" class="button btn epm-sign-up-button epm-submit-chimp">
	          </form>
	        </aside>
	      </div>
	    </div>
	  </div>
	</div>
	</div>
</template>
<style>
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
	export default {
			name:'MainTemplate', 									  
							
		}
</script>

