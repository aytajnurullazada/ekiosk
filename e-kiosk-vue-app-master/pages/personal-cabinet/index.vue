<template>
  <section class="personal-cabinet circles-slot">
    <Header :customStyle="customStyle" />
    <PersonalCabinet />
    <Footer :paralax="true"/>
  </section>
</template>

<script>
import PersonalCabinet from "@/components/PersonalCabinet/";
import Header from "@/components/common/Header/";
import Footer from "@/components/common/Footer/";
export default {
  components: {
    PersonalCabinet,
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