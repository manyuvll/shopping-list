<template>
  <form class="container">
    <h3>Add List</h3>
    <div class="form-row">
      <label for="title">
        <span style="color:red">*</span> Title of the list
      </label>
      <input
        type="text"
        v-model="newList.title"
        class="form-control"
        id="title"
        placeholder="My title"
      />
    </div>
    <span v-if="errors.title" style="color: red">{{errors.title}}</span>
    <div class="form-row mt-2">
      <label for="description">
        <span style="color:red">*</span> Description
      </label>
      <textarea
        type="text"
        v-model="newList.description"
        class="form-control"
        id="description"
        placeholder="Aim of the list"
      />
    </div>
    <span v-if="errors.description" style="color: red">{{errors.description}}</span>
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
    <button
      :disabled="newList.title.length < 3 || newList.description.length < 6"
      class="btn btn-dark float-left mt-4"
      @click="save"
    >Save</button>
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
      },
      errors: []
    };
  },
  watch: {
    "newList.title": {
      handler(value) {
        this.newList.title = value;
        this.validateTitle(value);
      },
      deep: true
    },
    "newList.description": {
      handler(value) {
        this.newList.description = value;
        this.validateDescription(value);
      },
      deep: true
    }
  },
  methods: {
    validateTitle(title) {
      if (title.length < 3) {
        this.errors["title"] = "Must be at least 2 characters!";
      } else {
        this.errors["title"] = "";
      }
    },
    validateDescription(description) {
      if (description.length < 6) {
        this.errors["description"] = "Must be at least 6 characters!";
      } else {
        this.errors["description"] = "";
      }
    },
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
