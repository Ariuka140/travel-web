<<<<<<< HEAD
<template>      
    <modal id="modalRegisterForm" tabindex="-1" class="fade" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">

                <div class="modal-header text-center">
                    <h4 class="modal-title w-100 font-weight-bold">Add travel</h4>
                    <button  class="close" data-dismiss="modal" aria-label="Close" @click="$router.go(-1)">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body mx-3">
                    <form v-on:submit.prevent="insert">
                    <div class="md-form mb-5">
                        <i class="fa fa-tag prefix grey-text"></i>
                        <input type="text" id="form34" class="form-control validate" v-model="title">
                        <label data-error="wrong" data-success="right" for="form34">Title</label>
                    </div>
                    <div class="row">
                        <div class="md-form col-md-11">
                            <i class="fa fa-calendar prefix grey-text"></i>                           
                                <input type="number" id="form29"  class="form-control validate" v-model="duration">
                                
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
                        <textarea type="text" id="form8" class="md-textarea form-control" v-model="description"></textarea>
                        <label data-error="wrong" data-success="right" for="form8">Description</label>
                    </div>
                        <div class="md-form">
                        
                        <div class="row">  
                            <div class="col-md-1">
                                <i class="fa fa-upload prefix grey-text"></i>   
                            </div>                                
                            <div class="col-md-8 controls" style="padding-left:0px">
                                <div class="entry input-group">                                          
                                    <input type="file" multiple accept=".jpg,.png" id="image" class="file-field form-control"  v-on:change="detectFiles" style="border:none;box-shadow:none;width:74%;padding-top: 3px;">                    
                                    <span>
                                        <button type="button" v-on:click="addImage" class="btn cyan btn-rounded fileBtn"><i class="fa fa-plus pr-2" aria-hidden="true"></i></button>                                                                                                                        
                                    </span>
=======
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
                            <form v-on:submit="insert">
                            <div class="md-form mb-5">
                                <i class="fa fa-tag prefix grey-text"></i>
                                <input type="text" id="form34" class="form-control validate" v-model="title">
                                <label data-error="wrong" data-success="right" for="form34">Title</label>
                            </div>
                            <div class="row">
                                <div class="md-form col-md-11">
                                    <i class="fa fa-calendar prefix grey-text"></i>                           
                                        <input type="number" id="form29"  class="form-control validate" v-model="duration">
                                        
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
                                <textarea type="text" id="form8" class="md-textarea form-control" v-model="description"></textarea>
                                <label data-error="wrong" data-success="right" for="form8">Description</label>
                            </div>
                            <div class="md-form">
                                
                                <div class="row">  
                                    <div class="col-md-1">
                                        <i class="fa fa-upload prefix grey-text"></i>   
                                    </div>                                
                                    <div class="col-md-8 controls" style="padding-left:0px">
                                        <div class="entry input-group">                                          
                                            <input type="file" multiple accept=".jpg,.png" id="image" class="file-field form-control"  v-on:change="detectFiles" style="border:none;box-shadow:none;width:74%;padding-top: 3px;">                    
                                            <span>
                                                <button type="button" v-on:click="addImage" class="btn cyan btn-rounded fileBtn"><i class="fa fa-plus pr-2" aria-hidden="true"></i></button>                                                                                                                        
                                            </span>
                                        </div>
                                    </div>
                                    <button data-toggle="modal" class="btn btn-plus" href="#uploadImage">Upload Image</button>
                                </div>
                            </div>

                            </form>
                        </div>
                        <div class="modal-footer d-flex justify-content-center">
                            <button class="btn btn-info" type="submit"> <i class="fa fa-upload" style="margin-right:5px"></i>Insert</button>
                        </div>
                         <div class="modal fade" id="uploadImage" tabindex="-1" role="dialog" aria-labelledby="Upload image" aria-hidden="false">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header text-center">
                                        <h4 class="modal-title w-100 font-weight-bold">Add travel</h4>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body mx-3">
                                        <input type="file" accept=".jpg,.png" id="image" class="file-field"  style="border:none;box-shadow:none;width:74%;padding-top: 3px;">
                                        <button class="btn btn-upload">Upload image</button>
                                    </div>                        
>>>>>>> 664967fe75af6d8d9a26a2838cf497c3b1e5759d
                                </div>
                            </div>
                        </div>
                    </div>
                            <div class="d-flex justify-content-center">
                            <button class="btn btn-info" type="submit"> <i class="fa fa-upload" style="margin-right:5px"></i>Insert</button>
                        </div>
                    </form>
                </div>
<<<<<<< HEAD
                
            </div>
        </div>       
    </modal>

        
=======
            </div>  
                   
                
            <div class="text-center">
                <a href="" class="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalRegisterForm">Launch Modal Contact Form</a>
            </div> 
        </div>
       </div>
       
>>>>>>> 664967fe75af6d8d9a26a2838cf497c3b1e5759d
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
    .fileBtn{
        border-radius: 50%;
        padding: 1px 5px!important;
        padding-bottom: 0px!important;
        border-width: 0.5px!important;
    }
    .cancelBtn{        
        border-radius: 50%;
        padding: 1px 5px!important;
        padding-bottom: 0px!important;
        border-width: 0.5px!important;    
    }

</style>

<script>
    require('./../assets/css/mdb.min.css')
    import db from './../components/firebaseInit'
    import mdb from './../assets/js/mdb.min.js'

    
    export default{
        name:'addPackage',
        data(){
            return{
            package: [],           
            title:'',
            description:'',
            duration:'', 
            selectedFile:FileList           
            }

        },        
        methods:{
            insert(){                
                console.log('hello')
                db.collection("travel").doc("update").set({Title: this.title,Description:this.description,Duration:this.duration})
                .then(function(event){
                    alert("success")                   
                    $('#modalRegisterForm').modal('hide')                        
                })               
                .catch(error => console.log(error))
            },           
            addImage(event){
                $(document).on('click', '.fileBtn', function(e)
                {
                    e.preventDefault();
                    var controlForm = $('.controls:first'),
                        currentEntry = $(this).parents('.entry:first'),
                        newEntry = $(currentEntry.clone()).appendTo(controlForm);

                    newEntry.find('input').val('');
                    controlForm.find('.entry:not(:last) .fileBtn')
                        .removeClass('fileBtn').addClass('cancelBtn')
                        .removeClass('cyan').addClass('orange')                         
                        .html('<i class="fa fa-minus pr-2" aria-hidden="true"></i>');
                        debugger;
                }).on('click', '.cancelBtn', function(e)
                {
                    if($(this).parents('.entry'))
                        $(this).parents('.entry:first').remove();
                    else
                        $(this).removeClass('cancelBtn').addClass('fileBtn')
                               .removeClass('orange').addClass('cyan')                         
                               .html('<i class="fa fa-plus pr-2" aria-hidden="true"></i>');
                    e.preventDefault();
                    return false;
                });
                },
                detectFiles(event){
                    this.selectedFile=event.target.file;                 
                }
            },
            
                    
                    
    }
</script>