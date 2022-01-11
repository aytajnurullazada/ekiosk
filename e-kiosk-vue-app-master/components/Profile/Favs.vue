<template>
    <b-row>
      <div class="box-grid">
        <div class="grid-item" v-for="(item, index) in getFavsList" :key="index">
          <NewspaperCard
            opacityDesc="0.6"
            descriptionColor="white"
            titleColor="white"
            :data="item"
          />
        </div>
        <DataNotFound v-if="getFavsList.length < 1"/>
      </div>
    </b-row>
</template>

<script>
import Typography from "@/components/common/Typography/";
import NewspaperCard from "@/components/NewspaperCard/";
import Container from "@/components/common/Container/";
import DataNotFound from '@/components/common/DataNotFound/';
export default {
  components: {
    Typography,
    NewspaperCard,
    Container,
    DataNotFound
  },
  mounted(){
    this.$store.dispatch("auth/getUserFavs");
  },
  computed: {
   getFavsList(){
     return this.$store.getters['auth/getFavsList'];
   }
  },
};
</script>

<style  scoped>
.box-grid {
  padding: 0 !important;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
}
.grid-item {
  width: 25%;
  padding-left: 12px;
  padding-right: 12px;
  margin-bottom: 64px;
}
.grid-item:last-child{
    margin-bottom: 0;
}
.grid-section {
  position: relative;
  background-color: #eaeaea;
  padding-top: 72px;
  padding-bottom: 72px;
}
@media screen and (max-width: 767px){
    .grid-item{
        width: 50%;
        display: flex;
        margin-bottom: 32px;
        justify-content: center;
    }
}
@media screen and (max-width: 500px){
    .grid-item{
        width: 100%;
    }
}
</style>