
<template>     
    <div class="content container mt-3" style="width:1100px;float:none">    
          <form v-on:submit.prevent="insert" class="formStyle">
                <div class="formLabel">
                    <h4>Add tour</h4>
                </div>         
                <div class="md-form mb-5">
                    <i class="fa fa-tag prefix grey-text"></i>
                    <input type="text" id="form34" class="form-control validate" v-model="title">
                    <label for="form34">Title</label>
                </div>
                <div class="row">
                    <div class="md-form col-md-11">
                        <i class="fa fa-calendar prefix grey-text"></i>                           
                            <input type="number" id="form29"  class="form-control validate" v-model="duration">
                            
                        <label style="margin-left: 4.3rem;" for="form29">Duration</label>
                    </div>
                    <span class="col-1" style="padding-left: 0px;margin-top: 33px;display: block;" >days</span>
                </div>
               <div class="md-form mb-5">
                    <i class="fa fa-tag prefix grey-text"></i>
                    <select class="form-control validate" id="type" v-model="type">     
                        <option v-for="type in types" v-bind:value="type.typeId" v-bind:key="type.typeId">{{type.typeName}}</option>                 
                    </select>  
                      <label for="type" class="active">Type</label>               
                </div>
                <div class="md-form">
                    <i class="fa fa-info-circle prefix grey-text"></i>
                    <textarea type="text" id="form8" class="md-textarea form-control" v-model="description"></textarea>
                    <label for="form8">Description</label>
                </div>
                <div class="md-form">                    
                    <div class="row">  
                        <div class="col-md-1">
                            <i class="fa fa-upload prefix grey-text"></i>   
                        </div>                                
                        <div class="col-md-8 controls" style="padding-left:0px">
                            <div class="entry input-group">                                          
                                <!-- <input type="file" multiple accept=".jpg,.png" id="image" class="file-field form-control"  v-on:change="image_choosed" style="border:none;box-shadow:none;width:74%;padding-top: 3px;">                     -->
                                Files: <input type="file" id="files" name="files" v-on:change="handleFileSelect" multiple accept="image/*"><br/>
                                <!-- <span>
                                    <button type="button" v-on:click="addImage" class="btn cyan btn-rounded fileBtn"><i class="fa fa-plus pr-2" aria-hidden="true"></i></button>                                                                                                                        
                                </span> -->
                                <div style="float:left;" id="selectedFiles"></div>
                            </div>
                        </div>
                    </div>
                </div>  
                <div class="md-form" style="text-align:center">                 
                    <button type="submit" class="btn btn-primary btn-rounded mb-4">
                        <i class="fa fa-save" style="margin-right:5px;"/>Save</button>
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
    import firebase from 'firebase'
		
    //Хэрвээ и-мэйл auth хийх бол
    // firebase.auth().createUserWithEmailAndPassword("email@gmail.com", "pass").catch(function(error) {
    //     // Handle Errors here.
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     // ...
    // });

    var selected_file_list=[]

    export default{
        name:'addTour',
        data(){
            return{
            package: [],           
            title:'',
            description:'',
            duration:'',
            type:'', 
            typeId: 0,
            typeName:'',
            types:[],
            image_paths:[]
            }
        },   
        created () {
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
            generatePushID() {
                // Modeled after base64 web-safe chars, but ordered by ASCII.
                var PUSH_CHARS = '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz';

                // Timestamp of last push, used to prevent local collisions if you push twice in one ms.
                var lastPushTime = 0;

                // We generate 72-bits of randomness which get turned into 12 characters and appended to the
                // timestamp to prevent collisions with other clients.  We store the last characters we
                // generated because in the event of a collision, we'll use those same characters except
                // "incremented" by one.
                var lastRandChars = [];
                var now = new Date().getTime();
                var duplicateTime = (now === lastPushTime);
                lastPushTime = now;

                var timeStampChars = new Array(8);
                for (var i = 7; i >= 0; i--) {
                timeStampChars[i] = PUSH_CHARS.charAt(now % 64);
                // NOTE: Can't use << here because javascript will convert to int and lose the upper bits.
                now = Math.floor(now / 64);
                }
                if (now !== 0) throw new Error('We should have converted the entire timestamp.');

                var id = timeStampChars.join('');

                if (!duplicateTime) {
                for (i = 0; i < 12; i++) {
                    lastRandChars[i] = Math.floor(Math.random() * 64);
                }
                } else {
                // If the timestamp hasn't changed since last push, use the same random number, except incremented by 1.
                for (i = 11; i >= 0 && lastRandChars[i] === 63; i--) {
                    lastRandChars[i] = 0;
                }
                lastRandChars[i]++;
                }
                for (i = 0; i < 12; i++) {
                id += PUSH_CHARS.charAt(lastRandChars[i]);
                }
                if(id.length != 20) throw new Error('Length should be 20.');

                return id;
            },

            insert(){
                const vm = this
                var key=this.generatePushID();
                // upload images then
                if(selected_file_list){
                    for (var i=0; i<selected_file_list.length; i++) {
                        vm.upload_image_firebase(key, selected_file_list[i], i, selected_file_list.length);
                    }
                }
            },

            save_to_db(key){
                
                const vm = this
                let path_string = ''
                vm.image_paths.forEach(function(path){
                    console.log(path)
                    path_string += path + ';'
                });
                
                db.collection('travel').doc(key).set({
                    title: this.title,
                    description: this.description,
                    duration: this.duration,
                    type: this.type,
                    paths: path_string,                    
                })
                .then(function(event){
                    vm.$router.push('/admin/adminDashboard')
                })               
                .catch(error => console.log(error))
            },

            upload_image_firebase(foldername, file, index, total){
                const vm = this
                // Get a reference to the storage service, which is used to create references in your storage bucket
                var storage = firebase.storage();

                // Create a storage reference from our storage service
                var storageRef = storage.ref();

                // Create the file metadata
                var metadata = {
                    contentType: 'image/*'
                };

                // Upload file and metadata to the object 'images/mountains.jpg'
                var uploadTask = storageRef.child(foldername + '/' + file.name).put(file, metadata);

                // Listen for state changes, errors, and completion of the upload.
                uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
                function(snapshot) {
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
                    }
                }, function(error) {
                    // A full list of error codes is available at
                    // https://firebase.google.com/docs/storage/web/handle-errors
                    switch (error.code) {
                        case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        break;

                        case 'storage/canceled':
                        // User canceled the upload
                        break;

                        case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        break;
                    }
                }, function() {
                    // Upload completed successfully, now we can get the download URL
                    uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                        console.log('File available at', downloadURL);
                        vm.image_paths.push(downloadURL)
                        // when all file uploaded.
                        if(index == total - 1){
                            vm.save_to_db(foldername)
                        }
                    });
                });
            },

            handleFileSelect(e) {

                if(!e.target.files || !window.FileReader) return;
                var selDiv = document.getElementById("selectedFiles");
                selDiv.innerHTML = "";
                
                for(var i =0; i < e.target.files.length; i++){
                    selected_file_list.push(e.target.files[i])
                }

                var filesArr = Array.prototype.slice.call(e.target.files);
                filesArr.forEach(function(f) {
                    if(!f.type.match("image.*")) {
                        return;
                    }

                    var reader = new FileReader();
                    reader.onload = function (e) {
                        var html = "<img style='height:180px;' clear=\"left\" src=\"" + e.target.result + "\">";
                        selDiv.innerHTML += html;				
                    }
                    reader.readAsDataURL(f); 
                });
                
            }
        }   
    }
</script>