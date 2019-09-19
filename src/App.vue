<template>
  <div class="wrapper">
      <div>
            <navbar/>
            <asidenav/>
        <div class="content-wrapper">

            <div class="content">
                <router-view/>
            </div>
        </div>
      </div>
      <footerComponent/>
   </div>

</template>

<script>
import navbar from '../src/components/utils/navbarComponent'
import asidenav from '../src/components/utils/asideComponent'
import footerComponent from '../src/components/utils/footerComponent'
var jQuery = require('./assets/plugins/jquery/jquery')
var bootstrap = require('./assets/plugins/bootstrap/js/bootstrap.bundle.js')
var adminlte = require('./assets/dist/js/adminlte.min.js')
export default {
  name: 'app',
  components:{
      navbar:navbar,
      asidenav:asidenav,
      footerComponent:footerComponent,
  },
  mounted(){
   
  }
}

</script>

<style>
@import './assets/plugins/fontawesome-free/css/all.min.css';
@import './assets/dist/css/adminlte.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.page{
  position:fixed;
  width:100%;
}
</style>
