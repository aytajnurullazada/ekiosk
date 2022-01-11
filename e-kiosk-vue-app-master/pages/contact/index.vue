<template>
  <section class="profile-section" >
    <Header :customStyle="customStyle" />
    <Contact/>
    <Footer :paralax="true" />
  </section>
</template>

<script>
import Contact from "@/components/Contact/";
import Header from "@/components/common/Header/";
import Footer from "@/components/common/Footer/";
export default {
  components: {
    Contact,
    Header,
    Footer
  },
  created(){
    this.$store.dispatch('common/fetchContactTypes')
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