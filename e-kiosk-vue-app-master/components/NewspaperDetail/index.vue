<template>
  <div class="auth-box">
    <div class="left-box">
      <div class="left-content">
        <div class="nav-left-menu">
          <ul>
            <!-- <li>
              <Typography> Jurnallar </Typography>
            </li> -->
            <li>
              <Typography @click="$router.push('/all-newspapers')">
                Qəzetlər
              </Typography>
            </li>
          </ul>
        </div>
        <div class="mail-box" @click="$router.push('/contact')">
          <MailIcon />
        </div>
      </div>
    </div>
    <div class="flex-auth-box">
      <div class="col-auth">
        <div class="auth-content-box">
          <div class="flex-detail">
            <div class="gallery-box">
              <div class="show-box">
                <img :src="gallery[selectedImg]" alt="" />
              </div>
              <b-row>
                <div class="flex-mini-gallery" v-if="getDetail">
                  <div
                    class="flex-mini-item"
                    :class="{ active: selectedImg == index }"
                    @click="selectedImg = index"
                    v-for="(item, index) in gallery"
                    :key="index"
                  >
                    <img :src="item" alt="" />
                  </div>
                </div>
              </b-row>
            </div>
            <div class="right-content">
              <div class="right-title" v-if="getDetail">
                <Typography> {{ getDetail.name }}</Typography>
              </div>
              <div class="title-after-flex">
                <div class="rate-text">
                  <Typography> {{ allRate }} </Typography>
                </div>
                <div class="rate-stars">
                  <StarSvg
                    :color="index + 1 > allRate ? 'white' : '#F69F29'"
                    v-for="(item, index) in 5"
                    :key="index"
                  />
                </div>
                <div class="right-text" v-if="getRatings">
                  <Typography tag="p">
                    {{ getRatings.allRate }} qiymətləndirmə və
                    <span> {{ getComments.length }} rəy</span>
                  </Typography>
                </div>
              </div>
              <div class="price-box">
                <div class="price-text">
                  <Typography>Qiymət: </Typography>
                </div>
                <div class="price" v-if="getDetail">
                  <Typography>{{ getDetail.price }} AZN</Typography>
                </div>
              </div>
              <div class="about-of-newspaper" v-if="getDetail">
                <Typography>
                  {{ getDetail.content }}
                </Typography>
              </div>

              <div class="flex-btn">
                <div class="btn-item blue">
                  <Btn mode="blue" @click="openSubscribeModal(getDetail)">
                    <template v-slot:icon>
                      <BasketSvg />
                    </template>
                    Abunə ol
                  </Btn>
                </div>
                <div class="btn-item dark">
                  <Btn mode="dark" @click="openNumberModal(getDetail)">
                    <template v-slot:icon>
                      <HashSvg />
                    </template>
                    Nömrə al
                  </Btn>
                </div>
                <div class="btn-item standart-width">
                  <Btn
                    @click="addFav(getDetail.id)"
                    :mode="isFav ? 'blue' : 'dark'"
                    :onlyIcon="true"
                  >
                    <template v-slot:icon>
                      <FavSvg />
                    </template>
                  </Btn>
                </div>
                
               <ShareBox/>
 
                <div class="btn-item standart-width" v-if="getToken">
                  <Btn :loader="1500" @click="showNotfication(getDetail.id)" :mode="hasNotDetail ? 'blue' : 'dark'" :onlyIcon="true">
                    <template v-slot:icon>
                      <NotficationSvg />
                    </template>
                  </Btn>
                </div>

               

                <div class="btn-item standart-width" v-if="getDetail && getDetail.filePath">
                  <Btn @click="$router.push('/view/'+getDetail.id)" :mode="hasNotDetail ? 'blue' : 'dark'" :onlyIcon="true">
                    <template v-slot:icon>
                      <EyeOpenSvg color="white"/>
                    </template>
                  </Btn>
                
                </div>




              </div>
            </div>
          </div>
          <InfoTable :data="getTableData" />
          <Comments :data="getComments" />
          <div class="view-all" v-if="getNumberArchive.length > 0">
            <div class="title-view-all">
              <Typography>Nömrələrin arxivi</Typography>
            </div>
            <div
              class="right-view"
              @click="$router.push('/all-numbers/' + getDetail.id)"
            >
              <Typography>Hamısına bax</Typography>
              <ArrowRight color="white" />
            </div>
          </div>
          <b-row>
            <div class="flex-box">
              <div
                class="flex-col"
                v-for="(item, index) in getNumberArchive"
                :key="index"
              >
                <NewspaperCard :special="true" :data="item" />
              </div>
            </div>
          </b-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { event } from "@/event/";
