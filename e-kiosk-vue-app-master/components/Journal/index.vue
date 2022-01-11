<template>
  <section class="journal-box parent-journal-box">
    <div class="absolute-left-decor">
      <LeftDecor>
        <div class="title-box">
          <Typography>Jurnallar</Typography>
        </div>
      </LeftDecor>
    </div>
    <Container>
      <div class="full-flex-box">
      <div class="title-box left-title-container">
          <Typography>Jurnallar</Typography>
        </div>
        <div class="right-box">
          <span class="right-text">
            <Typography> Hamısına bax</Typography>
          </span>
          <ArrowRight color="#333333" />
        </div>
      </div>
    </Container>
    <JournalSlider  :data="journals"/>
  </section>
</template>

<script>
import JournalSlider from '@/components/JournalSlider/'
import ArrowRight from "@/svgComponents/ArrowRight";
import Typography from "@/components/common/Typography/";
import LeftDecor from "@/svgComponents/LeftDecor";
import Container from "@/components/common/Container/";
export default {
  computed: {
    journals() {
      return [
        { src: require("@/assets/images/journals/img2.png") },
        { src: require("@/assets/images/journals/img3.png") },
        { src: require("@/assets/images/journals/img4.png") },
        { src: require("@/assets/images/journals/img5.png") },
        { src: require("@/assets/images/journals/img1.png") },
        { src: require("@/assets/images/journals/img6.png") },
        { src: require("@/assets/images/journals/img7.png") },
      ];
    },
  },
  data(){
    return {
    
    }
  },
  mounted(){
    
  },
  components: {
    Container,
    ArrowRight,
    JournalSlider,
    Typography,
    LeftDecor,
  },
};
</script>

<style scoped>
.center-full-width-box {
  width: 100%;
  display: flex;
  justify-content: center;
}
.journal-item {
  height: 462px;
  transform: matrix(1, 0, 0, 1, 0, 0);
  width: 98px;
  min-width: 98px;
  transition: 0.1s;
  margin-left: 10px;
  margin-right: 10px;
  background-color: red;
  overflow: hidden;
  cursor: pointer;
  transform-origin: center center;
}
.journal-item:nth-child(2) {
  margin-top: 24px;
}
.journal-item:nth-child(3) {
  margin-top: 54px;
}
.journal-item:nth-child(4) {
  margin-top: 24px;
}

.journal-item:nth-child(6) {
  margin-top: 54px;
}
.journal-item:nth-child(7) {
  margin-top: 24px;
}
.journal-item:nth-child(9) {
  margin-top: 54px;
}
.journal-item img {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  max-width: 200px;
  max-height: 100%;
}
.journals-parent {
  width: 100%;
  display: flex;
  justify-content: center;
  height: 523px;
  position: relative;
}
.flex-journals {
  display: flex;
  transition: 0.3s;
  position: relative;
}
.right-box {
  margin-left: auto;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
}
.right-text {
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
  margin-right: 16px;
}
.journal-box {
  width: 100%;
  padding-top: 80px;
  padding-bottom: 80px;
  position: relative;
}
.full-flex-box {
  width: 100%;
  display: flex;
  margin-bottom: 60px;
  align-items: center;
  position: relative;
}
.absolute-left-decor {
  position: absolute;
  left: 0%;
  top: 80px;
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
@media screen and (max-width: 1200px){
  .center-full-width-box, .journals-parent{
    justify-content: flex-start;
  }
  .journals-parent{
    max-width: 100vh;
    overflow: hidden;
  }
}
@media screen and (max-width: 768px){
  .absolute-left-decor{
    display: none;
  }
  .title-box{
    padding-left: 0;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 28px;
    position: relative;
    color: #232425;
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
  .journal-box{
    padding-top: 40px;
    padding-bottom: 56px;
  }
  
  .right-text{
    display: none;
  }
  .right-box{
    font-size: 36px;
  }
  .full-flex-box{
    margin-bottom: 32px;
  }
}
@media screen and (max-width: 500px) {
  .journal-item {
    height: 304px !important;
    width: 72px;
    min-width: 72px;
    margin-right: 2px;
    margin-left: 2px;
  }
  .journal-item:nth-child(2) {
    margin-top: 14px;
  }
  .journal-item:nth-child(3) {
    margin-top: 24px;
  }
  .journal-item:nth-child(4) {
    margin-top: 14px;
  }

  .journal-item:nth-child(6) {
    margin-top: 24px;
  }
  .journal-item:nth-child(7) {
    margin-top: 14px;
  }
  .journal-item:nth-child(9) {
    margin-top: 14px;
  }
}
</style>