
<template>     
    <div class="content container mt-3" style="width:1100px;float:none">    
          <form v-on:submit.prevent="update" class="formStyle">
                <div class="formLabel">
                    <h4>Edit tour</h4>
                </div>         
                <div class="md-form mb-5">
                    <i class="fa fa-tag prefix grey-text"></i>
                    <input type="text" id="form34" class="form-control validate" v-model="title" required>
                    <label for="form34" class="active">Title</label>
                </div>
                <div class="row">
                    <div class="md-form col-md-11">
                        <i class="fa fa-calendar prefix grey-text"></i>                           
                            <input type="number" id="form29"  class="form-control validate" v-model="duration" required>
                            
                        <label style="margin-left: 4.3rem;" for="form29" class="active">Duration</label>
                    </div>
                    <span class="col-1" style="padding-left: 0px;margin-top: 33px;display: block;" >days</span>
                </div>
               <div class="md-form mb-5">
                    <i class="fa fa-tag prefix grey-text"></i>
                    <select class="form-control validate" id="type" v-model="type">                           
                        <option v-for="type in types" v-bind:value="type.typeId">{{type.typeName}}</option>                 
                    </select>  
                      <label for="type" class="active">Type</label>               
                </div>
                <div class="md-form">
                    <i class="fa fa-info-circle prefix grey-text"></i>
                    <textarea type="text" id="form8" class="md-textarea form-control validate" required v-model="description"></textarea>
                    <label for="form8" class="active">Description</label>
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
                    <div class="md-form" style="text-align:center">                 
                        <button type="submit" class="btn btn-warning btn-rounded mb-4">
                         <i class="fa fa-upload" style="margin-right:5px;"/>Update</button>
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
    import axios from './../assets/js/axios.min.js' 
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
    var ids = [];
    //const BASE_URL = 'http://localhost:8080';
    export default{
        name:'editTour',
        data(){
            return{
                package: [], 
                ids:[],
                id:'',          
                title: "",
                description:'',
                duration:'',
                type:'', 
                typeId:0,
                typeName:'',
                types:[],
                selectedFile:null           
            }

        }, 
        created(){
            db.collection('tourType').get().then((querySnapshot) => {               
                querySnapshot.forEach((doc) => {  
                    const data = {
                        'typeId' : doc.data().TypeId,
                        'typeName' : doc.data().TypeName   
                    }               
                    this.types.push(data)         
                })     
            });

            const vm = this
            
            db.collection('travel').doc(this.$route.params.id).get()
            .then(function(doc) {
                if (doc.exists) {
                    console.log("Document data:", doc.data())
                    vm.title = doc.data().Title
                    vm.description = doc.data().Description
                    vm.duration = doc.data().Duration  
                    vm.typeId = doc.data().Type
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
        },
        watch: {
        '$route': 'fetchData'
        },	           
        methods:{            
            update(){
                const vm = this

                db.collection('travel').doc(this.$route.params.id).set({
                    Title: this.title,
                    Duration: this.duration,
                    Description: this.description,
                    Type: this.typeId
                }).then(() => {
                    alert("success") 
                    vm.$router.push('/adminDashboard')
                });        
            },        
            detectFiles(event){
                this.selectedFile=event.target.file[0];                 
            }              
        }    
                    
    }
</script>