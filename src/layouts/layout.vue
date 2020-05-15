<template>
  <div>
    <Header />
    <router-view class="mt-3" />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/navbar/header";
import Footer from "../components/navbar/footer";

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style>
</style>