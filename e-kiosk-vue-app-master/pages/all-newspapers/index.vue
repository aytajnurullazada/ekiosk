<template>
  <section class="all-numbers circles-slot">
    <Header :customStyle="customStyle" />
    <AllNewspaper :data="getAllNewspaper"/>
    <Footer :paralax="true" />
  </section>
</template>

<script>
import AllNewspaper from "@/components/AllNewspaper/";
import Header from "@/components/common/Header/";
import Footer from "@/components/common/Footer/";
export default {
  components: {
    AllNewspaper,
    Header,
    Footer
  },
  created(){
    this.$store.dispatch('all-newspapers/fetchAllNewspaper', {push: false, data: {}});
    this.$store.dispatch('all-newspapers/fetchSortList');
  },
  computed: {
    getAllNewspaper(){
      return this.$store.getters['all-newspapers/getAllNewspaper'];
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