<template>
  <div class="home container">
    <h1 class="display-4 mb-4">Custom Lists</h1>
    <div class="row" style="place-content: center;">
      <router-link
        tag="button"
        class="btn btn-dark float-left col-8 mb-3"
        to="/listing/new"
      >Add new list</router-link>
    </div>
    <div class="row" style="place-content: center;">
      <div
        class="card col-8 mb-3"
        style="cursor: pointer;text-align: justify; padding-right: 0px; padding-left: 0px;"
        v-for="list of lists"
        :key="list.title + list.picture"
        @click="onClick(list.slug)"
      >
        <div class="card-header">
          <h2 class="card-title" style="text-align: center;">{{list.title}}</h2>
        </div>
        <div class="row no-gutters">
          <div class="col-md-3">
            <img
              :src="list.picture ? list.picture : require('../assets/shinjuku.jpg')"
              class="card-img"
              width="20px"
              :alt="list.title"
            />
          </div>
          <div class="col-md-9">
            <div class="card-body">
              <p class="card-text">{{list.description}}</p>
              <p class="card-text">
                List price: {{list.totalPrice}}
                <i class="fas fa-euro-sign mr-2"></i>
                <br />
                <i class="fas fa-dolly-flatbed"></i>
                Number of items:
                {{list.items.length}}
              </p>
              <button
                type="button"
                class="col-12 btn btn-danger"
                style="color:white; opacity: 0.95;"
                @click.stop="onDelete(list.slug)"
              >
                <i class="fas fa-trash"></i>
                Delete List
              </button>
            </div>
          </div>
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
      lists: []
    };
  },
  methods: {
    onClick(slug) {
      this.$router.push(`/listing/${slug}`);
    },
    onDelete(slug) {
      this.$store.dispatch("removeList", slug);
      this.lists = this.$store.getters.lists;
    }
  },
  created() {
    this.lists = this.$store.getters.lists;
  }
};
</script>
