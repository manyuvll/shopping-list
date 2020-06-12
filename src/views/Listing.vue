<template>
  <div class="home container">
    <h1 class="display-4 mb-4">Custom Lists</h1>
    <div class="row" style="place-content: center;">
      <router-link tag="button" class="btn btn-dark float-left col-8 mb-3" to="/listing/new">
        <i class="fa fa-plus mr-2"></i>Add new list
      </router-link>
    </div>
    <div class="row" style="place-content: center;">
      <List v-for="list of lists" :key="list.slug" :data="list" />
    </div>
  </div>
</template>
<style scoped>
.card-img {
  width: 100% !important;
  height: 180px !important;
  object-fit: cover;
}
.card {
  cursor: pointer;
  text-align: justify;
  padding-right: 0px;
  padding-left: 0px;
}
</style>

<script>
import List from "../components/list";

export default {
  name: "Listing",
  components: { List },
  data() {
    return {};
  },
  computed: {
    lists() {
      return this.$store.getters.lists;
    }
  }
};
</script>
