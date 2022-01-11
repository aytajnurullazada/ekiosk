<template>
  <div class="auth-box">
    <div class="left-box">
      <div class="left-content">
        <div class="nav-left-menu">
          <ul>
            <li>
              <Typography> Çıxış </Typography>
            </li>
            <li>
              <Typography> Əsas səhifə </Typography>
            </li>
          </ul>
        </div>
        <div class="mail-box" @click="$router.push('/contact')">
          <MailIcon />
        </div>
      </div>
    </div>
    <div class="head-title">
      <Typography tag="p">Şirkətlər üçün</Typography>
    </div>
    <div class="flex-auth-box">
      <div class="col-auth">
        <div class="auth-content-box">
          <div class="box-content">
            <FlexBox
              title="Korporativ əməkdaşlıq"
              :src="require('@/assets/images/work.png')"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio nunc
              scelerisque a, ut viverra enim. Et varius quisque id nec mauris.
              Placerat proin leo nulla ut nibh viverra. Nulla tristique tellus
              porttitor eu auctor pretium. Sed sit ridiculus diam morbi sodales
              eleifend. Fermentum elementum iaculis sed in pretium sociis morbi.
              Amet diam ipsum sit morbi volutpat lacus in consequat elementum.
              Gravida parturient a, ornare arcu ut amet tristique fringilla
              aliquet. Eget vitae neque nunc leo vel sem egestas mi morbi. In
              diam proin massa pellentesque ultricies molestie egestas libero
              elit. Consectetur blandit urna, ultrices nunc in commodo, ipsum.
              Egestas eu cras netus purus enim. Feugiat viverra mi pharetra,
              scelerisque. Suscipit velit.
            </FlexBox>
          </div>
          <div class="box-content">
            <FlexBox
              :reverse="true"
              title="Şirkətlər üçün abunə şərtləri"
              :src="require('@/assets/images/newspaper-banner.png')"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra
              pulvinar at rhoncus est magna. Nibh amet eget condimentum semper
              et neque praesent massa odio. In adipiscing dignissim vestibulum
              dolor bibendum neque, sem. Dictumst interdum non felis adipiscing
              blandit dis feugiat ac at. Venenatis, a nulla egestas tortor
              aenean et. Sed nunc nunc, duis vel habitasse pulvinar commodo.
              Sociis cursus nulla ullamcorper vivamus a quis ut convallis. Duis
              interdum dolor non dictum in vel sed. Feugiat pellentesque est
              ultricies amet, donec in netus. Arcu vel id arcu gravida in
              sollicitudin ut sem integer. Massa suspendisse nunc, at
              ullamcorper faucibus. Sed iaculis vitae aenean viverra tortor
              volutpat ipsum etiam. Libero, dignissim quis fringilla aliquet
              pharetra leo in ut nulla. Amet amet lobortis.
            </FlexBox>
          </div>
          <div class="bottom-content">
            <div class="flex-center-box">
              <div class="title-fcb">
                <Typography tag="p">Niyə bizimlə əməkdaşlıq?</Typography>
              </div>
              <div class="desc-fcb">
                <Typography tag="p"
                  >We are an industry-leading company that values honesty,
                  integrity, and efficiency. Building quality products <br />
                  and caring for the users are what made us stand out since the
                  beginning.</Typography
                >
              </div>
            </div>
            <div class="banner-box">
              <img src="@/assets/images/forCompany.png" alt="" />
              <div class="absolute-blue-box">
                <Typography tag="p">
                  “We strive to work closely together with our customers in
                  solving their problems. We value honesty, integrity, and
                  efficiency”
                </Typography>
              </div>
            </div>
            <div class="bottom-grid-box">
              <div class="col-flex">
                <div class="circle-flex-col">
                    <div class="bg"></div>
                    <FavIcn color="#5387ED"/>
                </div>
                <div class="right-flex-text">
                 <Typography tag="span">
                   Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit. Eu ridiculus quis vestibulum <br> egestas facilisis diam odio. In adipiscing eget
                 </Typography>
                </div>
              </div>
               <div class="col-flex">
                <div class="circle-flex-col">
                    <div class="bg"></div>
                    <LightningIcn color="#5387ED"/>
                </div>
                <div class="right-flex-text">
                 <Typography tag="span">
                   Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit. Eu ridiculus quis vestibulum <br> egestas facilisis diam odio. In adipiscing eget
                 </Typography>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Typography from "@/components/common/Typography/";
