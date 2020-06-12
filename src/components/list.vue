<template>
  <div class="card col-8 mb-3" @click="onClick(data.slug)">
    <div class="card-header">
      <h2 class="card-title" style="text-align: center;">{{data.title}}</h2>
    </div>
    <div class="row no-gutters">
      <div class="col-md-3">
        <img
          :src="data.picture ? data.picture : require('../assets/shinjuku.jpg')"
          class="card-img"
          width="20px"
          :alt="data.title"
        />
      </div>
      <div class="col-md-9">
        <div class="card-body">
          <p class="card-text">{{data.description}}</p>
          <p class="card-text">
            List price: {{data.totalPrice}}
            <i class="fas fa-euro-sign mr-2"></i>
            <br />
            <i class="fas fa-dolly-flatbed"></i>
            Number of items:
            {{data.items.length}}
          </p>
          <button
            type="button"
            class="col-12 btn btn-danger"
            style="color:white; opacity: 0.95;"
            @click.stop="onDelete(data.slug)"
          >
            <i class="fas fa-trash"></i>
            Delete List
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
.card {
  cursor: pointer;
  text-align: justify;
  padding-right: 0px;
  padding-left: 0px;
}
</style>

<script>
export default {
  name: "Listing",
  components: {},
  props: {
    data: Object
  },
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
    }
  }
};
</script>
