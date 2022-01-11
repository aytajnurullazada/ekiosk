<template>
  <section class="about-section circles-slot">
    <Header :customStyle="customStyle" />
    <ForCompany />
    <Footer :paralax="true" />
  </section>
</template>

<script>
import ForCompany from "@/components/ForCompany/";
import Header from "@/components/common/Header/";
import Footer from "@/components/common/Footer/";
export default {
  components: {
    ForCompany,
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