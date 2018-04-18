     <template>
        <div class="content mt-3">
        <div class="col-sm-12" id="success" style="display:none">
                      <div class="alert  alert-success alert-dismissible show" role="alert">
                        <span class="badge badge-pill badge-success" style="background:#58b930">Success</span> You successfully read this important alert message.
                          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                          </button>
                      </div>
                  </div>
       <div class="animated">
        <div class="modal fade" id="modalRegisterForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">

                    <div class="modal-header text-center">
                        <h4 class="modal-title w-100 font-weight-bold">Add travel</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body mx-3">
                        <form>
                        <div class="md-form mb-5">
                            <i class="fa fa-tag prefix grey-text"></i>
                            <input type="text" id="form34" class="form-control validate">
                            <label data-error="wrong" data-success="right" for="form34">Title</label>
                        </div>
                        <div class="row">
                            <div class="md-form col-md-11">
                                <i class="fa fa-calendar prefix grey-text"></i>                           
                                    <input type="text" id="form29"  class="form-control validate">
                                    
                                <label data-error="wrong" data-success="right" style="margin-left: 4.3rem;" for="form29">Duration</label>
                            </div>
                            <span class="col-1" style="padding-left: 0px;margin-top: 33px;display: block;" >days</span>
                        </div>
                        <div class="md-form mb-5">
                            <i class="fa fa-info-circle prefix grey-text"></i>
                            <input type="text" id="form32" class="form-control validate">
                            <label data-error="wrong" data-success="right" for="form32"></label>
                        </div>

                        <div class="md-form">
                            <i class="fa fa-info-circle prefix grey-text"></i>
                            <textarea type="text" id="form8" class="md-textarea form-control"></textarea>
                            <label data-error="wrong" data-success="right" for="form8">Description</label>
                        </div>
                         <div class="md-form">
                            <i class="fa fa-upload prefix grey-text"></i>                            
                            <input type="file" id="imageUp" class="file-field form-control" style="border:none;box-shadow:none">                    
                            
                        </div>

                        </form>
                    </div>
                    <div class="modal-footer d-flex justify-content-center">
                        <button class="btn btn-info" type="submit" > <i class="fa fa-upload" style="margin-right:5px"></i>Insert</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="text-center">
            <a href="" class="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalRegisterForm">Launch Modal Contact Form</a>
        </div> 
    </div>
        </div>
        
</template>
<style>
    .md-form label.active{
        transform: translateY(-90%)!important;
    }
    .modal-header .close {
    margin-top: -32px;
    }
    .modal-header {
        border: none;
    }
    .modal-footer{
        border: none
    }
    .md-form .prefix {
        top: 1.2rem;
    }
    .modal-body{
        padding: 15px 35px;
    }
    .btn .fa {
        font-size: 1.3rem;
    }

</style>

<script>
    require('./../assets/css/mdb.min.css')
    import db from './../components/firebaseInit'
    import mdb from './../assets/js/mdb.min'
    
    export default{
        name:'addPackage',
        data(){
            return{
            package: [],
            title:'',
            description:'',
            duration:''
            }

        },
        methods:{
            insert(){
            console.log('hello')
            db.collection('TravelPackage').add({Title: this.title,Description:this.description,Duration:this.duration})
            .then( toastr["info"]("Success added!"))
            .catch(error => console.log(error))
            }
        }
        
        
    }
</script>