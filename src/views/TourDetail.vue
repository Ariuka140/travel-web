<template>
    <div class="single-product travel_tour-page travel_tour">
        <div class="site wrapper-content">
            <div class="top_site_main" style="background-image:url(images/banner/top-heading.jpg);">
                <div class="banner-wrapper container article_heading">
                    <div class="breadcrumbs-wrapper">
                        <ul class="phys-breadcrumb">
                            <li><a href="index.html" class="home">Home</a></li>
                            <li><a href="blog.html">Tours</a></li>                   
                        </ul>
                    </div>
                    <h2 class="heading_primary">Nomadic</h2></div>
            </div>
            <section class="content-area single-woo-tour">
                <div class="container">
                    <div class="tb_single_tour product" id="travel">
                        <div class="top_content_single row">
                            <div class="images images_single_left">
                                <div class="title-single">
                                    <div class="title">
                                        <h1>{{title}}</h1>
                                    </div>
                                    <div class="tour_code">
                                        <strong>Code: </strong>{{id}}
                                    </div>
                                </div>
                                <div class="tour_after_title">
                                    <div class="meta_date">
                                        <span>{{duration}} days</span>
                                    </div>
                                    <div class="meta_values">
                                        <span>Category:</span>
                                        <div class="value">
                                            <a rel="tag">{{typeName}}</a>                                           
                                        </div>
                                    </div>
                                    <div class="tour-share">
                                        <ul class="share-social">
                                            <li>
                                                <a target="_blank" class="facebook" href="#"><i class="fa fa-facebook"></i></a>
                                            </li>
                                            <li>
                                                <a target="_blank" class="twitter" href="#"><i class="fa fa-twitter"></i></a>
                                            </li>
                                            <li>
                                                <a target="_blank" class="pinterest" href="#"><i class="fa fa-pinterest"></i></a>
                                            </li>
                                            <li>
                                                <a target="_blank" class="googleplus" href="#"><i class="fa fa-google"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="slider" class="flexslider">
                                    <ul class="slides">
                                        <li>
                                            <a href="images/tour/tour-1.jpg" class="swipebox" title=""><img width="950" height="700" src="images/tour/tour-1.jpg" class="attachment-shop_single size-shop_single wp-post-image" alt="" title="" draggable="false"></a>
                                        </li>
                                        <li>
                                            <a href="images/tour/tour-2.jpg" class="swipebox" title=""><img width="950" height="700" src="images/tour/tour-2.jpg" class="attachment-shop_single size-shop_single wp-post-image" alt="" title="" draggable="false"></a>
                                        </li>
                                        <li>
                                            <a href="images/tour/tour-3.jpg" class="swipebox" title=""><img width="950" height="700" src="images/tour/tour-3.jpg" class="attachment-shop_single size-shop_single wp-post-image" alt="" title="" draggable="false"></a>
                                        </li>
                                        <li>
                                            <a href="images/tour/tour-4.jpg" class="swipebox" title=""><img width="950" height="700" src="images/tour/tour-4.jpg" class="attachment-shop_single size-shop_single wp-post-image" alt="" title="" draggable="false"></a>
                                        </li>
                                        <li>
                                            <a href="images/tour/tour-5.jpg" class="swipebox" title=""><img width="950" height="700" src="images/tour/tour-5.jpg" class="attachment-shop_single size-shop_single wp-post-image" alt="" title="" draggable="false"></a>
                                        </li>
                                        <li>
                                            <a href="images/tour/tour-6.jpg" class="swipebox" title=""><img width="950" height="700" src="images/tour/tour-6.jpg" class="attachment-shop_single size-shop_single wp-post-image" alt="" title="" draggable="false"></a>
                                        </li>
                                    </ul>
                                </div>
                                <div id="carousel" class="flexslider thumbnail_product">
                                    <ul class="slides">
                                        <li>
                                            <img width="150" height="100" src="images/tour/tour-1.jpg" class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" alt="" title="" draggable="false">
                                        </li>
                                        <li>
                                            <img width="150" height="100" src="images/tour/tour-2.jpg" class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" alt="" title="" draggable="false">
                                        </li>
                                        <li>
                                            <img width="150" height="100" src="images/tour/tour-3.jpg" class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" alt="" title="" draggable="false">
                                        </li>
                                        <li>
                                            <img width="150" height="100" src="images/tour/tour-4.jpg" class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" alt="" title="" draggable="false">
                                        </li>
                                        <li>
                                            <img width="150" height="100" src="images/tour/tour-5.jpg" class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" alt="" title="" draggable="false">
                                        </li>
                                        <li>
                                            <img width="150" height="100" src="images/tour/tour-6.jpg" class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" alt="" title="" draggable="false">
                                        </li>
                                    </ul>
                                </div>
                                <div class="clear"></div>
                                <div class="single-tour-tabs wc-tabs-wrapper">
                                    <ul class="tabs wc-tabs" role="tablist">
                                        <li class="description_tab active" role="presentation">
                                            <a href="#tab-description" role="tab" data-toggle="tab">Description</a>
                                        </li>
                                        <!--<li class="itinerary_tab_tab" role="presentation">
                                            <a href="#tab-itinerary_tab" role="tab" data-toggle="tab">Itinerary</a>
                                        </li>
                                        <li class="location_tab_tab" role="presentation">
                                            <a href="#tab-location_tab" role="tab" data-toggle="tab">Location</a>
                                        </li>-->
                                        <li class="reviews_tab" role="presentation">
                                            <a href="#tab-reviews" role="tab" data-toggle="tab">Reviews (1)</a>
                                        </li>
                                    </ul>
                                    <div class="tab-content">
                                        <div role="tabpanel" class="tab-pane single-tour-tabs-panel single-tour-tabs-panel--description panel entry-content wc-tab active" id="tab-description">
                                            <h2>Travel Description</h2>
                                            <p>{{description}}</p>                                   
                                          </div>
                                        <div role="tabpanel" class="tab-pane single-tour-tabs-panel single-tour-tabs-panel--itinerary_tab panel entry-content wc-tab" id="tab-itinerary_tab">
                                            <div class="interary-item">
                                                <p><span class="icon-left">1</span></p>
                                                <div class="item_content">
                                                    <h2><strong>Day 1: Departure</strong></h2>
                                                    <p>Ornare proin neque tempus cubilia cubilia blandit netus.<br>
                                                        Maecenas massa. Fermentum.</p>
                                                    <ul>
                                                        <li>Pretium vitae tempus sem enim enim.</li>
                                                        <li>Tempus, leo, taciti augue aliquam hendrerit.</li>
                                                        <li>Accumsan pharetra eros justo augue posuere felis elit cras montes fames.</li>
                                                        <li>Vulputate dictumst egestas etiam dictum varius.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="interary-item">
                                                <p><span class="icon-left">2</span></p>
                                                <div class="item_content">
                                                    <h2><strong>Day 2</strong></h2>
                                                    <p>Tortor elementum egestas metus potenti habitasse tempus natoque senectus commodo rutrum quisque fermentum. Nisi velit primis dapibus odio consequat facilisi sollicitudin porta nulla tellus sagittis platea tempor sed parturient convallis consectetuer Vulputate curae; pharetra.</p>
                                                </div>
                                            </div>
                                            <div class="interary-item">
                                                <p><span class="icon-left">3</span></p>
                                                <div class="item_content">
                                                    <h2><strong>Day 3</strong></h2>
                                                    <p>Fusce sagittis viverra lorem proin porttitor conubia risus vivamus. Mollis. Luctus curabitur porta nibh penatibus aliquet nec conubia magnis semper, sem feugiat scelerisque molestie. Nibh proin dapibus phasellus lacus. Facilisi.</p>
                                                </div>
                                            </div>
                                            <div class="interary-item">
                                                <p><span class="icon-left">4</span></p>
                                                <div class="item_content">
                                                    <h2><strong>Day 4</strong></h2>
                                                    <p>Pretium consequat, facilisis sem in malesuada sodales et ipsum proin eleifend tincidunt, urna morbi metus quisque. Lacinia habitasse ridiculus sapien platea a cursus hendrerit tempor facilisi orci at tempor, senectus.</p>
                                                </div>
                                            </div>
                                            <div class="interary-item">
                                                <p><span class="icon-left">5</span></p>
                                                <div class="item_content">
                                                    <h2><strong>Day 5</strong></h2>
                                                    <p>Egestas maecenas hac nullam integer at. Lacinia habitasse ridiculus sapien platea a cursus hendrerit tempor facilisi orci at tempor, senectus.</p>
                                                </div>
                                            </div>
                                            <div class="interary-item">
                                                <p><span class="icon-left">6</span></p>
                                                <div class="item_content">
                                                    <h2><strong>Day 6: Return</strong></h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div role="tabpanel" class="tab-pane single-tour-tabs-panel single-tour-tabs-panel--location_tab panel entry-content wc-tab" id="tab-location_tab">
                                            <div class="wrapper-gmap">
                                                <div id="googleMapCanvas" class="google-map" data-lat="50.893577" data-long="-1.393483" data-address="European Way, Southampton, United Kingdom"></div>
                                            </div>
                                        </div>
                                        <div role="tabpanel" class="tab-pane single-tour-tabs-panel single-tour-tabs-panel--reviews panel entry-content wc-tab" id="tab-reviews">
                                            <div id="reviews" class="travel_tour-Reviews">
                                                <div id="comments">
                                                    <h2 class="travel_tour-Reviews-title">1 review for
                                                        <span>Kiwiana Panorama</span></h2>
                                                    <ol class="commentlist">
                                                        <li itemscope="" itemtype="http://schema.org/Review" class="comment byuser comment-author-physcode bypostauthor even thread-even depth-1" id="li-comment-62">
                                                            <div id="comment-62" class="comment_container">
                                                                <img alt="" src="images/avata.jpg" class="avatar avatar-60 photo" height="60" width="60">
                                                                <div class="comment-text">
                                                                    <div class="star-rating" title="Rated 4 out of 5">
                                                                        <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
                                                                    </div>
                                                                    <p class="meta">
                                                                        <strong>physcode</strong> –
                                                                        <time datetime="2017-01-24T03:54:04+00:00">January 24, 2017</time>
                                                                        :
                                                                    </p>
                                                                    <div class="description">
                                                                        <p>Mattis interdum nunc massa. Velit. Nonummy penatibus luctus</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ol>
                                                </div>
                                                <div id="review_form_wrapper">
                                                    <div id="review_form">
                                                        <div id="respond" class="comment-respond">
                                                            <h3 id="reply-title" class="comment-reply-title">Add a review</h3>
                                                            <form action="#" method="post" id="commentform" class="comment-form" novalidate="">
                                                                <p class="comment-notes">
                                                                    <span id="email-notes">Your email address will not be published.</span> Required fields are marked
                                                                    <span class="required">*</span></p>
                                                                <p class="comment-form-author"><label for="author">Name
                                                                    <span class="required">*</span></label>
                                                                    <input id="author" name="author" type="text" value="" size="30" required="">
                                                                </p>
                                                                <p class="comment-form-email"><label for="email">Email
                                                                    <span class="required">*</span></label>
                                                                    <input id="email" name="email" type="email" value="" size="30" required="">
                                                                </p>
                                                                <p class="comment-form-rating">
                                                                    <label>Your Rating</label>
                                                                </p>
                                                                <p class="stars">
                                                                    <span>
                                                                        <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
                                                                    </span>
                                                                </p>

                                                                <p class="comment-form-comment">
                                                                    <label for="comment">Your Review
                                                                        <span class="required">*</span></label><textarea id="comment" name="comment" cols="45" rows="8" required=""></textarea>
                                                                </p>
                                                                <p class="form-submit">
                                                                    <input name="submit" type="submit" id="submit" class="submit" value="Submit">
                                                                </p></form>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="clear"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="related tours">
                                    <h2>Related Tours</h2>
                                    <ul class="tours products wrapper-tours-slider">
                                        <li class="item-tour col-md-4 col-sm-6 product">
                                            <div class="item_border item-product">
                                                <div class="post_images">
                                                    <a href="single-tour.html">
                                                        <span class="price">$93.00</span>
                                                        <img width="430" height="305" src="images/tour/430x305/tour-1.jpg" alt="Discover Brazil" title="Discover Brazil">
                                                    </a>
                                                    <div class="group-icon">
                                                        <a href="tours.html" data-toggle="tooltip" data-placement="top" title="" class="frist" data-original-title="Escorted Tour"><i class="flaticon-airplane-4"></i></a>
                                                        <a href="tours.html" data-toggle="tooltip" data-placement="top" title="" data-original-title="Rail Tour"><i class="flaticon-cart-1"></i></a>
                                                    </div>
                                                </div>
                                                <div class="wrapper_content">
                                                    <div class="post_title"><h4>
                                                        <a href="single-tour.html" rel="bookmark">Discover Brazil</a>
                                                    </h4></div>
                                                    <span class="post_date">5 DAYS 4 NIGHTS</span>
                                                    <div class="description">
                                                        <p>Aliquam lacus nisl, viverra convallis sit amet&nbsp;penatibus nunc&nbsp;luctus</p>
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
                                                    <a rel="nofollow" href="single-tour.html" class="button product_type_tour_phys add_to_cart_button">Read more</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="item-tour col-md-4 col-sm-6 product">
                                            <div class="item_border item-product">
                                                <div class="post_images">
                                                    <a href="single-tour.html">
                                                <span class="price"><del>$87.00</del>
                                                    <ins>$82.00</ins>
                                                </span>
                                                        <span class="onsale">Sale!</span>
                                                        <img width="430" height="305" src="images/tour/430x305/tour-2.jpg" alt="Discover Brazil" title="Discover Brazil">
                                                    </a>
                                                    <div class="group-icon">
                                                        <a href="tours.html" data-toggle="tooltip" data-placement="top" title="" class="frist" data-original-title="River Cruise"><i class="flaticon-transport-2"></i></a>
                                                        <a href="tours.html" data-toggle="tooltip" data-placement="top" title="" data-original-title="Wildlife"><i class="flaticon-island"></i></a>
                                                    </div>
                                                </div>
                                                <div class="wrapper_content">
                                                    <div class="post_title"><h4>
                                                        <a href="single-tour.html" rel="bookmark">Kiwiana Panorama</a>
                                                    </h4></div>
                                                    <span class="post_date">5 DAYS 4 NIGHTS</span>
                                                    <div class="description">
                                                        <p>Aliquam lacus nisl, viverra convallis sit amet&nbsp;penatibus nunc&nbsp;luctus</p>
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
                                                    <a rel="nofollow" href="single-tour.html" class="button product_type_tour_phys add_to_cart_button">Read more</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="item-tour col-md-4 col-sm-6 product">
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
                                                        <a href="single-tour.html" rel="bookmark">Anchorage to Quito</a>
                                                    </h4></div>
                                                    <span class="post_date">5 DAYS 4 NIGHTS</span>
                                                    <div class="description">
                                                        <p>Aliquam lacus nisl, viverra convallis sit amet&nbsp;penatibus nunc&nbsp;luctus</p>
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
                                                    <a rel="nofollow" href="single-tour.html" class="button product_type_tour_phys add_to_cart_button">Read more</a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="summary entry-summary description_single">
                                <div class="affix-sidebar">
                                    <div class="entry-content-tour">
                                        <p class="price">
                                            <span class="text">Price:</span><span class="travel_tour-Price-amount amount">$93.00</span>
                                        </p>
                                        <div class="clear"></div>  
                                                                              
                                       <div class="custom_from">
                                           <div class="form-block__title">
                                            <h4>TELL US</h4>
                                            </div>
                                            <div role="form" class="wpcf7" lang="en-US" dir="ltr">
                                                <div class="screen-reader-response"></div>
                                                <form action="#" method="post" class="wpcf7-form" novalidate="novalidate">

                                                    <p>Fill up the form below to tell us what you're looking for</p>
                                                    <p>
                                                        <span class="wpcf7-form-control-wrap your-name">
                                                            <input type="text" name="your-name" value="" size="40" class="wpcf7-form-control" aria-invalid="false" placeholder="Your name*">
                                                        </span>
                                                    </p>
                                                    <p>
                                                        <span class="wpcf7-form-control-wrap your-email">
                                                            <input type="email" name="your-email" value="" size="40" class="wpcf7-form-control" aria-invalid="false" placeholder="Email*">
                                                        </span>
                                                    </p>
                                                    <p>
                                                        <span class="wpcf7-form-control-wrap your-message">
                                                            <textarea name="your-message" cols="40" rows="10" class="wpcf7-form-control" aria-invalid="false" placeholder="Message"></textarea>
                                                        </span>
                                                    </p>
                                                    <p>
                                                        <input type="submit" value="Send Enquiry" class="wpcf7-form-control wpcf7-submit"><span class="ajax-loader"></span>
                                                    </p>
                                                </form>
                                            </div>
                                        </div>
                                    </div>                                   
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
    name: 'TourDetail',
    data () {
        return {         
            title:'',
            typeId : '',
            typeName:'',
            id:'',            
            description:'',
            duration:''          
            }        
        },    
    created(){  
        db.collection('travel').where('Id', '==', this.$route.params.id).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {            
                this.id = doc.data().Id
                this.title = doc.data().Title
                this.description = doc.data().Description
                this.duration = doc.data().Duration  
                this.typeId = doc.data().Type   
            })
            db.collection('tourType').where('TypeId', '==', this.typeId).get().then((querySnapshot) => {               
                querySnapshot.forEach((doc) => {                 
                    this.typeName = doc.data().TypeName                 
                })
            });
        }); 	
    },
    watch: {
    '$route': 'fetchData'
    }  
}
</script>


