<template>
  <form class="container">
    <h3>Add item to {{list.title}}</h3>
    <div class="form-row">
      <label for="name">
        <span style="color:red">*</span> Object name
      </label>
      <input
        type="text"
        v-model="newItem.name"
        class="form-control"
        id="name"
        placeholder="Ex. Game Boy Advance"
      />
    </div>
    <p v-if="errors.name" class="error-message">{{errors.name}}</p>
    <div class="form-row mt-2">
      <label for="description">
        <span style="color:red">*</span> Description
      </label>
      <textarea
        type="text"
        v-model="newItem.description"
        class="form-control"
        id="description"
        placeholder="Why on the list?"
      />
    </div>
    <p v-if="errors.description" class="error-message">{{errors.description}}</p>
    <div class="form-row mt-2">
      <label for="quantity">Quantity: {{newItem.quantity}}</label>
      <input
        type="range"
        v-model="newItem.quantity"
        class="custom-range"
        min="1"
        max="100"
        step="1"
        id="quantity"
      />
    </div>
    <div class="form-row mt-2">
      <label for="picture">Picture url</label>
      <input
        type="text"
        v-model="newItem.picture"
        class="form-control"
        id="picture"
        placeholder="www.google.com/pic.png"
      />
    </div>
    <button
      :disabled="newItem.name.length < 3 || newItem.description.length < 6"
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
      list: {},
      listing: [],
      newItem: {
        name: "",
        description: "",
        picture: "",
        quantity: 1
      },
      errors: [],
      slug: this.$route.params.slug ?? null
    };
  },
  watch: {
    "newItem.name": {
      handler(value) {
        this.newItem.name = value;
        this.validateName(value);
      },
      deep: true
    },
    "newItem.description": {
      handler(value) {
        this.newItem.description = value;
        this.validateDescription(value);
      },
      deep: true
    }
  },
  methods: {
    validateName(name) {
      if (name.length < 3) {
        this.errors["name"] = "Must be at least 3 characters!";
      } else {
        this.errors["name"] = "";
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
      this.$store.dispatch("addItem", { item: this.newItem, slug: this.slug });
      this.$router.replace(`/listing/${this.slug}`);
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
