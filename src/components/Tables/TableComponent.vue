 <template>
    <div class="container page">
        <div class="row m-2">
            <div class="col-md-10">
            <div class="col-md-4 shadow mt-2">
                <div class="card text-center booktable m-2">
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-warning btn-sm">Edit</a>
                    <div>
                        <span class="badge badge-info m-2">4 seats</span>
                        <span class="badge badge-danger m-2">vip</span>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <!-- <div class="col-md-2 mt-2 shadow">
                <div>
                    <button class="btn btn-sm btn-info">Create table</button>
                </div> 
            </div> -->

        </div>
    </div>    
 </template>
 <script>
 export default {
     name:'tables'
 }
 </script>
 <style>
 .booktable{
     background-image: url('../../assets/napkin.jpeg');
     background-size: cover;
     background-repeat: no-repeat;
     background-position: center center;
     color: purple;
     font-weight: 900;
 }
 </style>
 
 