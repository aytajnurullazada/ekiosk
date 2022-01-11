<template>
  <section class="about-section circles-slot">
    <Header :customStyle="customStyle" />
    <About />
    <Footer :paralax="true" />
  </section>
</template>

<script>
import About from "@/components/AboutStatic/";
import Header from "@/components/common/Header/";
import Footer from "@/components/common/Footer/";
export default {
  components: {
    About,
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