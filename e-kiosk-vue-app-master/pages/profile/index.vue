<template>
  <section class="profile-section circles-slot">
    <Header :customStyle="customStyle" />
    <Profile />
    <Footer :paralax="true" />
  </section>
</template>

<script>
import Profile from "@/components/Profile/";
import Header from "@/components/common/Header/";
import Footer from "@/components/common/Footer/";
export default {
  middleware: 'isAuthGuard',
  components: {
    Profile,
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
  },
};
</script>

<style  scoped>
</style>