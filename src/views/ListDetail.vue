<template>
  <div class="container">
    <h3>{{list.title}} ({{list.items.length}})</h3>
    <div class="row mb-4">
      <router-link tag="button" class="btn btn-success" :to="`/listing/${slug}/add`">Add new list</router-link>
    </div>
    <div class="row">
      <div
        class="card bg-dark text-white col-3 mr-2"
        v-for="item of list.items"
        :key="item.name + item.description"
      >
        <img style="opacity: 0.3;" :src="item.picture" class="card-img" :alt="item.item" />
        <div class="card-img-overlay">
          <h5 class="card-title">{{item.name}}</h5>
          <p class="card-text">{{item.description}}</p>
          <p class="card-text">
            <i class="fas fa-dolly-flatbed"></i>
            {{item.quantity}}
            <button
              type="button"
              class="btn btn-link"
              style="color:red"
              @click.stop="onDelete(item)"
            >
              <i class="fas fa-trash"></i>
            </button>
          </p>
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
</style>

<script>
export default {
  name: "Listing",
  components: {},
  data() {
    return {
      slug: this.$route.params.slug ?? null,
      list: {
        items: []
      },
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
  mounted() {
    if (!this.slug) this.$router.go(-1);
    let list = this.$store.getters.list(this.slug);
    if (list) this.list = list;
    else {
      this.$router.go(-1);
    }
  }
};
</script>
