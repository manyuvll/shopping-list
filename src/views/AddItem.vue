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
        :class="nameIsValid ? 'form-control is-valid' : 'form-control'"
        id="name"
        placeholder="Ex. Game Boy Advance"
      />
    </div>
    <small
      id="passwordHelpBlock"
      class="form-text text-muted"
      style="text-align: left;"
    >Name must be of 3 or more characters.</small>
    <div class="form-row mt-2">
      <label for="description">
        <span style="color:red">*</span> Description
      </label>
      <textarea
        type="text"
        v-model="newItem.description"
        :class="descriptionIsValid ? 'form-control is-valid' : 'form-control'"
        id="description"
        placeholder="Why on the list?"
      />
    </div>
    <small
      id="passwordHelpBlock"
      class="form-text text-muted"
      style="text-align: left;"
    >Description must be of 6 or more characters.</small>
    <div class="form-row mt-2">
      <label for="unitPrice">
        <span style="color:red">*</span> Unit price
      </label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">€</span>
        </div>
        <input
          type="number"
          v-model.number="newItem.unitPrice"
          :class="unitPriceIsValid ? 'form-control is-valid' : 'form-control'"
          step="1"
          id="unitPrice"
          placeholder="Unit price"
        />
      </div>
    </div>
    <div class="form-row mt-2">
      <label for="quantity">Quantity: {{newItem.quantity}}</label>
      <input
        type="range"
        v-model.number="newItem.quantity"
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
        unitPrice: 0,
        totalPrice: 0,
        picture: "",
        quantity: 1
      },
      errors: [],
      slug: this.$route.params.slug ?? null
    };
  },
  computed: {
    nameIsValid() {
      return this.newItem.name.length > 3;
    },
    descriptionIsValid() {
      return this.newItem.description.length > 6;
    },
    unitPriceIsValid() {
      return this.newItem.unitPrice;
    },
    totalPrice() {
      return this.newItem.unitPrice && this.newItem.quantity
        ? this.newItem.unitPrice * this.newItem.quantity
        : 0;
    }
  },
  methods: {
    save() {
      this.newItem.totalPrice = this.totalPrice;
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
