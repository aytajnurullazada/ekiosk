<template>
  <Modal @closed="$emit('closed'), (isShowProp = false)" :isShow="isShowProp">
    <div class="modal-box">
      <div class="absolute-close">
        <CloseSvg @click="$root.$emit('closeModal'), (isShowProp = false)" />
      </div>
      <div class="title-modal">
        <div class="left">
          <Typography> Qiymətləndir </Typography>
        </div>
      </div>
      <div class="flex-stars">
        <div class="stars-title">
          <Typography> Qiymətləndirmə: </Typography>
        </div>
        <div class="stars">
          <div class="star-item" v-for="(item, index) in 5" :key="index">
            <Star
              :color="selected && index < selected ? '#F69F29' : 'white'"
              @click="selected = ++index"
              ref="star"
              :key="index"
            />
          </div>
        </div>
        <div class="rate-text">
          <Typography>
            {{ selected }}
          </Typography>
        </div>
      </div>
      <div class="input-box">
        <!-- <div class="input-item">
          <InputHolder
            :transparent="true"
            v-model="name_surname"
            typeHolder="text"
            placeholder="Ad, soyad"
          />
        </div>
        <div class="input-item">
          <InputHolder
            :transparent="true"
            v-model="email"
            typeHolder="text"
            placeholder="E-mail"
          />
        </div> -->
        <div class="input-item" v-if="false">
          <textarea
            v-model="comment"
            placeholder="Şərhinizi əlavə edin"
            class="text-area"
          ></textarea>
        </div>
      </div>
      <div class="submit-box">
        <Btn @click="submit" mode="blue" style="height: 47px"> Göndər </Btn>
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
      comment: "",
      selected: 1,
    };
  },
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    submit() {
      let _this = this;
      let data = {
        comment: this.comment,
        newspaperId: this.$route.params.id,
        point: this.selected,
      };
      if (!this.getIsExpert) delete data["comment"];
      this.$store
        .dispatch("auth/addeval", data)
        .then((res) => {
          _this.$emit("closed");
          _this.isShowProp = false;
          setTimeout(() => {
            event.$emit("openFeedBack", {
              message:
                "Rəyiniz göndərildi, təsdiqləndikdən sonra sayta əlavə olunacaqdır.",
              mode: "success",
            });
          }, 1000);
        })
        .catch((err) => {
          _this.$emit("closed");
          _this.isShowProp = false;
          setTimeout(() => {
            event.$emit("openFeedBack", {
              message: "Xəta baş verdi, xaiş olunur tekrar cəhd edin.",
              mode: "error",
            });
          }, 1000);
        });
    },
  },
  computed: {
    getIsExpert() {
      return this.$store.getters["auth/getIsExpert"];
    },
  },
  watch: {
    isShow(value) {
      this.isShowProp = value;
    },
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
.text-area {
  width: 100%;
  background-color: transparent;
  outline: none !important;
  font-weight: 300;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  border-radius: 0 !important;
  border: 1px solid #505050;
  padding: 16px;
  height: 120px;
  resize: none;
}
.text-area::placeholder {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #858585;
}
.input-item {
  margin-bottom: 16px;
}
.stars {
  display: flex;
  align-items: center;
  margin-top: -5px;
}
.star-item {
  font-size: 16px;
  cursor: pointer;
  margin-right: 6px;
}
.star-item:last-child {
  margin-right: 12px;
}
.flex-stars {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  position: relative;
  width: 100%;
}
.stars-title {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #ffffff;
  margin-right: 12px;
}
.modal-box {
  width: 376px;
  background-color: #272727;
  padding: 32px;
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
.rate-text {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.2px;
  color: #ffffff;
}
@media screen and (max-width: 500px) {
  .modal-box {
    width: 288px;
  }
}
</style>