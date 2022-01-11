<template>
  <section class="home-section circles-slot">
    <style v-if="!isHover">
      .circle-creeBoule {
        display: none !important;
      }
    </style>
    <Header />
    <Banner />
    <Newspaper :data="getNewspaperList"/>
    <VideoDescription />
    <Journal />
    <NewspaperBox :data="getNewspapersMostsale" headTitle="Ən çox satılan"/>
    <About :data="getNewspaperList"/>
    <BottomLinks :propData="bottomLinks" />
    <Footer @hover="isHover = true"/>
  </section>
</template>
<script>
import Banner from "@/components/Banner/";
import Header from "@/components/common/Header/";
import Footer from "@/components/common/Footer/";
import Newspaper from "@/components/Newspaper/";
import VideoDescription from "@/components/VideoDesciption/";
import Journal from "@/components/Journal/";
import BottomLinks from "@/components/BottomLinks/";
import NewspaperBox from "@/components/NewspaperBox/";
import About from "@/components/About/";
export default {
  middleware: 'homeGuard',
  data(){
    return {
      isHover: false
    }
  },
  created(){
    this.$store.dispatch('home/fetchNewspaperAllList');   
    this.$store.dispatch('home/fetchNewspaperMostsale');   
  },
  computed: {
    getNewspaperList(){
      return this.$store.getters['home/getNewspaperList'];
    },
    getNewspapersMostsale(){
      return this.$store.getters['home/getNewspapersMostsale'];
    },
    bottomLinks() {
      return [
        {
          src: require("@/assets/images/links/img1.png"),
          title: "Heydər Əliyev",
          description: "Azərbaycan Respublikasının Ümummilli Lideri",
        },
        {
          src: require("@/assets/images/links/img2.png"),
          title: "İlham Əliyev",
          description: "Azərbaycan Respublikasının Prezidenti",
        },
        {
          src: require("@/assets/images/links/img3.jpg"),
          title: "Mehriban Əliyeva",
          description: "Azərbaycan Respublikasının I vitse-Prezidenti",
        },
        {
          src: require("@/assets/images/links/img4.png"),
          title: "HEYDAR ALIYEV FOUNDATION",
          description: null,
        },
      ];
    },
  },
  components: {
    Header,
    Footer,
    NewspaperBox,
    VideoDescription,
    BottomLinks,
    Banner,
    About,
    Newspaper,
    Journal,
  },
};
</script>


<style>
  body{
    width: 100%;
    overflow-x:  hidden;
  }
</style>