 <template>
    <div class="content container mt-3" style="width:1100px;float:none">     
				<div class="shortcode_title title-center title-decoration-bottom-center" style="margin-bottom:30px; margin-top:30px;">
					<h3 class="title_primary">TRAVELS</h3><span class="line_after_title"></span>
				</div>
        <div class="text-center" style="padding:20px">
            <div class="wrapper-tours-slider wrapper-tours-type-slider">
	            <div class="tours-type-slider owl-carousel owl-theme"  data-dots="true" data-nav="true" data-responsive='{"0":{"items":1}, "480":{"items":2}, "768":{"items":3} , "1200":{"items":4}}'>
								<div class="item-tour"  v-for="travel in travels" v-bind:key="travel.id">
	                <div class="item_border">
	                  <div class="item_content" >
	                    <div class="post_images">
	                      <router-link to="/admin/addPackage">
	                      <span class="price">
	                        <span class="travel_tour-Price-amount amount">$89.00</span>
	                      </span>
	                        <img src="./../images/tour/430x305/tour-3.jpg" alt="" title="">
	                      </router-link>
	                      <div class="group-icon">
	                        <a href="#" data-toggle="tooltip" data-placement="top" title="" class="frist" data-original-title="River Cruise"><i class="flaticon-transport-2"></i></a>
	                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Wildlife"><i class="flaticon-island"></i></a>
	                      </div>
	                    </div>
	                    <div class="wrapper_content">
	                      <div class="post_title"><h4>
	                        <a href="single-tour.html" rel="bookmark">{{travel.title}}</a>
	                      </h4></div>
	                      <span class="post_date" >{{travel.duration}}</span>
	                      <p>{{travel.description}}</p>
	                    </div>
	                  </div>
	                  <div class="read_more">
	                    <div class="item_rating">
	                      <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
	                    </div>
	                    <router-link to="/admin/addPackage" class="read_more_button">VIEW MORE
	                      <i class="fa fa-long-arrow-right"></i></router-link>
	                    <div class="clear"></div>
	                  </div>
	                </div>
	              </div>		             								        
	            </div>
	          </div>					
				</div>
    </div>
</template> 
<style>
    .post_date{
        text-transform: uppercase;
    }
</style>  
<script>
	import jquery from './../assets/js/jquery.min.js'
	import bootstrap from './../assets/js/bootstrap.min.js'
	import owl from './../assets/js/owl.carousel.min.js'
	import comingsoon from './../assets/js/jquery.mb-comingsoon.min.js'
	import waypoints from './../assets/js/waypoints.min.js'
	import counter from './../assets/js/jquery.counterup.min.js'
	import theme from './../assets/js/theme.js'
	import Vue from 'vue'
	import db from './../components/firebaseInit'		
	export default {
			name:'adminDashboard',      
			data () {
			return {
					travels: [],  
					title:'',
					description:'',
					duration:''          
					}        
			},
			created () {
					db.collection('travel').get().then((querySnapshot) => {                
							querySnapshot.forEach((doc) => {
							const data = {
									'title': doc.data().Title,
									'description': doc.data().Description,
									'duration': doc.data().Duration                   
							}
							this.travels.push(data)
							})
					});					
			},	
			methods:{
				loadCarousel:function(){
					$('.owl-carousel').owlCarousel({
						items: 5,
						loop: true,
						margin: 10,
						autoplay: true,
						autoplayTimeout: 500,
						autoplayHoverPause: true,
						responsiveClass: true,
						responsive:{
							0: {
								items: 1,
								nav: true
							},
							468: {
								items: 2,
								nav: true
							},
							768: {
								items: 3,
								nav: true
							},
							992: {
								items: 4,
								nav: true
							},
							1200: {
								items: 5,
								nav: true
							}	
						}
						});
				},
				generateCarousel: function () {
					if (jQuery().owlCarousel) {
						jQuery(".wrapper-tours-slider").each(function () {
							var $this = jQuery(this),
								owl = $this.find('.tours-type-slider');
							var config = owl.data();
							config.slidespeed = 1000;
							config.margin = 0;
							config.loop = true;
							config.navText = ['<i class="lnr lnr-chevron-left"></i>', '<i class="lnr lnr-chevron-right"></i>'];
							owl.owlCarousel(config);
						})
					}
				}	
			
			},
			updated: function () {
				var vm = this;
				Vue.nextTick()
					.then(function () {
						vm.generateCarousel();
					});
				}
		}
</script>
