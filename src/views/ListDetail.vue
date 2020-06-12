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
      <div
        class="card bg-dark text-white col-md-5 col-sm-12 mr-md-2 mt-2"
        v-for="item of list.items"
        :key="item.name + item.description"
      >
        <img
          style="opacity: 0.3;"
          :src="item.picture ? item.picture : require('../assets/shinjuku.jpg')"
          class="card-img"
          :alt="item.item"
        />
        <div class="card-img-overlay">
          <h5 class="card-title">{{item.name}}</h5>
          <p class="card-text">{{item.description}}</p>
          <p class="card-text">
            Total Price:
            {{item.totalPrice}}
            <i class="fas fa-euro-sign mr-2"></i>
            <i class="fas fa-dolly-flatbed"></i>
            Quantity:
            {{item.quantity}}
          </p>
          <button
            type="button"
            class="col-10 btn btn-danger"
            style="color:white; opacity: 0.95;"
            @click.stop="onDelete(item)"
          >
            <i class="fas fa-trash"></i>
            Delete Item
          </button>
        </div>
      </div>
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
  components: {},
  data() {
    return {
      slug: this.$route.params.slug ?? null,
      listing: []
    };
  },
  methods: {
    onDelete(item) {
      this.$store.dispatch("removeItem", {
        item: item,
        slug: this.slug
      });
      this.list = this.$store.getters.list(this.slug);
    }
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
