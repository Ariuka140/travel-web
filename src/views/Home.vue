<template>
	 <div class="site wrapper-content">
	    <div class="home-content" role="main">
	      <div class="wrapper-bg-video">
	        <video poster="./../images/video_slider.jpg" playsinline autoplay muted loop>
	          <source src="http://physcode.com/video/330149744.mp4" type="video/mp4">
	        </video>
	        <div class="content-slider">
	          <p>Find your special tour today </p>
	          <h2>With Maranatha Tour</h2>
	          <p><router-link to="/Tours" class="btn btn-slider">VIEW TOURS </router-link></p>
	        </div>
	      </div>

	      <div class="slider-tour-booking">
	        <div class="container">
	          <div class="travel-booking-search hotel-booking-search travel-booking-style_1">
	            <form name="hb-search-form" action="http://html.physcode.com/travel/tours.html" id="tourBookingForm">
	              <ul class="hb-form-table">
	                <li class="hb-form-field">
	                  <div class="hb-form-field-input hb_input_field">
	                    <input type="text" name="name_tour" value="" v-model="titleSearch" placeholder="Tour title">
	                  </div>
	                </li>
	                <li class="hb-form-field">
	                  <div class="hb-form-field-input hb_input_field">
	                    <select name="tourtax[tour_phys]" v-model="typeSearch">
	                      <option value="0">Tour Type</option>
	                      <option v-for="tp in types" v-bind:value="tp.typeId">{{tp.typeName}}</option> 
	                    </select>
	                  </div>
	                </li>	               
	                <li class="hb-submit">
	                  <router-link v-bind:to="{ name: 'Tours', params: { titleSearch : titleSearch, typeSearch: typeSearch }}"   class="searchButton">Search Tours</router-link>
	                </li>
	              </ul>
	              <input type="hidden" name="lang" value="">

	            </form>
	          </div>
	        </div>
	      </div>
	      <div class="container two-column-respon mg-top-6x mg-bt-6x">
	        <div class="row">
	          <div class="col-sm-12 mg-btn-6x">
	            <div class="shortcode_title title-center title-decoration-bottom-center">
	              <h3 class="title_primary">WHY CHOOSE US?</h3><span class="line_after_title"></span>
	            </div>
	          </div>
	        </div>
	        <div class="row">
	          <div class="wpb_column col-sm-3">
	            <div class="widget-icon-box widget-icon-box-base iconbox-center">
	              <div class="boxes-icon circle" style="font-size:30px;width:80px; height:80px;line-height:80px">
	                <span class="inner-icon"><i class="vc_icon_element-icon flaticon-transport-6"></i></span>
	              </div>
	              <div class="content-inner">
	                <div class="sc-heading article_heading">
	                  <h4 class="heading__primary">Diverse Destinations</h4></div>
	                <div class="desc-icon-box">
	                  <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>
	                </div>
	              </div>
	            </div>
	          </div>
	          <div class="wpb_column col-sm-3">
	            <div class="widget-icon-box widget-icon-box-base iconbox-center">
	              <div class="boxes-icon " style="font-size:30px;width:80px; height:80px;line-height:80px">
	                <span class="inner-icon"><i class="vc_icon_element-icon flaticon-sand"></i></span>
	              </div>
	              <div class="content-inner">
	                <div class="sc-heading article_heading">
	                  <h4 class="heading__primary">Value for Money</h4></div>
	                <div class="desc-icon-box">
	                  <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>
	                </div>
	              </div>
	            </div>
	          </div>
	          <div class="wpb_column col-sm-3">
	            <div class="widget-icon-box widget-icon-box-base iconbox-center">
	              <div class="boxes-icon " style="font-size:30px;width:80px; height:80px;line-height:80px">
	                <span class="inner-icon"><i class="vc_icon_element-icon flaticon-travel-2"></i></span>
	              </div>
	              <div class="content-inner">
	                <div class="sc-heading article_heading">
	                  <h4 class="heading__primary">Beautiful Places</h4></div>
	                <div class="desc-icon-box">
	                  <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>
	                </div>
	              </div>
	            </div>
	          </div>
	          <div class="wpb_column col-sm-3">
	            <div class="widget-icon-box widget-icon-box-base iconbox-center">
	              <div class="boxes-icon circle" style="font-size:30px;width:80px; height:80px;line-height:80px">
	                <span class="inner-icon"><i class="vc_icon_element-icon flaticon-travelling"></i></span>
	              </div>
	              <div class="content-inner">
	                <div class="sc-heading article_heading">
	                  <h4 class="heading__primary">Passionate Travel</h4></div>
	                <div class="desc-icon-box">
	                  <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>
	                </div>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>

	      <div class="padding-top-6x padding-bottom-6x section-background">
	        <div class="container">	    
							<div class="shortcode_title title-center title-decoration-bottom-center" style="margin-bottom:30px; margin-top:30px;">
							<h3 class="title_primary" style="color:#fff;">MOST RECOMMENDED TOURS</h3><span class="line_after_title"></span>
						</div>
						<div class="text-center" style="padding:20px">
								<div class="wrapper-tours-slider wrapper-tours-type-slider whitePointer">
									<div class="tours-type-slider owl-carousel owl-theme"  data-dots="true" data-nav="true" data-responsive='{"0":{"items":1}, "480":{"items":2}, "768":{"items":3} , "1200":{"items":4}}'>
										<div class="item-tour"  v-for="travel in travels" v-bind:key="travel.id">
											<div class="item_border">
												<div class="item_content" >
													<div class="post_images">
														<router-link to="/admin/addPackage">
														<!-- <span class="price">
															<span class="travel_tour-Price-amount amount">$89.00</span>
														</span> -->
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
													<router-link v-bind:to="{ name: 'TourDetail', params: { id: travel.id }}" class="read_more_button">VIEW MORE
														<i class="fa fa-long-arrow-right"></i></router-link>
													<div class="clear"></div>
												</div>
											</div>
										</div>		             								        
									</div>
								</div>					
	            </div>
	          </div>
	        </div>
	      </div>
	      <div class="padding-top-6x padding-bottom-6x bg__shadow section-background">
	        <div class="container">
	          <div class="shortcode_title text-white title-center title-decoration-bottom-center">
	            <div class="title_subtitle">Some statistics about us</div>
	            <h3 class="title_primary">CENTER ACHIEVEMENTS</h3>
	            <span class="line_after_title white-text"></span>
	          </div>
	          <div class="row">
	            <div class="col-sm-3">
	              <div class="stats_counter text-center text-white">
	                <div class="wrapper-icon">
	                  <i class="flaticon-airplane"></i>
	                </div>
	                <div class="stats_counter_number">94,532</div>
	                <div class="stats_counter_title">Customers</div>
	              </div>
	            </div>
	            <div class="col-sm-3">
	              <div class="stats_counter text-center text-white">
	                <div class="wrapper-icon">
	                  <i class="flaticon-island"></i>
	                </div>
	                <div class="stats_counter_number">1021</div>
	                <div class="stats_counter_title">Travel tools</div>
	              </div>
	            </div>
	            <div class="col-sm-3">
	              <div class="stats_counter text-center text-white">
	                <div class="wrapper-icon">
	                  <i class="flaticon-globe"></i>
	                </div>
	                <div class="stats_counter_number">20,096</div>
	                <div class="stats_counter_title">Tours</div>
	              </div>
	            </div>
	            <div class="col-sm-3">
	              <div class="stats_counter text-center text-white">
	                <div class="wrapper-icon">
	                  <i class="flaticon-people"></i>
	                </div>
	                <div class="stats_counter_number">12</div>
	                <div class="stats_counter_title">Tour types</div>
	              </div>
	            </div>
	          </div>	       
	        </div>
	      </div>
	      <div class="section-white padding-top-6x padding-bottom-6x">
	        <div class="container">
	          <div class="row">
	            <div class="col-sm-4">
	              <div class="shortcode_title title-center title-decoration-bottom-center">
	                <h2 class="title_primary">Tours Reviews</h2>
	                <span class="line_after_title"></span>
	              </div>
	              <div class="shortcode-tour-reviews wrapper-tours-slider">
	                <div class="tours-type-slider" data-autoplay="true" data-dots="true" data-nav="false" data-responsive='{"0":{"items":1}, "480":{"items":1}, "768":{"items":1}, "992":{"items":1}, "1200":{"items":1}}'>
	                  <div class="tour-reviews-item">
	                    <div class="reviews-item-info">
	                      <img alt="./../images/avata.jpg" class="avatar avatar-95 photo" height="90" width="90">
	                      <div class="reviews-item-info-name">Jessica</div>
	                      <div class="reviews-item-rating">
	                        <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
	                      </div>
	                    </div>
	                    <div class="reviews-item-content">
	                      <h3 class="reviews-item-title">
	                        <a href="#">Canadian Rockies</a>
	                      </h3>
	                      <div class="reviews-item-description">The sightseeing and activities were better than we even thought! I still can’t believe we did so much in such a short time</div>
	                    </div>
	                  </div>
	                  <div class="tour-reviews-item">
	                    <div class="reviews-item-info">
	                      <img alt="" src="./../images/avata.jpg" class="avatar avatar-95 photo" height="90" width="90">
	                      <div class="reviews-item-info-name">Jessica</div>
	                      <div class="reviews-item-rating">
	                        <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
	                      </div>
	                    </div>
	                    <div class="reviews-item-content">
	                      <h3 class="reviews-item-title">
	                        <a href="#">Canadian Rockies</a>
	                      </h3>
	                      <div class="reviews-item-description">The sightseeing and activities were better than we even thought! I still can’t believe we did so much in such a short time</div>
	                    </div>
	                  </div>
	                  <div class="tour-reviews-item">
	                    <div class="reviews-item-info">
	                      <img alt="" src="./../images/avata.jpg" class="avatar avatar-95 photo" height="90" width="90">
	                      <div class="reviews-item-info-name">Jessica</div>
	                      <div class="reviews-item-rating">
	                        <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
	                      </div>
	                    </div>
	                    <div class="reviews-item-content">
	                      <h3 class="reviews-item-title">
	                        <a href="#">Canadian Rockies</a>
	                      </h3>
	                      <div class="reviews-item-description">The sightseeing and activities were better than we even thought! I still can’t believe we did so much in such a short time.</div>
	                    </div>
	                  </div>
	                </div>
	              </div>
	            </div>
	            <div class="col-sm-8">
	              <div class="shortcode_title title-center title-decoration-bottom-center">
	                <h2 class="title_primary">Latest Post</h2>
	                <span class="line_after_title"></span>
	              </div>
	              <div class="row">
									<div class="post_list_content_unit col-sm-6">
										<iframe src="http://www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2FMaranathaTourMongolia&width=600&colorscheme=light&show_faces=false&border_color&stream=true&header=false&height=435" scrolling="yes" style="border:none; overflow:hidden; width:600px; height:430px; background: white; float:left; " allowtransparency="true" frameborder="0"></iframe>
									</div>
									<div class="post_list_content_unit col-sm-6">
										<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FMaranathaTourMongolia%2Fposts%2F2063980017177502&width=500" width="500" height="430" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
									</div>
	                <!-- <div class="post_list_content_unit col-sm-6">
	                  <div class="feature-image">
	                    <a href="#" class="entry-thumbnail">
	                      <img width="370" height="260" src="./../images/blog/201H.jpg" alt="">
	                    </a>
	                  </div>
	                  <div class="post-list-content">
	                    <div class="post_list_inner_content_unit">
	                      <h3 class="post_list_title">
	                        <a href="single.html" rel="bookmark">Love advice from experts</a>
	                      </h3>
	                      <div class="wrapper-meta">
	                        <div class="date-time">September 6, 2016</div>
	                        <div class="post_list_cats">
	                          <a href="#" rel="category tag">Technology</a>
	                        </div>
	                      </div>
	                      <div class="post_list_item_excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur</div>
	                    </div>
	                  </div>
	                </div> -->
	                <!-- <div class="post_list_content_unit col-sm-6">
	                  <div class="feature-image">
	                    <a href="#" class="entry-thumbnail">
	                      <img width="370" height="260" src="./../images/blog/86H.jpg" alt="">
	                    </a>
	                  </div>
	                  <div class="post-list-content">
	                    <div class="post_list_inner_content_unit">
	                      <h3 class="post_list_title">
	                        <a href="single.html" rel="bookmark">The perfect summer body</a>
	                      </h3>
	                      <div class="wrapper-meta">
	                        <div class="date-time">September 6, 2016</div>
	                        <div class="post_list_cats">
	                          <a href="#" rel="category tag">Technology</a>
	                        </div>
	                      </div>
	                      <div class="post_list_item_excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur</div>
	                    </div>
	                  </div>
	                </div> -->
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>
	    </div>
	  
   
   
</template>
<script>
	import Vue from 'vue'
	import db from './../components/firebaseInit'		
	export default{
		name:'Home',
		data () {
			return {
					id:'',
					travels: [],  
					types:[],
					title:'',
					titleSearch:'',
					description:'',
					duration:'',
					typeSearch:0,
					typeId:0,
					typeName:''          
					}        
			},
			
			created () {
					db.collection('travel').limit(8).get().then((querySnapshot) => {                
							querySnapshot.forEach((doc) => {
							const data = {
									'id':doc.id,
									'title': doc.data().Title,
									'description': doc.data().Description,
									'duration': doc.data().Duration                   
							}
							this.travels.push(data)
							})
					});	
					 db.collection('tourType').get().then((querySnapshot) => {                
							querySnapshot.forEach((doc) => {
							const data = {
									'typeId': doc.data().TypeId,
									'typeName': doc.data().TypeName                                       
							}
							this.types.push(data)
							})
					});						
			},
			methods:{			
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
				},
			
			
	}
</script>