import ShareBox from './ShareBox';
import Typography from "@/components/common/Typography/";
import InputHolder from "@/components/common/InputHolder/";
import MailIcon from "@/svgComponents/Mail";
import BasketSvg from "@/svgComponents/Basket/";
import Btn from "@/components/common/Buttons/IconBtn";
import ShareSvg from "@/svgComponents/Share";
import HashSvg from "@/svgComponents/Hash";
import NewspaperCard from "@/components/NewspaperCard/";
import StarSvg from "@/svgComponents/Star";
import FavSvg from "@/svgComponents/Fav";
import ArrowRight from "@/svgComponents/ArrowRight";
import NewspapersGrid from "@/components/NewspapersGrid/";
import InfoTable from "./InfoTable";
import Comments from "./Comments";
import NotficationSvg from "@/svgComponents/Notfication";
import EyeOpenSvg from "@/svgComponents/EyeOpen";
export default {
  components: {
    InputHolder,
    EyeOpenSvg,
    Typography,
    NotficationSvg,
    ShareBox,
    NewspaperCard,
    Btn,
    ArrowRight,
    MailIcon,
    FavSvg,
    Comments,
    NewspapersGrid,
    InfoTable,
    HashSvg,
    ShareSvg,
    StarSvg,
    BasketSvg,
  },
  data() {
    return {
      hasNotDetail: false,
      selectedImg: 0,
      allRate: 0,
      isFav: false,
    };
  },
  methods: {
    showNotfication(id){
      this.hasNotDetail = !this.hasNotDetail;
      this.$store.dispatch('auth/hasNotf', {newspaperId: id,isSubscribed: this.hasNotDetail});
    },
    checkFav(list) {
      let index = list.indexOf(parseInt(this.$route.params.id));
      index > -1 ? (this.isFav = true) : false;
    },
    addFav(id) {
      this.isFav = !this.isFav;
      this.$store.dispatch("auth/addfavorites", {
        isFav: this.isFav,
        newspaperId: id,
      });
    },
    openSubscribeModal(data) {
      event.$emit("openSubscribeModal", {
        id: data.id,
        circulationId: data.circulationId,
      });
    },
    openNumberModal(data) {
      this.$store.dispatch("common/fetchNumberList", {
        circulationId: data.circulationId,
        id: data.id,
      });
    },
  },
  watch: {
    getDetail(value){
      if(value) this.hasNotDetail = value.hasNot;
    },
    getFavsListId(value) {
      this.checkFav(value);
    },
    getRatings(value) {
      if (value && value.allRateNumbers) {
        this.allRate = this.$calcRaitings(value.allRateNumbers);
      }
    },
  },
  computed: {
    getToken(){
       return this.$store.getters["auth/getToken"];
    },
    getFavsListId() {
      return this.$store.getters["auth/getFavsListId"];
    },
    getComments() {
      return this.$store.getters["newspaper-detail/getComments"];
    },
    getNumberArchive() {
      return this.$store.getters["newspaper-detail/getNumberArchive"];
    },
    getDetail() {
      return this.$store.getters["newspaper-detail/getDetail"];
    },
    getRatings() {
      return this.$store.getters["newspaper-detail/getRatings"];
    },
    getTableData() {
      let data = this.$store.getters["newspaper-detail/getDetail"];
      if (data) {
        return [
          { key: "Baş redaktor", value: data.editorInChief },
          { key: "Nəşriyyat", value: data.publishing },
          { key: "Çap tarixi", value: data.numberDate, date: true },
          { key: "Qəzetin səhifə sayı", value: data.pageRange },
          { key: "Redaksiyanın ünvanı", value: data.address },
          { key: "Sosial şəbəkə", value: data.socialNetwork1 },
          { key: "Qəzetin saytı", value: data.webSite, link: true },
          { key: "E-mail ünvanı", value: data.email },
          { key: "Əlaqə nömrələri", value: data.contactNumber1 },
        ];
      } else {
        return [];
      }
    },
    gallery() {
      let data = this.$store.getters["newspaper-detail/getDetail"];
      if (data) {
        return [
          data.coverImgPath,
          data.imgPathFourth,
          data.imgPathSecond,
          data.imgPathThird,
        ];
      } else {
        return [];
      }
    },
  },
};
</script>

<style  scoped>
.right-view {
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
  margin-left: auto;
  cursor: pointer;
  color: #ffffff;
}
.flex-box {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0;
}
.flex-col {
  width: 20%;
  padding-left: 12px;
  padding-right: 12px;
  margin-bottom: 40px;
}
.right-view svg {
  font-size: 32px;
  margin-left: 16px;
}
.view-all {
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 51px;
}
.title-view-all {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  display: flex;
  align-items: center;
  color: #ffffff;
}
.standart-width {
  width: 56px;
}
.flex-btn {
  display: flex;
  align-items: center;
}
.flex-detail {
  margin-bottom: 64px;
}
.btn-item {
  margin-right: 12px;
  position: relative;
}

