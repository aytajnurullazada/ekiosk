<template>
  <section class="reset-password circles-slot">
    <Header :customStyle="customStyle" />
    <ResetPassword />
    <Footer :paralax="true"/>
  </section>
</template>

<script>
import Header from "@/components/common/Header/";
import Footer from "@/components/common/Footer/";
import ResetPassword from "@/components/ResetPassword/";
export default {
  components: {
    ResetPassword,
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