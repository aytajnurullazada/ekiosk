<template>
  <section class="news-papers circles-slot">
    <Header :customStyle="customStyle" />
    <NewspaperBox :data="getNewspapersMostsale" headTitle="Ən çox oxunan qəzetlər"/>
    <DobuleSwipe :data="getLastNewspapers" headTitle="Yeni çıxan nömrələr"/>
    <NewspapersGrid :data="getNewspaperList" headTitle="Bütün qəzetlər"/>
    <Footer :paralax="true"/>
  </section>
</template>

<script>
import Header from "@/components/common/Header/";
import Footer from "@/components/common/Footer/";
import NewspaperBox from '@/components/NewspaperBox/'
import DobuleSwipe from '@/components/DobuleSwipe/'
import NewspapersGrid from '@/components/NewspapersGrid/'
export default {
  middleware: 'isAuthGuard',
  components: {
    Header,
    NewspaperBox,
    DobuleSwipe,
    NewspapersGrid,
    Footer
  },
  created(){
      this.$store.dispatch('home/fetchNewspaperMostsale');  
      this.$store.dispatch('home/fetchNewspaperAllList');
      this.$store.dispatch('home/fetchLastNewspapers');
  },
  computed: {
    getLastNewspapers(){
      return this.$store.getters['home/getLastNewspapers'];
    },
    getNewspapersMostsale(){
      return this.$store.getters['home/getNewspapersMostsale'];
    },  
    getNewspaperList(){
      return this.$store.getters['home/getNewspaperList'];
    },  
    getData(){
        return [
            { src: require("@/assets/images/paper_3.png") },
            { src: require("@/assets/images/paper_4.png") },
            { src: require("@/assets/images/paper_2.png") },
            { src: require("@/assets/images/paper_3.png") },
            { src: require("@/assets/images/paper_4.png") },
            { src: require("@/assets/images/paper_2.png") },
            { src: require("@/assets/images/paper_1.png") },
            { src: require("@/assets/images/paper_1.png") },
            { src: require("@/assets/images/paper_1.png") },
            { src: require("@/assets/images/paper_1.png") },
            { src: require("@/assets/images/paper_1.png") },
            { src: require("@/assets/images/paper_1.png") },
            { src: require("@/assets/images/paper_2.png") },
            { src: require("@/assets/images/paper_3.png") }
      ]
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