.btn-item.blue,
.btn-item.dark {
  width: 157px;
}
.about-of-newspaper {
  width: 100%;
  position: relative;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 28px;
  color: #ffffff;
  margin-bottom: 34px;
}
.price-box {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}
.price-text {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 34px;
  margin-right: 12px;
  color: #ffffff;
}
.price-box .price {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  color: #ffffff;
}
.right-content {
  width: 100%;
}
.right-title {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  margin-bottom: 14px;
  line-height: 42px;
  color: #ffffff;
}
.right-text p {
  margin: 0;
}
.right-text {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
}
.right-text span {
  border-bottom: 1px solid white;
  cursor: pointer;
}
.rate-stars {
  display: flex;
  align-items: center;
  position: relative;
  font-size: 12px;
  margin-right: 12px;
}
.rate-stars svg:not(:last-child) {
  margin-right: 8px;
}
.title-after-flex {
  display: flex;
  align-items: center;
  margin-bottom: 26px;
  position: relative;
  width: 100%;
}
.rate-text {
  margin-right: 8px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
}
.flex-mini-gallery {
  display: flex;
  position: relative;
  align-items: center;
  padding: 0;
  padding-right: 8px;
  padding-left: 8px;
}
.flex-mini-item {
  height: 80px;
  width: 100%;
  position: relative;
  cursor: pointer;
  padding-left: 4px;
  padding-right: 4px;
}
.flex-mini-item.active img {
  border: 2px solid #5387ed;
}
.flex-mini-item img {
  width: 100%;
  height: 100%;
}
.gallery-box {
  margin-right: 24px;
  width: 282px;
  min-width: 282px;
  position: relative;
}
.show-box {
  width: 100%;
  padding: 8px;
  background-color: white;
  height: 400px;
  margin-bottom: 12px;
}
.show-box img {
  width: 100%;
  height: 100%;
  position: relative;
  object-fit: cover;
}
.flex-detail {
  width: 100%;
  display: flex;
  position: relative;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transition: 0.6s;
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

.show-mobile {
  display: none;
}
.get-register {
  display: none;
}
@media screen and (max-width: 1199px) {
  .col-auth {
    padding: 50px !important;
  }
  .flex-col {
    display: flex;
    justify-content: center;
    width: 50%;
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
  .auth-box {
    padding-left: 0;
  }
}
@media screen and (max-width: 1199px) {
  .left-box {
    display: none;
  }
}
@media screen and (max-width: 991px) {
  .btn-item.blue,
  .btn-item.dark {
    width: 50%;
    margin-right: 0;
    padding-right: 6px;
    margin-bottom: 24px;
  }
  .btn-item {
    margin-right: 0;
    margin-left: 0;
  }
  .btn-item.dark {
    padding-left: 6px;
    margin-right: 0;
    padding-right: 0;
  }
  .flex-btn {
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
@media screen and (max-width: 768px) {
  .flex-detail {
    flex-wrap: wrap;
  }
  .right-title {
    font-size: 24px;
  }
  .price-box .price,
  .price-text {
    font-size: 24px;
  }
  .about-of-newspaper {
    margin-bottom: 40px;
  }
  .flex-detail {
    margin-bottom: 60px;
  }
  .gallery-box {
    margin-bottom: 40px;
    width: 100%;
    margin-right: 0;
  }
  .show-box {
    display: flex;
    justify-content: center;
    position: relative;
  }
  .show-box img {
    width: 272px;
  }
  .title-after-flex {
    flex-wrap: wrap;
    margin-bottom: 16px;
  }
  .right-text {
    width: 100%;
    margin-top: 12px;
  }
  .title-view-all {
    position: relative;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 28px;
    color: #ffffff;
  }
  .right-view span {
    display: none;
  }
  .view-all {
    padding-top: 60px;
    padding-bottom: 32px;
  }
  .title-view-all::after {
    content: "";
    width: 40%;
    position: absolute;
    bottom: -10px;
    height: 1px;
    background-color: white;
  }
}
@media screen and (max-width: 500px) {
  .col-auth {
    padding: 0 !important;
    padding-top: 40px !important;
    padding-bottom: 72px !important;
    width: 100%;
  }
  .flex-col {
    width: 100%;
    display: flex;
    justify-content: center;
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
  .b-tabs-menu {
    margin-bottom: 40px;
  }
}
</style>