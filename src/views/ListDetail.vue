<template>
  <div class="container">
    <h3>
      {{list.title}}
      <span class="badge badge-info">{{list.items.length}}</span>
    </h3>
    <div class="row" style="place-content: center;">
      <router-link tag="button" class="btn btn-success col-5" :to="`/listing/${slug}/add`">
        <i class="fa fa-plus mr-2"></i>Add new item
      </router-link>
    </div>
    <div class="row no-gutters" style="place-content: center;">
      <Item v-for="item of list.items" :key="item.name + item.quantity" :data="item" :slug="slug" />
    </div>
  </div>
</template>
<style scoped>
.card-img {
  width: 100% !important;
  height: 180px !important;
  object-fit: cover;
}
.card-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

<script>
import Item from "../components/item";

export default {
  name: "Listing",
  components: { Item },
  data() {
    return {
      slug: this.$route.params.slug ?? null,
      listing: []
    };
  },
  computed: {
    list() {
      return this.$store.getters.list(this.slug);
    }
  },
  mounted() {
    if (!this.slug) this.$router.go(-1);
  }
};
</script>
