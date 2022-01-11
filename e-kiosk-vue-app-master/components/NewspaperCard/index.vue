<template>
  <div v-if="data" class="cardBox" :class="{ special }">
    <div class="newspaper">
      <img v-if="data.coverImgPath" :src="data.coverImgPath" alt="" />
      <img v-else :src="require('@/assets/error/no-img.jpg')" alt="" />
      <div class="hide-box">
        <div class="bg-black"></div>
        <div class="absolute-heart" v-if="isAuth">
          <FavFillIcn
            @click="addfavorites"
            :color="isFavProp ? '#5387ED' : 'white'"
          />
        </div>
        <div class="absolute-button-box">
          <button class="btn-square" @click="openSubscribeModal(data)">
            Abunə ol
          </button>
          <button class="btn-square" @click="openNumberModal(data)">
            Nömrə al
          </button>
          <button
            class="btn-square"
            @click="$router.push('/newspaper-detail/' + data.id)"
          >
            Ətraflı bax
          </button>
          <button
            class="btn-square"
            v-if="!addBasket"
            @click="$router.push('/all-numbers/' + data.id)"
          >
            Bütün nömrələr
          </button>
          <button
            class="btn-square"
            v-if="addBasket && isAuth"
            @click="addBasketOrder(data.id, data.circulationId)"
          >
            Səbətə at
          </button>
        </div>
      </div>
    </div>
    <div class="special-title-newpaper" v-if="special">
      <Typography>
        {{ checkData(data.numberDate, true) }} / № {{ data.number }}
      </Typography>
    </div>
    <div
      class="title-newpaper"
      v-if="!special"
      :style="{
        color: titleColor ? titleColor : '#333333',
        opacity: opacityTitle ? opacityTitle : '1',
      }"
    >
      <Typography> {{ data.name }} </Typography>
    </div>
    <div
      class="description-newpaper"
      v-if="!special"
      :style="{
        color: descriptionColor ? descriptionColor : '#7f8c91',
        opacity: opacityDesc ? opacityDesc : '1',
      }"
    >
      <Typography> {{ checkData(data.numberDate) }} </Typography>
    </div>
  </div>
</template>

<script>
import FavFillIcn from "@/svgComponents/FavFill";
import Typography from "@/components/common/Typography/";
import { event } from "@/event/";
export default {
  props: [
    "source",
    "data",
    "special",
    "descriptionColor",
    "titleColor",
    "opacityDesc",
    "isFav",
    "opacityTitle",
    "addBasket",
  ],
  data() {
    return {
      isFavProp: false,
      weeksdays: [
        "Bazar",
        "Bazar ertəsi",
        "Çərşənbə axşamı",
        "Çərşənbə",
        "Cümə axşamı",
        "Cümə",
        "Şənbə",
      ],
      months: [
        "yanvar",
        "fevral",
        "mart",
        "aprel",
        "may",
        "iyun",
        "iyul",
        "avqust",
        "sentyabr",
        "oktyabr",
        "noyabr",
        "dekabr",
      ],
    };
  },
  mounted() {
    if (this.getFavsListId && this.getFavsListId.length > 0) {
      let index = this.getFavsListId.indexOf(this.data.id);
      index > -1 ? (this.isFavProp = true) : (this.isFavProp = this.isFav);
    }
  },
  watch: {
    getFavsListId(value) {
      if (value && value.length > 0) {
        let index = value.indexOf(this.data.id);
        index > -1 ? (this.isFavProp = true) : false;
      }
    },
  },
  components: {
    FavFillIcn,
    Typography,
  },
  methods: {
    addBasketOrder(id, circulationId) {
      let thisIs = this;
      this.$store
        .dispatch("auth/addBasket", {
          tarifId: 0,
          inBasket: true,
          circulationId: circulationId,
        })
        .then((res) => {
          this.isShowProp = false;
          setTimeout(() => {
            event.$emit("openFeedBack", {
              mode: "success",
              message: "Məhsul uğurla səbətə əlavə edildi",
            });
            thisIs.$store.dispatch("auth/getBasketList");
          }, 1500);
          
        })
        .catch((err) => {
          this.isShowProp = false;
          setTimeout(() => {
            event.$emit("openFeedBack", {
              mode: "error",
              message: "Xəta baş verdi, xaiş olunur tekrar cəhd edin.",
            });
          }, 1500);
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
    addfavorites() {
      this.isFavProp = !this.isFavProp;
      this.$store.dispatch("auth/addfavorites", {
        isFav: this.isFavProp,
        newspaperId: this.data.id,
      });
    },
    checkData(date, noDay) {
      let newDate = new Date(date);
      let weekDay = this.weeksdays[newDate.getDay()];
      let monthDay = newDate.getUTCDate();
      let years = newDate.getUTCFullYear();
      let month = this.months[newDate.getUTCMonth()];
      if (!noDay) {
        return `${weekDay}, ${monthDay} ${month}, ${years}`;
      } else {
        return `${monthDay} ${month}, ${years}`;
      }
    },
  },
  computed: {
    getFavsListId() {
      return this.$store.getters["auth/getFavsListId"];
    },
    isAuth() {
      return this.$store.getters["auth/isAuth"];
    },
  },
};
</script>

<style  scoped>
.absolute-heart {
  right: 10px;
  top: 10px;
  z-index: 9;
  font-size: 26px;
  cursor: pointer;
  position: absolute;
}
.cardBox.special .newspaper {
  padding: 0;
  height: 256px;
}
.cardBox.special .newspaper img {
  object-fit: cover;
}
.special-title-newpaper {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  opacity: 1 !important;
  color: #ffffff;
}
.cardBox:not(.special) .newspaper {
  min-width: 282px;
}
.newspaper {
  width: 100%;
  height: 384px;
  max-width: 100% !important;
  background-color: #ffffff;
  position: relative;
  margin-bottom: 16px;
  overflow: hidden;
  max-height: 384px;
  padding: 12px;
}
.newspaper:hover .hide-box {
  top: 0;
  opacity: 1;
  transition: 0.5s;
}
.newspaper .hide-box {
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  opacity: 0;
  z-index: 9;
  height: 100%;
  transition: 0.5s;
}
.newspaper .hide-box .bg-black {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 1;
  background-color: black;
  opacity: 0.5;
}
.btn-square {
  background: #5387ed;
  min-width: 158px;
  outline: none;
  border: none;
  color: white;
  align-items: center;
  text-align: center;
  font-style: normal;
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  font-size: 16px;
  height: 52px;
  cursor: pointer;
  transition: 0.3s;
  line-height: 20px;
  color: #ffffff;
  border-bottom: 1px solid rgb(243, 225, 225);
}
.btn-square:hover {
  filter: brightness(80%);
  transition: 0.3s;
}
.btn-square:last-child {
  border-bottom: none;
}
.newspaper .hide-box .absolute-button-box {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
}
.newspaper img {
  pointer-events: none;
  width: 100%;
  height: 100%;
}
.title-newpaper {
  font-family: "Gilroy";
  font-style: normal;
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 20px;
  color: #333333;
}
.description-newpaper {
  color: #7f8c91;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
}

@media screen and (max-width: 768px) {
  .newspaper {
    width: 184px;
    height: 248px !important;
    margin-bottom: 12px;
  }
  .title-newpaper {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }
  .description-newpaper {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #7f8c91;
  }
}
</style>