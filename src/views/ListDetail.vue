<template>
  <form class="container">
    <div class="form-row">
        <label for="title">Title of the list</label>
        <input type="text" v-model="newList.title" class="form-control" id="title" placeholder="My title">
    </div>
    <div class="form-row">
        <label for="description">Description</label>
        <textarea type="text" v-model="newList.description" class="form-control" id="description" placeholder="Aim of the list"/>
    </div>
    <div class="form-row">
      <label for="picture">Picture url</label>
      <input type="text" v-model="newList.picture" class="form-control" id="picture" placeholder="www.google.com/pic.png">
    </div>
    <button class="btn btn-dark float-left mt-4" @click="save">Save</button>
  </form>
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
      newList: {
        title: '',
        description: '',
        picture: '',
        items: [],
        slug: ''
      }
    }
  },
  methods: {
    save () {
      // Get from localstorage
      let listing = localStorage.getItem(LOCALSTORAGE.LISTING) ? JSON.parse(localStorage.getItem(LOCALSTORAGE.LISTING)) : []
      //Very little chance of dupes unless 1 million list (5%)
      this.newList.slug = Math.random().toString().replace('.','')
      listing.push(this.newList)
      // Store into localstorage
      localStorage.setItem(LOCALSTORAGE.LISTING, JSON.stringify(listing));
      this.$router.replace('/listing')
    }
  }
};
</script>
