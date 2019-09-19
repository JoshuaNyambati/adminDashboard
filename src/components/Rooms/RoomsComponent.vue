<template>
    <div class="container">
        <div class="row">
        <div class="col-md-9">
            <div v-if="this.$store.getters.room_items === '' ">
                    <div class="empty bg-info">
                        <div class="col-md-12">
                             <p class="text-center text-warning" style="padding-top:30%; fontSize:30px">Nothing to show!!</p>
                        </div>
                    </div>
              </div>
            <AddRoom v-if="addroom"/>
            <div class="row mt-3" v-if="!addroom">
              
              <!-- room card -->
              <div v-if="this.$store.getters.room_items !=='' ">
                <div v-if="this.$store.getters.room_items !== undefined">
               <div class="col-md-4 carditems" v-for="(item, index) in this.$store.getters.room_items.rooms" :key="index">
                    <div class="card shadow">
                      
                    <p class="" style="display:none;"> {{ url = "https://hotelsjunior.herokuapp.com/"+item.image }}</p>
                                
                    <img class="card-img-top" :src="url" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">{{item.title}}</h5>
                        <p class="card-text">{{item.description}}</p>
                        <a href="#" class="btn btn-primary">Ksh {{item.cost}}</a>
                    </div>
                    </div>
                </div>
                </div>
              </div>
            <!-- end of room card -->
             
            </div>
            
        </div>
     

         <div class="col-md-3 shadow">
                <h4>Classification</h4>
                <div>
                    <button class="btn btn-sm btn-info m-1" @click="addRoom">Add Car</button>
                     <button class="btn btn-sm btn-warning m-1" @click="addCategory">Clasify Car</button>
                </div>
                <div v-if="addcategory">
                    <form @submit.prevent="addRoomCategory">
                        <div class="form-group">
                            <label for="" class="label-control">Make</label>
                            <input type="text" v-model="category.title" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="" class="label-control">Model</label>
                            <textarea type="text" v-model="category.description" class="form-control"></textarea>
                        </div>
                        <div class="form-group">
                            <button class="btn btn-sm btn-dark" type="submit">Add</button>
                        </div>
                    </form>
                </div>
                 <div>
                    <ul class="list-group">
                        <li class="list-group-item" v-for="(category, index) in rooms" :key="index" @click="select_category(index)">{{category.title}}</li>
                        
                    </ul>
                </div>
        </div>
          
        </div> 
    </div>  
</template>
<style scoped>
 .empty{
        height:400px;
        width:100%;
        margin:auto;
    }
    .carditems{
        min-width: 300px; 
    }
</style>
<script>
import AddRoom from "./AddRoomComponent"
import axios from "axios"
export default {
    name:'rooms',
    components:{
        AddRoom
    },
    data(){
        return {
            addroom:false,
            addcategory:false,
            selected_room_category:{},
            category:{
                title:'',
                description:''
            }
        }
    },
    mounted(){
      this.$store.dispatch('GET_ROOMCATEGORIES').then(
          ()=>{
              this.select_category()
          }
      )
      
    },
    computed:{
        rooms(){
            return this.$store.getters.rooms;
        }
    },
    methods:{
        addRoom(){
            this.addroom = !this.addroom
        },

        addCategory(){
            this.addcategory = !this.addcategory
        },

        addRoomCategory(){
            axios.post("https://hotelsjunior.herokuapp.com/api/v1/saveRoomCategory",this.category)
                .then((response)=>{
                    console.log(response)
                })
        },

        select_category(id){ 
          
          if(id !== ''){
              this.selected_room_category = this.$store.getters.rooms[id]
              this.$store.dispatch('SET_SELECTEDROOMCATEGORY',this.selected_room_category)
          }else if(id === undefined){
              this.selected_room_category = this.$store.getters.rooms[0]
              this.$store.dispatch('SET_SELECTEDROOMCATEGORY',this.selected_room_category)
          }

      }
    }   
}
</script>
<style>

</style>
