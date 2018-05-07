<template>
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
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'uploadImage',
    data(){
        return{}
    }
}
</script>
>