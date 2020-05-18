<template>
  <div class="container">
    <h3>{{list.title}} ({{list.items.length}}) </h3> 
    <div class="row mb-4"><router-link tag="button" class="btn btn-success" :to="`/listing/${slug}/add`">Add new list</router-link></div>
    <div class="row">
      <div class="card bg-dark text-white col-3 mr-2" v-for="item of list.items" :key="item.name + item.description">
      <img style="opacity: 0.3;" :src="item.picture" class="card-img" :alt="item.item">
      <div class="card-img-overlay">
        <h5 class="card-title">{{item.name}}</h5>
        <p class="card-text">{{item.description}}</p>
            <p class="card-text"><i class="fas fa-dolly-flatbed"></i> {{item.quantity}} <button type="button" class="btn btn-link" style="color:red" @click.stop="onDelete(item)"><i class="fas fa-trash"></i></button></p>
      </div>
    </div>
    </div>
  </div>
</template>
<style scoped>
  .card-img{
   width: 100%!important;
   height: 180px!important;
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
      slug: this.$route.params.slug ?? null,
      list: {
        items: []
      },
      listing: []
    }
  },
  methods: {
    onDelete(item) {
      this.list.items = this.list.items.filter(i => i !== item)
      this.listing[this.listing.findIndex(list => list.slug === this.list.slug)] = this.list;
      localStorage.setItem(LOCALSTORAGE.LISTING, JSON.stringify(this.listing));
    }
  },
  mounted () {
    if (!this.slug) this.$router.go(-1)
    this.listing = localStorage.getItem(LOCALSTORAGE.LISTING) ?? []
    if(this.listing) {
      this.listing = JSON.parse(this.listing)
      let list = this.listing.find(item => item.slug === this.slug);
      if (list) this.list = list
      else {
        this.$router.go(-1)
      }
    }
    console.log(this.list) 
  }
};
</script>
