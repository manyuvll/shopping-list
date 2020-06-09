<template>
  <div class="home container">
    <h1 class="display-4">lists</h1>
    <div
      class="card mb-3"
      style="cursor: pointer;"
      v-for="list of lists"
      :key="list.title + list.picture"
      @click="onClick(list.slug)"
    >
      <div class="row no-gutters">
        <div class="col-md-2">
          <img :src="list.picture" class="card-img" width="20px" :alt="list.title" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h2 class="card-title">{{list.title}}</h2>
            <p class="card-text">{{list.description}}</p>
            <p class="card-text">
              <i class="fas fa-dolly-flatbed"></i>
              {{list.items.length}}
              <button
                type="button"
                class="btn btn-link"
                style="color:red"
                @click.stop="onDelete(list.slug)"
              >
                <i class="fas fa-trash"></i>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
    <router-link tag="button" class="btn btn-dark float-left" to="/listing/new">Add new list</router-link>
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
      console.log("weeew");
      this.$store.dispatch("removeList", slug);
      this.lists = this.$store.getters.lists;
    }
  },
  created() {
    this.lists = this.$store.getters.lists;
  }
};
</script>
