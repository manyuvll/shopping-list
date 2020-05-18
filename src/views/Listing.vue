<template>
  <div class="home container">
    <h1 class="display-4">Listes</h1>
    <div class="card mb-3" style="cursor: pointer;" v-for="list of listes" :key="list.title + list.picture" @click="onClick(list.slug)">
      <div class="row no-gutters">
        <div class="col-md-2">
          <img :src="list.picture" class="card-img" width="20px" :alt="list.title">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h2 class="card-title">{{list.title}}</h2>
            <p class="card-text">Number of items: {{list.items.length}}</p>
          </div>
        </div>
      </div>
    </div>
      <router-link tag="button" class="btn btn-dark float-left" to="/listing/new">Add new list</router-link>
  </div>
</template>
<style scoped>
  .card-img{
   width: 100%!important;
   height: 150px!important;
   object-fit: cover;
}
</style>

<script>
import { LOCALSTORAGE } from '../utils/const';

export default {
  name: "Listing",
  components: {},
  data () {
    return {
      listes: []
    }
  },
  methods: {
    onClick (slug) {
      this.$router.push(`/listing/${slug}`)
    }
  },
  created () {
    this.listes = localStorage.getItem(LOCALSTORAGE.LISTING) ? JSON.parse(localStorage.getItem(LOCALSTORAGE.LISTING)) : []
  }
};
</script>
