<template>
  <section class="reset-password circles-slot">
    <Header :customStyle="customStyle" />
    <ForgotPassword />
    <Footer :paralax="true"/>
  </section>
</template>

<script>
import Header from "@/components/common/Header/";
import Footer from "@/components/common/Footer/";
import ForgotPassword from "@/components/ForgotPassword/";
export default {
  components: {
    ForgotPassword,
    Header,
    Footer
  },
  computed: {
    customStyle() {
      return {
        backgroundColor: "#1A1A1A",
        position: "relative",
      };
    },
  }
};
</script>

<style scoped>
</style>