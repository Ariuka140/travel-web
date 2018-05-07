 <template>
    <div class="content container mt-3" style="width:1100px;float:none">        
        <div class="text-center" >
             <div class="wrapper-tours-slider wrapper-tours-type-slider">
	            <div class="tours-type-slider list_content" data-dots="true" data-nav="true"  data-responsive='{"0":{"items":1}, "480":{"items":2}, "768":{"items":2}, "992":{"items":3}, "1200":{"items":4}}'>
	              <div class="item-tour">
	                <div class="item_border">
	                  <div class="item_content" v-for="travel in travels" v-bind:key="travel.id">
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
	                    <a href="single-tour.html" class="read_more_button">VIEW MORE
	                      <i class="fa fa-long-arrow-right"></i></a>
	                    <div class="clear"></div>
	                  </div>
	                </div>
	              </div>	          
	            </div>
	          </div>
            <router-link to="/admin/addPackage" class="btn btn-default btn-rounded mb-4">Add travel</router-link>
        </div>
    </div>
</template> 
<style>
    .post_date{
        text-transform: uppercase;
    }
</style>  
<script>
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
            })
        }  
    }
</script>
