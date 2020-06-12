<template>
  <div class="card bg-dark text-white col-md-5 col-sm-12 mr-md-2 mt-2">
    <img
      style="opacity: 0.3;"
      :src="data.picture ? data.picture : require('../assets/shinjuku.jpg')"
      class="card-img"
    />
    <div class="card-img-overlay">
      <h5 class="card-title">{{data.name}}</h5>
      <p class="card-text">{{data.description}}</p>
      <p class="card-text">
        Total Price:
        {{data.totalPrice}}
        <i class="fas fa-euro-sign mr-2"></i>
        <i class="fas fa-dolly-flatbed"></i>
        Quantity:
        {{data.quantity}}
      </p>
      <button
        type="button"
        class="col-10 btn btn-danger"
        style="color:white; opacity: 0.95;"
        @click.stop="onDelete(data)"
      >
        <i class="fas fa-trash"></i>
        Delete Item
      </button>
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
export default {
  name: "Listing",
  props: {
    data: Object,
    slug: String
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    onDelete(item) {
      this.$store.dispatch("removeItem", {
        item: item,
        slug: this.slug
      });
    }
  }
};
</script>
