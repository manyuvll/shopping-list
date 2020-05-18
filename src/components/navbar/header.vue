<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-light">
      <div v-on:click="$router.push('/')" style="cursor: pointer;">
        <img
          height="50px"
          src="../../assets/nook.png"
          alt
        />
        <span style="color: white">Tom Nook's Listing</span>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto py-4 py-md-0">
          <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active">
            <router-link id="my-lists" class="btn btn-link" tag="button" to="/listing">Mes listes</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&subset=devanagari,latin-ext");

nav {
  background-color: #2a293e;
}
.navbar-brand img {
  height: 52px;
  width: auto;
  display: block;
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}
#my-lists {
  color: white;
}
</style>