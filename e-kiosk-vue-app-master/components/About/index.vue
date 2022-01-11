<template>
  <section class="about-section" v-scroll-trigger="{ targetId: 'show-text'}">
    <div class="absolute-left-decor">
      <LeftDecor>
        <div class="title-box">
          <Typography>Haqqımızda</Typography>
        </div>
      </LeftDecor>
    </div>
    <Container>
      <div class="full-flex-box">
        <div class="title-box left-title-container">
          <Typography>Haqqımızda</Typography>
        </div>
        <div class="right-box" @click="$router.push('/all-newspapers')">
          <span class="right-text">
            <Typography> Hamısına bax</Typography>
          </span>
          <ArrowRight color="#333333" />
        </div>
      </div>
      <div class="content-flex-box">
        <div class="flex-col">
          <div class="about-text" id="show-text">
            <Typography>
              The Azerbaijan pavilion’s technological forest is made by 5
              digital trees; these are the ideal representation of the main
              themes the country is developing with concrete projects and
              actions, such as: investing in education, improving services and
              quality of life, designing smart and eco-friendly cities,
              developing a sustainable economy, etc. To interact with the large
              screen, people could use the touch screen positioned near the
              tree. The call to action “let me grow” is
            </Typography>
          </div>
        </div>
        <div class="flex-col flex-right" v-if="data.length > 0">
          <HistoryCarousel  :data="data" />
        </div>
      </div>
    </Container>
  </section>
</template>

<script>
import Typography from "@/components/common/Typography/";
import LeftDecor from "@/svgComponents/LeftDecor";
import ArrowRight from "@/svgComponents/ArrowRight";
import Container from "@/components/common/Container/";
import HistoryCarousel from "@/components/common/HistoryCarousel/";
export default {
  props: {
    data:{
      type: Array,
      default: []
    }
  },
  components: {
    LeftDecor,
    HistoryCarousel,
    Container,
    Typography,
    ArrowRight,
  },
  computed: {
  },
};
</script>

<style scoped>
.about-text {
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 34px;
  color: #000000;
  margin-top: 30px;
  opacity: 0;
  transition: 3s;
  font-family: "Poppins", sans-serif !important;
}
.about-text.active{
  transition: 3s;
  opacity: 1;
  margin-top: 0px;
}
.flex-col {
  width: 50%;
  position: relative;
}
.flex-col:first-child {
  padding-right: 63px;
}
.flex-col:last-child {
  padding-left: 63px;
}
.content-flex-box {
  width: 100%;
  display: flex;
  position: relative;
}
.about-section {
  padding-top: 80px;
  padding-bottom: 80px;
  position: relative;
  background-color: #eaeaea;
}
.right-box {
  margin-left: auto;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
}
.full-flex-box {
  width: 100%;
  display: flex;
  margin-bottom: 70px;
  align-items: center;
  position: relative;
}
.absolute-left-decor {
  position: absolute;
  left: 0%;
  top: 80px;
}
.right-text {
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
  margin-right: 16px;
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
.flex-right {
  display: flex;
  justify-content: flex-end;
  position: relative;
}
@media screen and (max-width: 992px) {
  .content-flex-box {
    flex-wrap: wrap;
  }
  .flex-col {
    width: 100%;
    padding: 0 !important;
  }
  .flex-col:first-child {
    padding-bottom: 62px !important;
  }
}
@media screen and (max-width: 768px) {
  .right-box {
    font-size: 36px;
  }
  .about-section {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  .flex-col:first-child {
    padding-bottom: 32px !important;
  }
  .about-text {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 30px;
  }
  .full-flex-box {
    margin-bottom: 32px;
  }
  .absolute-left-decor {
    display: none;
  }
  .right-text {
    display: none;
  }
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
    left: 0;
    bottom: -10px;
    background-color: #232425;
  }
}
</style>