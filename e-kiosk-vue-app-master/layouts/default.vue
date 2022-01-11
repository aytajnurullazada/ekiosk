<template>
  <div>
    <SubscribeModal />
    <NumberModal />
    <FeedBackModal />
    <Nuxt />
  </div>
</template>
<script>
import SubscribeModal from "@/components/SubscribeModal/";
import NumberModal from "@/components/NumberModal/";
import FeedBackModal from "@/components/FeedBackModal/";
export default {
  components: {
    FeedBackModal,
    SubscribeModal,
    NumberModal,
  },
  created() {
    this.$store.dispatch("auth/getBasketList");
    this.$store.dispatch("auth/getUserDetail");
    this.$store.dispatch("auth/getNotfications");
    this.$store.dispatch("auth/getUserFavs");
    this.$store.dispatch("common/fetchSocialLinks");
  },
  watch: {
    $route() {
      clearInterval(this.$timerCreeBoule);
      this.$store.commit("common/closeMenu");
      document.body.classList.remove("closeScroll");
    },
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: #f2f2f2f2;
}
</style>