import InputHolder from "@/components/common/InputHolder/";
import MailIcon from "@/svgComponents/Mail";
import FlexBox from "./FlexBox";
import FavIcn from '@/svgComponents/Fav';
import LightningIcn from '@/svgComponents/Lightning';
export default {
  components: {
    FavIcn,
    InputHolder,
    LightningIcn,
    FlexBox,
    Typography,
    MailIcon,
  },
  data() {
    return {};
  },
};
</script>

<style  scoped>
.circle-flex-col {
  width: 78px;
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: center;
  height: 78px;
  border-radius: 50%;
  font-size: 31px;
  position: relative;
  min-width: 78px;
  margin-right: 24px;
}
.right-flex-text{
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: #FFFFFF;
  opacity: 0.7;
}
.circle-flex-col svg{
  position: relative;
  z-index: 9999;
}
.circle-flex-col .bg{
  width: 100%;
  height: 100%;
  position: absolute;
  background: #848484;
  opacity: 0.4;
  left: 0;
  top: 0;
}
.bottom-grid-box {
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
}
.bottom-grid-box .col-flex {
  width: 50%;
  position: relative;
  display: flex;
  align-items: center;
}
.bottom-grid-box .col-flex:first-child{
  padding-right: 15px;
}
.bottom-grid-box .col-flex:last-child{
  padding-left: 15px;
}
.title-fcb {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;
  margin-bottom: 32px;
  text-align: center;
  color: #ffffff;
}
.banner-box {
  width: 100%;
  margin-bottom: 60px;
  height: 591px;
  position: relative;
}
.banner-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.title-fcb *,
.desc-fcb * {
  margin: 0;
}
.desc-fcb {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  padding-bottom: 40px;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
  color: #ffffff;
}
.box-content:not(:last-child) {
  margin-bottom: 100px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transition: 0.6s;
}
.absolute-blue-box {
  width: 744px;
  position: absolute;
  max-width: 100%;
  padding-left: 45px;
  padding-right: 45px;
  padding-top: 40px;
  background: #5387ed;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  bottom: 0;
  left: 0;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  color: #ffffff;
  padding-bottom: 40px;
}
.absolute-blue-box * {
  opacity: 0.7;
}
.b-tabs-menu {
  width: 100%;
  display: flex;
  overflow: auto;
  height: 56px;
  margin-bottom: 56px;
}
.tabs-item {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  cursor: pointer;
  font-size: 18px;
  line-height: 22px;
  height: 100%;
  white-space: nowrap;
  display: flex;
  align-items: center;
  color: #ffffff;
  position: relative;
  margin-right: 38px;
}
.tabs-item span {
  cursor: pointer;
  position: relative;
}
.tabs-item::after {
  content: "";
  position: absolute;
  bottom: 0px;
  opacity: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0%;
  height: 1px;
  transition: 0.3s;
  background-color: #5387ed;
}
.tabs-item.active::after {
  width: 100%;
  transition: 0.3s;
  opacity: 1;
}
.nav-left-menu {
  height: 100%;
  width: 120px;
  position: absolute;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  transition: 0.5s;
  bottom: 92px;
  z-index: 9999;
}
.nav-left-menu ul {
  padding: 0;
  margin: 0;
  writing-mode: vertical-rl;
  transform: rotate(-180deg);
  justify-content: center;
  display: flex;
  vertical-align: baseline;
}
.nav-left-menu ul li {
  list-style: none;
  margin-top: 56px;
  white-space: nowrap;
  position: relative;
  cursor: pointer;
  font-style: normal;
  font-weight: 300;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
}
.nav-left-menu ul li:hover::before {
  height: 100%;
  transition: 0.3s;
}
.nav-left-menu ul li:before {
  writing-mode: vertical-rl;
  transform: rotate(-180deg);
  vertical-align: baseline;
  left: -5px;
  transition: 0.3s;
  opacity: 0.6;
  height: 0%;
  width: 1px;
  bottom: 0;
  content: "";
  position: absolute;
  background-color: white;
}
.left-box {
  position: absolute;
  width: 120px;
  height: 646px;
  top: 0;
  display: flex;
  left: 0;
}
.left-content {
  width: 100%;
  position: relative;
  margin-top: auto;
  height: 100px;
}
.mail-box {
  width: 100%;
  height: 92px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #505050;
  border-left: none;
  transition: 0.3s;
  border-right: none;
  font-size: 32px;
}
.mail-box:hover {
  background-color: #464646;
  transition: 0.3s;
}
.button-box {
  width: 100%;
}
.absolute-blue-box * {
  margin: 0;
}
.forgot-password {
  font-family: "Roboto", sans-serif;
  padding-top: 16px;
  margin-bottom: 56px;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
}

