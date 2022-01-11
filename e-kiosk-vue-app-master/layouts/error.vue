<template>
  <div class="error-section">
    <b-container>
      <nuxt-link to="/" tag="div" class="logo-box">
 <div class="logo-item">
          <img src="@/assets/images/logo.png" alt="" />
        </div>
        <div class="logo-text">
          <Typography> E-Kiosk </Typography>
        </div>
      </nuxt-link>
   
      <div class="absolute-flex">
        <b-container>
          <div class="flex-content">
            <div class="flex-col">
              <div class="message-text">
                <Typography>
                    Ooops Bu Səhifə <br> Tapılmadı
                </Typography
                >
              </div>
              <div class="route-box">
                <Btn @click="$router.push('/')"> Ana səhifəyə qayıt </Btn>
              </div>
            </div>
            <div class="flex-col">
              <div class="animation-box">
                <Lottie :options="defaultOptions" />
              </div>
            </div>
          </div>
        </b-container>
      </div>
    </b-container>
  </div>
</template>

<script>
import Typography from "@/components/common/Typography/";
import * as animationData from "@/assets/lottie/error.json";
import Btn from "@/components/common/Buttons/";
export default {
  components: {
    Btn,
    Typography,
  },
  data() {
    return {
      defaultOptions: {animationData: animationData.default },
    };
  },
};
</script>

<style  scoped>
.route-box {
  width: 300px;
}
.message-text {
  position: relative;
  font-style: normal;
  font-weight: 300;
  font-family: "Poppins", sans-serif;
  font-size: 56px;
  line-height: 72px;
  margin-bottom: 50px;
  color: white;
}
.flex-col {
  position: relative;
  width: 50%;
}
.animation-box {
  width: 100%;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
}
.flex-col:first-child {
  padding-right: 15px;
}
.flex-col:last-child {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-left: 15px;
}
.flex-content {
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
}
.absolute-flex {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}
.error-section {
  width: 100%;
  position: relative;
  height: 100vh;
  background-color: #272727;
}
.logo-item {
  transform: 0.3s;
  margin-right: 12px;
}
.logo-box {
  height: 92px;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
}
.logo-text {
  font-style: normal;
  font-weight: bold;
  display: flex;
  align-items: center;
  color: white;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
}
.logo-text * {
  font-family: "abhayaLibre" !important;
}
@media screen and (max-width: 768px){
    .message-text{
        font-size: 36px;
        line-height: normal;
    }
    .flex-col:last-child{
        display: none;
    }
    .route-box{
        max-width: 80%;
    }
    .flex-col{width: 100%;}
}
</style>