<template>
<div class="archive travel_tour travel_tour-page">
    <div class="site wrapper-content">
        <div class="top_site_main">
            <div class="banner-wrapper container article_heading">
                <div class="breadcrumbs-wrapper">
                    <ul class="phys-breadcrumb">
                        <li><a href="index.html" class="home">Home</a></li>
                        <li>Tours</li>
                    </ul>
                </div>
                <h1 class="heading_primary">Tours</h1></div>
        </div>
        <section class="content-area">
            <div class="container">
                <div class="row">
                    <div class="site-main col-sm-9 alignright">
                        <ul class="tours products wrapper-tours-slider">
                            <li v-for="travel in travels" v-bind:key="travel.id" class="item-tour col-md-4 col-sm-6 product">
                               	<div class="item_border item-product">
									<div class="post_images">
										<a href="single-tour.html">
											<span class="price">$64.00</span>
											<img width="430" height="305" src="images/tour/430x305/tour-3.jpg" alt="Discover Brazil" title="Discover Brazil">
										</a>
										<div class="group-icon">
											<a href="tours.html" data-toggle="tooltip" data-placement="top" title="" class="frist" data-original-title="Escorted Tour"><i class="flaticon-airplane-4"></i></a>
											<a href="tours.html" data-toggle="tooltip" data-placement="top" title="" data-original-title="River Cruise"><i class="flaticon-transport-2"></i></a>
										</div>
									</div>
									<div class="wrapper_content">
										<div class="post_title"><h4>
											<a href="single-tour.html" rel="bookmark">{{travel.title}}</a>
										</h4></div>
										<span class="post_date">{{travel.duration}}</span>
										<div class="description">
											<p>{{travel.description}}</p>
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
										<router-link v-bind:to="{ name: 'TourDetail', params: { id: travel.id }}" class="button product_type_tour_phys add_to_cart_button">Read more</router-link>
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
                    <div class="widget-area align-left col-sm-3">
                        <div class="search_tour">
                            <div class="form-block block-after-indent">
                                <h3 class="form-block_title">Search Tour</h3>
                                <div class="form-block__description">Find your dream tour today!</div>
                                <form method="get" action="#">
                                    <input type="hidden" name="tour_search" value="1">
                                    <input type="text" placeholder="Search Tour" value="" name="name_tour"  v-model="titleSearch">
                                    <select name="tourtax[tour_phys]" v-model="typeSearch">
                                        <option value="0">Tour Type</option>
                                        <option value="escorted-tour">Escorted Tour</option>
                                        <option value="rail-tour">Rail Tour</option>
                                        <option value="river-cruise">River Cruise</option>
                                        <option value="tour-cruise">Tour &amp; Cruise</option>
                                        <option value="wildlife">Wildlife</option>
                                    </select>
                                    <select name="tourtax[pa_destination]">
                                        <option value="0">Destination</option>
                                        <option value="china">Brazil</option>
                                        <option value="canada">Canada</option>
                                        <option value="cuba">Cuba</option>
                                        <option value="italy">Italy</option>
                                        <option value="philippines">Philippines</option>
                                        <option value="usa">USA</option>
                                    </select>
                                    <select name="tourtax[pa_month]">
                                        <option value="0">Month</option>
                                        <option value="january">January</option>
                                        <option value="february">February</option>
                                        <option value="march">March</option>
                                        <option value="april">April</option>
                                        <option value="may">May</option>
                                        <option value="june">June</option>
                                        <option value="july">July</option>
                                        <option value="august">August</option>
                                        <option value="september">September</option>
                                        <option value="october">October</option>
                                        <option value="november">November</option>
                                        <option value="december">December</option>
                                    </select>
                                    <button type="button" @click="search">Find Tours</button>
                                </form>
                            </div>
                        </div>                       
                    </div>
                </div>
            </div>
        </section>
    </div>      
</div>
</template>
<script>
    import db from './../components/firebaseInit'	
    import Vue from 'vue'
    export default {
        name: 'Tours',
        data () {
        return {
            travels: [],
            key:'',  
            typeSearch :'',
            titleSearch :'',
            title:'',
            description:'',
            duration:'',
            id: 0
            }        
        },
        beforeRouteEnter (to, from, next) {      
            console.log(to.params);
            next(vm => {
                vm.titleSearch = to.params.titleSearch
                vm.typeSearch = to.params.typeSearch                   
            })     	
        },
        created () {
            console.log("2: ")
            console.log(this.$route.params.titleSearch)
            
            db.collection('travel').get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const data = {
                        'id': doc.data().Id,                    
                        'title': doc.data().Title,
                        'description': doc.data().Description,
                        'duration': doc.data().Duration                   
                    }
                    this.travels.push(data)
                })    
                if(this.$route.params){
                    this.travels = this.searchFromArray(this.travels, this.$route.params.titleSearch)
                }               
            }); 
        },
        watch: {
        '$route': 'fetchData'
        },
        methods: {
            searchFromArray(travels, searchValue){
                var filtered_travels = jQuery.grep(travels, function(value) {
                    return value.title.toUpperCase().indexOf(searchValue.toUpperCase()) >= 0;
                });
                return filtered_travels;
            },
            search(){
                console.log("3: ") 
                console.log(this.titleSearch)
                this.travels = []
                db.collection('travel').get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        const data = {
                            'id': doc.data().Id,                    
                            'title': doc.data().Title,
                            'description': doc.data().Description,
                            'duration': doc.data().Duration                   
                        }
                        this.travels.push(data)
                    })
                    if(this.titleSearch){
                        this.travels = this.searchFromArray(this.travels, this.titleSearch)
                    }                 
                });
            }
        }
    }
</script>
