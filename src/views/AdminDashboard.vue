 <template>
    <div class="content container mt-3 travel_tour travel_tour-page" style="width:1100px;float:none">     
		<router-link to="/admin/addTour" class="btn btn-warning btn-rounded mb-4">
			<i class="fa fa-plus" style="margin-right:5px;"/>Add tour
		</router-link>
		<div class="shortcode_title title-center title-decoration-bottom-center" style="margin-bottom:30px; margin-top:30px;">
			<h3 class="title_primary">TOURS</h3><span class="line_after_title"></span>
		</div>
         <div class="row">
			<div class="site-main col-sm-12 alignright">
					<ul class="tours products wrapper-tours-slider">
							<li v-for="tour in tours" v-bind:key="tour.id" class="item-tour col-md-3 col-sm-4 product">
									<div class="item_border item-product">
								<div class="post_images">
									<a href="single-tour.html">
										<img style="width:430px; height:205px;" v-bind:src="tour.path" v-bind:title="tour.title">
									</a>
									<div class="group-icon">
										<router-link v-bind:to="{ name: 'editTour', params: { id: tour.id }}"    data-toggle="tooltip" title="Edit" data-placement="top" class="frist" data-original-title="Escorted Tour"><i class="fa fa-pencil"></i></router-link>
										<a @click="deleteTour(tour.id)" data-toggle="tooltip" title="Delete" data-placement="top" ><i class="fa fa-trash"></i></a>
									</div>
								</div>
								<div class="wrapper_content">
									<div class="post_title"><h4>
										<a href="single-tour.html" rel="bookmark">{{tour.title}}</a>
									</h4></div>
									<span class="post_date">{{tour.duration}}</span>
									<div class="description">
										<p>{{tour.description}}</p>
									</div>
								</div>
								<div class="read_more">
									<div class="item_rating">
										<i class="fa fa-star"></i>
										<i class="fa fa-star"></i>
										<i class="fa fa-star"></i>
										<i class="fa fa-star"></i>
										<i class="fa fa-star-o"></i>
									</div>
									<router-link v-bind:to="{ name: 'TourDetail', params: { id: tour.id }}" class="button product_type_tour_phys add_to_cart_button">Read more</router-link>
								</div>
							</div>							
							</li>                            
					</ul>
					<div class="navigation paging-navigation" role="navigation">
							<ul class="page-numbers">
									<li><span class="page-numbers current">1</span></li>
									<li><a class="page-numbers" href="#">2</a></li>
									<li><a class="next page-numbers" href="#"><i class="fa fa-long-arrow-right"></i></a>
									</li>
							</ul>
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
	import firebase from 'firebase'

	export default {
			name:'adminDashboard',      
			data () {
			return {
					tours: [],  
					title:'',
					id:'',
					description:'',
					duration:''          
					}        
			},
			created () {
					db.collection('travel').get().then((querySnapshot) => {                
							querySnapshot.forEach((doc) => {
							const data = {
								'title': doc.data().title,
								'description': doc.data().description,
								'duration': doc.data().duration,
								'id':doc.id,     
								'path': String(doc.data().paths).split(';')[0]
							}
							this.tours.push(data)
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
				deleteTour (id) {
					if(confirm ('Are you sure?')) {
						const vm = this

						db.collection('travel').doc(id).delete().then(function() {
							console.log("Document successfully deleted!");
							// vm.delete_firebase_images(id)
							
						}).catch(function(error) {
							console.error("Error removing document: ", error);
						});
					}
				},
				delete_firebase_images(foldername){
					const vm = this

					// Get a reference to the storage service, which is used to create references in your storage bucket
					var storage = firebase.storage()

					// Create a storage reference from our storage service
					var storageRef = storage.ref()
					storageRef.child(foldername).delete().then(function(){
						vm.$router.push('/admin')
						alert("SUCCESS DELETE!")
						// // Create a reference to the file to delete
						// var desertRef = storageRef.child('images/desert.jpg');

						// // Delete the file
						// desertRef.delete().then(function() {
						// // File deleted successfully
						// }).catch(function(error) {
						// // Uh-oh, an error occurred!
						// });
					})

				}
			}		
		}
</script>
