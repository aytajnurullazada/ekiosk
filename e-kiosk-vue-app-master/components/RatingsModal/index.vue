<template>
  <Modal @closed="$emit('closed'), isShowProp = false" :isShow="isShowProp">
    <div class="modal-box" v-if="data">
      <div class="absolute-close">
        <CloseSvg @click="$root.$emit('closeModal')" />
      </div>
      <div class="title-modal" >
        <div class="left">
          <div class="text-one">
            <Typography>{{$calcRaitings(data.allRateNumbers)}}</Typography>
          </div>
          <Typography> Ortalama reytinq </Typography>
        </div>
      </div>
      <div class="box-progress">
        <div
          class="flex-progress"
          v-for="(item, index) in handleRatings"
          :key="index"
        >
          <div class="rate-text">
            <Typography> {{ item.count }} </Typography>
          </div>
          <div class="stars-box-flex">
            <div
              class="star-item"
              v-for="(item, index) in item.count"
              :key="index"
            >
              <Star color="#F69F29" ref="star" />
            </div>
            <div
              class="star-item"
              v-for="(item, index) in 5 - item.count"
              :key="index + Math.random()"
            >
              <Star color="white" ref="star" :key="index" />
            </div>
          </div>
          <div class="progress-bar">
            <div class="progress" :style="{width: item.percent + '%'}"></div>
          </div>
          <div class="right-text">
            <Typography> {{ item.value }} </Typography>
          </div>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script>
import Modal from "@/components/common/Modal/";
import InputHolder from "@/components/common/InputHolder/";
import Star from "@/svgComponents/Star";
import BasketSvg from "@/svgComponents/Basket";
import Select from "@/components/common/Select/";
import Btn from "@/components/common/Buttons/IconBtn";
import Typography from "@/components/common/Typography/";
import CloseSvg from "@/svgComponents/Close";
export default {
  data() {
    return {
      name_surname: "",
      comment: "",
      selected: 0,
      email: null,
      isShowProp: false,
      handleRatings: [],
    };
  },
  watch: {
    isShow(value){
      this.isShowProp = value;
    },
    data(value) {
      this.setRatings(value);
    },
  },
  methods: {
    percentCalc(count, percent) {
      return ((count / percent) * 100).toFixed(0);
    },
    setRatings(value) {
      let data = [
        {
          count: 5,
          value: 0,
          percent: 0,
        },
        {
          count: 4,
          value: 0,
          percent: 0,
        },
        {
          count: 3,
          value: 0,
          percent: 0,
        },
        {
          count: 2,
          value: 0,
          percent: 0,
        },
        {
          count: 1,
          value: 0,
          percent: 0,
        },
      ];

      let star_1 = value.allRateNumbers.findIndex((i) => i.count == 1);
      let star_2 = value.allRateNumbers.findIndex((i) => i.count == 2);
      let star_3 = value.allRateNumbers.findIndex((i) => i.count == 3);
      let star_4 = value.allRateNumbers.findIndex((i) => i.count == 4);
      let star_5 = value.allRateNumbers.findIndex((i) => i.count == 5);

      if (star_5 > -1) {
        data[0].value = value.allRateNumbers[star_5].value;
        data[0].percent = this.percentCalc(
          value.allRateNumbers[star_5].count *
            value.allRateNumbers[star_5].value,
          value.allRate
        );
      } else {
        data[0].value = 0;
      }
      if (star_4 > -1) {
        data[1].value = value.allRateNumbers[star_4].value;
        data[1].percent = this.percentCalc(
          value.allRateNumbers[star_4].count *
            value.allRateNumbers[star_4].value,
          value.allRate
        );
      } else {
        data[1].value = 0;
      }
      if (star_3 > -1) {
        data[2].value = value.allRateNumbers[star_3].value;
        data[2].percent = this.percentCalc(
          value.allRateNumbers[star_3].count *
            value.allRateNumbers[star_3].value,
          value.allRate
        );
      } else {
        data[2].value = 0;
      }
      if (star_2 > -1) {
        data[3].value = value.allRateNumbers[star_2].value;
        data[3].percent = this.percentCalc(
          value.allRateNumbers[star_2].count *
            value.allRateNumbers[star_2].value,
          value.allRate
        );
      } else {
        data[3].value = 0;
      }
      if (star_1 > -1) {
        data[4].value = value.allRateNumbers[star_1].value;
        data[4].percent = this.percentCalc(
          value.allRateNumbers[star_1].count *
            value.allRateNumbers[star_1].value,
          value.allRate
        );
      } else {
        data[4].value = 0;
      }

      this.handleRatings = data;
    },
  },
  props: ["data", 'isShow'],
  computed: {
    fetchNumber() {
      return [
        { id: 1, name: "#2929393" },
        { id: 2, name: "#1929393" },
        { id: 3, name: "#3929393" },
        { id: 4, name: "#6929393" },
      ];
    },
  },
  components: {
    Modal,
    BasketSvg,
    Select,
    InputHolder,
    Star,
    Btn,
    CloseSvg,
    Typography,
  },
};
</script>

<style scoped>
.progress-bar {
  width: 146px;
  background: #cbcbcb;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  margin-right: 12px;
  height: 6px;
}
.progress {
  width: 0px;
  max-width: 100%;
  height: 100%;
  background-color: #f69f29;
  border-radius: 10px;
}
.flex-progress {
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
}
.right-text {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  text-align: right;
  letter-spacing: 0.2px;
  color: #ffffff;
  margin-left: auto;
}
.stars-box-flex {
  display: flex;
  margin-top: -3px;
  margin-right: 12px;
  align-items: center;
  position: relative;
}
.stars-box-flex .star-item {
  font-size: 12px;
  margin-right: 4px;
}
.star-item:last-child {
  margin-right: 0;
}
.rate-text {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  margin-right: 8px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #ffffff;
}
.text-one {
  margin-right: 13px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.2px;
  color: #ffffff;
}

.modal-box {
  width: 330px;
  background-color: #272727;
  padding: 24px;
  position: relative;
  padding-top: 50px;
}
.title-modal {
  width: 100%;
  margin-bottom: 13px;
  display: flex;
  align-items: center;
}
.title-modal .left {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  display: flex;
  align-items: center;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
  padding-right: 14px;
}
.absolute-close {
  position: absolute;
  font-size: 24px;
  cursor: pointer;
  right: 16px;
  top: 16px;
}
@media screen and (max-width: 500px) {
  .modal-box {
    width: 288px;
  }
}
</style>