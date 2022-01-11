<template>
  <section class="grid-section">
    <div class="absolute-left-decor">
      <LeftDecor>
        <div class="title-box">
          <Typography>{{ headTitle }}</Typography>
        </div>
      </LeftDecor>
    </div>
    <Container>
      <b-row>
        <div class="box-grid clear-min-width">
          <div
            class="grid-item"
            v-for="(item, index) in data"
            :key="index"
          >
            <NewspaperCard opacityDesc="0.6" descriptionColor="#1A1A1A" titleColor="#1A1A1A" :data="item"/>
          </div>
        </div>
      </b-row>
    </Container>
  </section>
</template>

<script>
import Typography from "@/components/common/Typography/";
import LeftDecor from "@/svgComponents/LeftDecor";
import ArrowRight from "@/svgComponents/ArrowRight";
import NewspaperCard from '@/components/NewspaperCard/'
import Container from "@/components/common/Container/";
export default {
  props: {
    data: {
      type: Array,
      default: []
    },
    headTitle: {
      type: [String, Number],
    },
  },
  components: {
    Typography,
    LeftDecor,
    ArrowRight,
    Container,
    NewspaperCard
  },
};
</script>

<style scoped>
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
.absolute-left-decor {
  position: absolute;
  z-index: 999;
  left: 0%;
  top: 0;
}
.title-box {
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 36px;
  line-height: 44px;
  display: flex;
  font-style: normal;
  padding-left: 24px;
  align-items: center;
  color: #1a1a1a !important;
}
@media screen and (max-width: 768px) {
  .title-box {
    padding-left: 0;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 28px;
    position: relative;
    color: #232425;
  }
  .title-box::after {
    position: absolute;
    height: 1px;
    content: "";
    width: 40%;
    bottom: -10px;
    left: 0;
    background-color: #232425;
  }
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