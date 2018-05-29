<template>

<aside id="left-panel" class="left-panel">
    <nav class="navbar navbar-expand-sm navbar-default">      
        <div id="main-menu" class="main-menu collapse navbar-collapse">
            <ul class="nav navbar-nav">                           
                <h3 class="menu-title">Admin Dashboard</h3><!-- /.menu-title -->
                <li class="menu-item">
                    <router-link to="/admin/addTour" class="dropdown-toggle" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon fa fa-suitcase"></i>Add Tour</router-link>                    
                </li>                   
            </ul>
        </div>
    </nav>
</aside>
   
</template>
<script>
  export default{
    name: 'LeftSide'
  }
</script>
