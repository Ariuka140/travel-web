
<template>     
    <div class="content container mt-3" style="width:1100px;float:none">    
          <form v-on:submit.prevent="insert" class="formStyle">
                <div class="formLabel">
                    <h4>Add travel</h4>
                </div>         
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
                        </div>
                    </div>
                </form>
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

    //import * as axios from 'axios';

    const BASE_URL = 'http://localhost:8080';

    /*function upload(formData) {
        const url = `${BASE_URL}/images/upload  `;
        return axios.post(url, formData)
            // get data
            .then(x => x.data)
            // add url field
            .then(x => x.map(img => Object.assign({},
                img, { url: `${BASE_URL}/images/${img.id}` })));
    }*/
    export default{
        name:'addPackage',
        data(){
            return{
            package: [], 
            ids:[],
            id:'',          
            title:'',
            description:'',
            duration:'', 
            selectedFile:FileList           
            }

        },              
        methods:{            
            insert(){ 
                db.collection('travel').get().then((querySnapshot) => {                
                    querySnapshot.forEach((doc) => {                    
                    this.ids.push(doc.data().id);                                      
                    });
                });
                id = Math.max.apply(Math,ids); 		              
                console.log('hello')
                db.collection("travel").doc("update").set({Title: this.title,Description:this.description,Duration:this.duration,Id:this.id})
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