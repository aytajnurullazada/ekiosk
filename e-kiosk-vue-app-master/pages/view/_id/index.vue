<template>
  <section class="profile-section">
    <Header :customStyle="customStyle" />
    <ViewPdf />
    <Footer :paralax="true" />
  </section>
</template>

<script>
import ViewPdf from "@/components/View/";
import Header from "@/components/common/Header/";
import Footer from "@/components/common/Footer/";
export default {
  components: {
    ViewPdf,
    Header,
    Footer
  },
  mounted(){
  
  },
  created(){
    this.$store.dispatch('newspaper-detail/fetchView', this.$route.params.id).then(res => {
      
    }).catch(err => {
         this.$nuxt.error({ statusCode: 404, message: 'Belə Bir Səhifə Tapilmadı' })
    })
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