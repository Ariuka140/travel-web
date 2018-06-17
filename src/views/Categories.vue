<template>
    <div class="content container mt-3 travel_tour travel_tour-page" style="width:1100px;float:none">
        <button type="button" v-on:click="index = 1" class="btn btn-warning btn-rounded mb-4">
            <i class="fa fa-upload" style="margin-right:5px;"/>Add categories
        </button>
        <div class="newContain" style="margin-top:10px">
            <table class="table">
                <thead>
                    <tr>
                        <th>Name</th>    
                        <th>Image</th>  
                        <th style="width:30px"></th>
                        <th style="width:30px"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="type in types" v-bind:key="type.id">
                        <td>{{type.name}}                        
                        </td>  
                        <td>
                            <a><i class="fa"/></a>
                        </td>          
                        <td style="width:30px;text-align:center"> 
                            <button aria-placeholder="edit" class="icontBtn">
                                <i class="fa fa-pencil" style="color: #ff8800;font-size: 16px;"></i>   
                            </button>      
                        </td> 
                        <td style="width:30px;text-align:center">
                            <button type="button" aria-placeholder="delete" class="icontBtn">   
                                <i class="fa fa-trash" style="color: #fd3a44;font-size: 16px;"></i>  
                            </button>             
                        </td>                
                                    
                    </tr>
                    <tr v-if="index === 1">
                        <td><input type="text" class="form-control" required v-model="newName" /></td>
                        <td style="text-align:center;width:200px;vertical-align:middle">
                            <a data-toggle="modal" data-target="#myModal"  style="text-decoration:underline;color:#404040; font-size:15px">Choose image</a>
                            <i class="fa"></i></td>
                        <td style="width:30px;text-align:center">
                            <button type="button" v-on:click="addType" aria-placeholder="Save" class="icontBtn">
                                <i class="fa fa-check" style="color: #5aa35a;font-size: 16px;"></i>
                            </button>
                        </td>                        
                        <td style="width:30px"></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="modal fade" id="myModal" role="dialog">
            <div class="modal-dialog"> 
                <div class="modal-content">
                    <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Image of category</h4>
                    </div>
                    <div class="modal-body">
                        <div class="row typeIcon" id="images">
                            <div class="col-md-3">
                                <a><i class="flaticon-boating-sign"></i></a>
                            </div>
                             <div class="col-md-3">
                                <a><i class="flaticon-bicycle-rider"></i></a>
                            </div>
                             <div class="col-md-3">
                                <a><i class="flaticon-climbing-with-rope"></i></a>
                            </div>
                             <div class="col-md-3">
                                <a><i class="flaticon-hunter-hunting-with-bow-and-arrow"></i></a>
                            </div>
                             <div class="col-md-3">
                                <a><i class="flaticon-wrestling"></i></a>
                            </div>
                             <div class="col-md-3">
                                <a><i class="flaticon-backpacker-hiking"></i></a>
                            </div>
                            <div class="col-md-3">
                                <a><i class="flaticon-camels-race"></i></a>
                            </div>
                            <div class="col-md-3">
                                <a><i class="flaticon-man-riding-a-horse"></i></a>
                            </div>
                        </div>
                    </div>              
                </div>               
            </div>
        </div>
    </div>
    
</template>
<script>  
    import db from './../components/firebaseInit'	
    import Vue from 'vue'    
    export default {
        name:'categories',
        data () {
            return {
                types: [],
                id:0,  
                name :'',
                index : 0,
                newId: 0,
                newName: '',
                listIcon :[]       
            }        
        },
        created () {
            this.listIcon = [
                    'fa-plane',
                    'fa-tour',
                    'fa-horse'
                ]
                debugger
             db.collection('tourType').orderBy("TypeId", "asc").get().then((querySnapshot) => {               
                querySnapshot.forEach((doc) => {
                    
                    console.log("KEY:" + doc.id)
                    const data = {
                        'id' : doc.data().TypeId,
                        'name' : doc.data().TypeName   
                    }               
                    this.types.push(data)  
                    // debugger    
                })
                // debugger
                console.log(this.types.length)
                console.log("[0] : " + this.types[0].id)
                console.log("[1] : " + this.types[1].id)
                console.log("[1 = size] : " + this.types[this.types.length-1].id)
                this.newId = this.types[this.types.length-1].id + 1              
            });
        },
        methods:{
            addType(){
               db.collection('tourType').doc(this.newId).set({
                        TypeId: this.newId,
                        TypeName:this.newName,
                    })
                    .then(function(event){
                        alert("success")    
                        this.$router.push('/categories')
                    })               
                    .catch(error => console.log(error))   
                } 
            }, 
            drawImage(item, index) {               
                var element = $('<div class="col-md-2"><a><i class="fa ' + item +'"></i></a></div>');
                $('#images').append(element)
            }
        
    }
</script>
