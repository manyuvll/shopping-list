<template>
  <div>
    <Header />
    <transition name="fade" mode="out-in">
      <router-view class="mt-3 mb-5" />
    </transition>
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