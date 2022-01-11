<template>
  <Modal @closed="$emit('closed'), (isShowProp = false)" :isShow="isShowProp">
    <div class="modal-box">
      <div class="absolute-close">
        <CloseSvg @click="$root.$emit('closeModal')" />
      </div>
      <div class="title-modal">
        <div class="left">
          <Typography> Abunə ol </Typography>
        </div>
      </div>
      <div class="button-box">
        <div
          class="button-item"
          v-for="(item, index) in getTariffList"
          :key="index"
        >
          <Btn
            @click="submit(item.id)"
            :transparent="index != 1"
            :mode="index == 1 ? 'blue' : 'dark'"
          >
            {{ item.description }}</Btn
          >
        </div>
      </div>
    </div>
  </Modal>
</template>

<script>
import Modal from "@/components/common/Modal/";
import InputHolder from "@/components/common/InputHolder/";
import Star from "@/svgComponents/Star";
import Btn from "@/components/common/Buttons/IconBtn";
import Typography from "@/components/common/Typography/";
import CloseSvg from "@/svgComponents/Close";
import { event } from "@/event/";
export default {
  data() {
    return {
      isShowProp: false,
      id: null,
      circulationId: null,
    };
  },
  methods: {
    submit(id) {
      let thisIs = this;
      this.$store
        .dispatch("auth/addBasket", {
          tarifId: id,
          inBasket: true,
          circulationId: this.circulationId,
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
  },
  computed: {
    getTariffList() {
      return this.$store.getters["common/getTariffList"];
    },
  },
  mounted() {
    let _this = this;
    event.$on("openSubscribeModal", function (payload) {
      _this.$store.dispatch("common/fetchTariff", payload.id);
      _this.id = payload.id;
      _this.circulationId = payload.circulationId;
      _this.isShowProp = true;
    });
  },
  components: {
    Modal,
    InputHolder,
    Star,
    Btn,
    CloseSvg,
    Typography,
  },
};
</script>

<style scoped>
.button-item {
  margin-bottom: 16px;
}
.button-item:last-child {
  margin-bottom: 0;
}
.modal-box {
  width: 333px;
  background-color: #272727;
  padding: 40px;
  position: relative;
}
.title-modal {
  width: 100%;
  margin-bottom: 32px;
  display: flex;
  align-items: center;
}
.title-modal .left {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
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