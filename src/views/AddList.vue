<template>
  <form class="container">
    <h3>Add to shopping list</h3>
    <div class="form-row">
      <label for="title">
        <span style="color:red">*</span> Title of the list
      </label>
      <input
        type="text"
        v-model="newList.title"
        :class="titleIsValid ? 'form-control is-valid' : 'form-control'"
        id="title"
        placeholder="My title"
      />
    </div>
    <small
      id="passwordHelpBlock"
      class="form-text text-muted"
      style="text-align: left;"
    >Title must be of 3 or more characters.</small>
    <div class="form-row mt-2">
      <label for="description">
        <span style="color:red">*</span> Description
      </label>
      <textarea
        type="text"
        v-model="newList.description"
        :class="descriptionIsValid ? 'form-control is-valid' : 'form-control'"
        id="description"
        placeholder="List description"
      />
    </div>
    <small
      id="passwordHelpBlock"
      class="form-text text-muted"
      style="text-align: left;"
    >Description must be of 6 or more characters.</small>
    <div class="form-row mt-2">
      <label for="picture">Picture url</label>
      <input
        type="text"
        v-model="newList.picture"
        :class="this.pictureIsValid && this.newList.picture.length > 1 ? 'form-control is-valid' : 'form-control'"
        id="picture"
        placeholder="www.google.com/pic.png"
      />
    </div>
    <button :disabled="!validateForm" class="btn btn-dark float-left mt-4" @click="save">Save</button>
  </form>
</template>
<style scoped>
.card-img {
  width: 100% !important;
  height: 150px !important;
  object-fit: cover;
}

.error-message {
  color: red;
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
        totalPrice: 0,
        picture: "",
        items: [],
        slug: ""
      },
      errors: []
    };
  },
  computed: {
    titleIsValid() {
      return this.newList.title.length > 3;
    },
    descriptionIsValid() {
      return this.newList.description.length > 6;
    },
    pictureIsValid() {
      let regex = new RegExp("/(https?://.*.(?:png|jpg))/i");
      return regex.exec(this.newList.picture);
    },
    validateForm() {
      return this.titleIsValid && this.descriptionIsValid;
    }
  },
  methods: {
    save() {
      //Very little chance of dupes unless 1 million list (5%)
      this.newList.slug = Math.random()
        .toString()
        .replace(".", "");
      // Store into Vuex
      this.$store.dispatch("addList", this.newList);
      this.$router.replace("/listing");
    }
  }
};
</script>
