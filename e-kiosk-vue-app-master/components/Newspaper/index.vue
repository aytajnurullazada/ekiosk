<template>
  <section class="news-paper">
    <div class="absolute-left-decor">
      <LeftDecor>
         <div class="title-box">
          <Typography>Qəzetlər</Typography>
        </div>
      </LeftDecor>
    </div>
    <Container>
      <div class="full-flex-box">
        <div class="title-box left-title-container">
          <Typography>Qəzetlər</Typography>
        </div>
        <!-- <div class="right-box">
          <span class="right-text">
            <Typography> Hamısına bax</Typography>
          </span>
          <ArrowRight color="#333333" />
        </div> -->
      </div>
    </Container>
    <marquee-text :duration="50" :reverse="true" :paused="paused">
      <div
        class="card-box"
        @mouseenter="paused = true"
        @mouseleave="paused = false"
      >
        <div
          class="item-news-paper"
          v-for="(item, index) in data"
          :key="index"
        >
          <NewspaperCard  :data="item" />
        </div>
      </div>
    </marquee-text>
  </section>
</template>

<script>
import Typography from "@/components/common/Typography/";
import LeftDecor from "@/svgComponents/LeftDecor";
import ArrowRight from "@/svgComponents/ArrowRight";
import Container from "@/components/common/Container/";
import NewspaperCard from "@/components/NewspaperCard/";
export default {
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      paused: false,
    };
  },
  components: {
    Typography,
    NewspaperCard,
    LeftDecor,
    ArrowRight,
    Container,
  },
};
</script>

<style scoped>
.card-box {
  display: flex;
}
.right-box {
  margin-left: auto;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
}
.news-paper {
  height: auto;
  background-color: #eaeaea;
  width: 100%;
  position: relative;
  padding-top: 88px;
  padding-bottom: 80px;
}
.item-news-paper {
  margin-right: 24px;
}
.news-paper .container {
  position: relative !important;
}
.absolute-left-decor {
  position: absolute;
  left: 0%;
  top: 88px;
}
.right-text {
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
  margin-right: 16px;
}
.full-flex-box {
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
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
  color: #232425;
}
.card-box {
  margin-top: 63px;
}
@media screen and (max-width: 768px) {
  .absolute-left-decor {
    display: none;
  }
  .title-box {
    padding-left: 0;
  }
  .title-box {
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 28px;
    position: relative;
  }
  .title-box::after{
    position: absolute;
    height: 1px;
    content: "";
    width: 40%;
    left: 0;
    bottom: -10px;
    background-color: #232425;
  }
  .card-box{
    margin-top: 32px;
  }
 .item-news-paper{
   margin-right: 8px !important;
    margin-left: 8px !important;
  }
  .right-box{
    font-size: 32px;
  }
  .right-text {
    display: none;
  }
  .news-paper {
    padding-top: 40px;
    padding-bottom: 40px;
  }
}
</style>