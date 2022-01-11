<template>
  <div class="no-items" v-if="isLoad">
    <div>
      <div class="lottie-box">
        <Lottie :options="defaultOptions" />
      </div>
      <div class="lottie-title">
        <Typography> Məlumat tapılmadı </Typography>
      </div>
    </div>
  </div>
</template>

<script>
import Typography from "@/components/common/Typography/";
import * as animationData from "@/assets/lottie/no-data.json";
export default {
  components: {
    Typography,
  },
  data() {
    return {
      isLoad: false,
      defaultOptions: { animationData: animationData.default },
    };
  },
  mounted(){
    let _this = this;
    setTimeout(function(){
      _this.isLoad = true;
    }, 1000);
  }
};
</script>

<style  scoped>
.no-items {
  width: 100%;
  position: relative;
  display: flex;
  padding-bottom: 120px;
  justify-content: center;
}
.lottie-box {
  width: 600px;
  display: flex;
  justify-content: center;
}
.lottie-title {
  display: flex;
  justify-content: center;
  color: white;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;
  display: flex;
  margin-top: -90px;
  align-items: center;
  color: #ffffff;
}
@media screen and (max-width: 767px){
  .lottie-box{
    width: 250px;
  }
  .lottie-title{
    margin-top: -44px;
    font-size: 24px;
  }
  .no-items{
    padding-bottom: 44px;
  }
}
</style>