.auth-content-box {
  width: 100%;
}
.flex-auth-box {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
}
.flex-auth-box::after {
  position: absolute;
  height: 100%;
  content: "";
  top: 0;
  left: -1px;
  width: 1px;
  background-color: #505050;
}
.col-auth {
  padding-top: 88px;
  padding-bottom: 88px;
  min-height: 100vh;
  width: 100%;
  background-color: #1a1a1a;
  position: relative;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
}
.auth-box {
  position: relative;
  width: 100%;
  padding-left: 120px;
  background-color: #1a1a1a;
}
.head-title * {
  margin: 0;
}
.head-title {
  display: flex;
  align-items: center;
  padding-left: 102px;
  padding-right: 102px;
  border-right: none;
  border: 1px solid #505050;
  border-left: none;
  height: 248px;
  position: relative;
  border-right: none;
  font-style: normal;
  font-weight: 300;
  font-family: "Poppins", sans-serif;
  font-size: 72px;
  line-height: 72px;
  color: white;
}
.show-mobile {
  display: none;
}
.head-title::after {
  position: absolute;
  top: 0;
  width: 1px;
  left: -1px;
  height: 100%;
  background-color: #505050;
  content: "";
}
.get-register {
  display: none;
}
@media screen and (max-width: 1199px) {
  .col-auth {
    padding: 50px !important;
  }
  .get-register {
    display: block;
    width: 100%;
    padding-top: 32px;
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 48px;
    text-align: center;
    color: #ffffff;
  }
  .get-register span {
    font-weight: 500;
    border-bottom: 1px solid white;
  }
  .head-title {
    padding-left: 50px;
    padding-right: 50px;
  }
  .head-title {
    font-size: 50px;
  }
  .auth-box {
    padding-left: 0;
  }
}
@media screen and (max-width: 1199px) {
  .left-box {
    display: none;
  }
}
@media screen and (max-width: 500px) {
  .box-content:not(:last-child) {
    margin-bottom: 40px;
  }
  .bottom-grid-box {
    display: none;
  }
  .title-fcb {
    font-weight: 500;
    font-size: 24px;
    max-block-size: 32px;
    line-height: 28px;
  }
  .desc-fcb {
    font-weight: 300;
    font-size: 16px;
    padding-bottom: 0;
    line-height: 28px;
    margin-bottom: 32px;
  }
  .head-title {
    height: 115px;
    font-size: 30px;
    display: flex;
    padding-left: 16px;
    padding-right: 16px;
    align-items: center;
    justify-content: center;
  }
  .banner-box {
    height: auto;
  }
  .banner-box img {
    height: 200px;
  }
  .absolute-blue-box {
    position: relative;
    padding-top: 16px;
    line-height: 16px;
    padding-bottom: 16px;
    font-size: 14px;
    padding-left: 24px;
    padding-right: 24px;
  }
  .col-auth {
    padding: 0 !important;
    padding-top: 40px !important;
    padding-bottom: 72px !important;
    width: 100%;
  }
  .flex-auth-box {
    padding-left: 16px;
    padding-right: 16px;
  }
  .flex-auth-box::after {
    display: none;
  }
  .col-auth::after {
    display: none !important;
  }
  .banner-box {
    margin-bottom: 0;
  }
  .b-tabs-menu {
    margin-bottom: 40px;
  }
}
</style>