<template>
  <form class="container">
    <h3>Add List</h3>
    <div class="form-row">
      <label for="title">Title of the list</label>
      <input
        type="text"
        v-model="newList.title"
        class="form-control"
        id="title"
        placeholder="My title"
      />
    </div>
    <div class="form-row mt-2">
      <label for="description">Description</label>
      <textarea
        type="text"
        v-model="newList.description"
        class="form-control"
        id="description"
        placeholder="Aim of the list"
      />
    </div>
    <div class="form-row mt-2">
      <label for="picture">Picture url</label>
      <input
        type="text"
        v-model="newList.picture"
        class="form-control"
        id="picture"
        placeholder="www.google.com/pic.png"
      />
    </div>
    <button class="btn btn-dark float-left mt-4" @click="save">Save</button>
  </form>
</template>
<style scoped>
.card-img {
  width: 100% !important;
  height: 150px !important;
  object-fit: cover;
}
</style>

<script>
export default {
  name: "Listing",
  components: {},
  data() {
    return {
      newList: {
        title: "",
        description: "",
        picture: "",
        items: [],
        slug: ""
      }
    };
  },
  methods: {
    save() {
      //Very little chance of dupes unless 1 million list (5%)
      this.newList.slug = Math.random()
        .toString()
        .replace(".", "");
      if (!this.newList.picture)
        this.newList.picture =
          "https://resize-elle.ladmedia.fr/rcrop/638,,forcex/img/var/plain_site/storage/images/loisirs/evasion/que-voir-a-tokyo/l-artere-golden-gay-dans-le-quartier-de-shinjuku/52561124-1-fre-FR/L-artere-Golden-Gay-dans-le-quartier-de-Shinjuku.jpg";
      // Store into Vuex
      this.$store.dispatch("addList", this.newList);
      this.$router.replace("/listing");
    }
  }
};
</script>
