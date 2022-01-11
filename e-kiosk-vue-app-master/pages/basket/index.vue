<template>
  <section class="profile-section" >
    <Header :customStyle="customStyle" />
    <Basket />
    <Footer :paralax="true" />
  </section>
</template>

<script>
import Basket from "@/components/Basket/";
import Header from "@/components/common/Header/";
import Footer from "@/components/common/Footer/";
export default {
  middleware: 'isAuthGuard',
  components: {
    Basket,
    Header,
    Footer
  },
  created(){
    this.$store.dispatch('auth/getBasketList');
  },
  computed: {
    customStyle() {
      return {
        backgroundColor: "#1A1A1A",
        position: "relative",
      };
    },
  },
};
</script>

<style  scoped>
</style>