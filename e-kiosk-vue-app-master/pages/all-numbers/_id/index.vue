<template>
  <section class="all-numbers circles-slot">
    <Header :customStyle="customStyle" />
    <AllNumbers :data="getAllNumbers"/>
    <Footer :paralax="true" />
  </section>
</template>

<script>
import AllNumbers from "@/components/AllNumbers/";
import Header from "@/components/common/Header/";
import Footer from "@/components/common/Footer/";
export default {
  components: {
    AllNumbers,
    Header,
    Footer
  },
  created(){
    this.$store.dispatch('all-numbers/fetchAllNumbers', {id: this.$route.params.id, data: {}, push: false});
    this.$store.dispatch('all-numbers/fetchNewspaperNumbersList',this.$route.params.id);
  },
  computed: {
    getAllNumbers(){
      return this.$store.getters['all-numbers/getAllNumbers'];
    },
    customStyle() {
      return {
        backgroundColor: "#1A1A1A",
        position: "relative",
      };
    }
  },
};
</script>

<style  scoped>
</style>