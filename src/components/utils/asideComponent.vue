<template>

    <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-light-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">
      <!-- <img src="dis" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
           style="opacity: .8"> -->
      <span class="brand-text font-weight-light">adminDashboard</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar"> 
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <!-- <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image"> -->
        </div>
        <div class="info">
          <a href="#" class="d-block">josh_enterprise</a>
        </div>
      </div> 

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <!-- <li class="nav-item has-treeview menu-open">
            <a href="#" class="nav-link active">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Starter Pages
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="#" class="nav-link active">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Active Page</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Inactive Page</p>
                </a>
              </li>
            </ul>
          </li> -->
          <li class="nav-item">
            <router-link to="/rooms" class="nav-link">
              <!-- <i class="nav-icon fas fa-th"></i> -->
              <p>
                Cars
                
              </p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/menus" class="nav-link">
              <!-- <i class="nav-icon fas fa-th"></i> -->
              <p>
                Drivers
               
              </p>
            </router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link to="/events" class="nav-link">
              < <i class="nav-icon fas fa-th"></i> 
              <p>
                Type of Trip
               
              </p>
            </router-link>
          </li> -->
          <li class="nav-item">
            <router-link to="/tables" class="nav-link">
              <!-- <i class="nav-icon fas fa-th"></i> -->
              <p>
                Rented Cars
              </p>
            </router-link>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>



</template>
<style scoped>

</style>
<script>
export default {
    name:'asidenav'
}
</script>