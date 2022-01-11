<template>
  <section class="profile-section circles-slot">
    <Header :customStyle="customStyle" />
    <NewspaperDetail/>
    <Footer :paralax="true" />
  </section>
</template>

<script>
import NewspaperDetail from "@/components/NewspaperDetail/";
import Header from "@/components/common/Header/";
import Footer from "@/components/common/Footer/";
export default {
  components: {
    NewspaperDetail,
    Header,
    Footer
  },
  created(){
    this.$store.dispatch('newspaper-detail/fetchNewspaperDetail', this.$route.params.id).then(res => {
      if(res.data.code && res.data.code == 404){
         this.$nuxt.error({ statusCode: 404, message: 'Belə Bir Səhifə Tapilmadı' })
      }
    });
    this.$store.dispatch('newspaper-detail/fetchNumberArchive', this.$route.params.id);
    this.$store.dispatch('newspaper-detail/fetchEvaluationsCount', this.$route.params.id);
    this.$store.dispatch('newspaper-detail/fetchComments', this.$route.params.id);
  },
  computed: {
    getDetail(){
      return this.$store.getters['newspaper-detail/getDetail'];
    },
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