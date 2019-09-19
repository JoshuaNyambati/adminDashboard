<template>
       
            <div class="col-md-6 shadow mt-3" style="margin:auto;">
            <form @submit.prevent="addRoom">
                <div class="form-group">
                    <label for="">Car Make</label>
                    <input class="form-control" v-model="room.title">
                </div>
                <div class="form-group">
                    <label for="">Car Model</label>
                    <textarea class="form-control" v-model="room.description"></textarea>
                </div>
                <!-- <div class="form-group">
                    <label for="" class="label-control">Category</label>
                    <select name="category" id="category" class="form-control" v-model="room.category_id">
                        <option :value="category._id" v-for="(category, index) in this.$store.getters.rooms" :key="index">{{ category.title }}</option>
                    </select>
                </div> -->
                <div class="form-group">
                    <label for="">Number of passengers</label>
                    <input class="form-control" v-model="room.no_of_people"/>
                </div>
                <div class="form-group">
                    <label for="">Cost </label>
                    <input class="form-control" v-model="room.cost"/>
                </div>
                <div class="form-group">
                    <div class="" id="preview">
                        <img v-if="url" :src="url" alt="image">
                    </div>
                    <div class="row">
                        <input type="file" name="file" ref="myFileRef" @change="onFileChange">
                    </div>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-sm btn-dark">Add car</button>
                </div>
            </form>
    
    </div>
    
</template>
<script>
import axios from "axios"
export default {
    name:'addroom',
    data(){
        return {
            file:'',
            url:null,
            room:{
                title:'',
                description:'',
                cost:'',
                category_id:'',
                no_of_people:''
            },
        }
    },
    methods:{
        async addRoom(){
            this.file = this.$refs.myFileRef.files[0];

            if(!this.file){
                console.error("no file selected")
                return;
            }

            let formData = new FormData()

            formData.append('file',this.file)
            formData.append('body',JSON.stringify(this.room))
            return axios.post(
                'https://hotelsjunior.herokuapp.com/api/v1/saveRooms',
                formData,
                {
                    headers: {
                        'Content-Type':'multipart/form-data'
                    }
                }
            ).then(response =>{
                console.info(response)
            })
            .catch(error =>{req.file
                console.error("file upload faild",error)
            });
        },

        

        onFileChange(e){
        const file = e.target.files[0];
        let formData = new FormData()
        this.url = URL.createObjectURL(file);
        }

    }
}
</script>
<style>
    .img img{
        height:200px;
        width:190px;
    }
</style>
