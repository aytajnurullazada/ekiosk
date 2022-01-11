<template>
  <Modal @closed="$emit('closed'), (isShowProp = false), selectedData = null" :isShow="isShowProp">
    <div class="modal-box">
      <div class="absolute-close">
        <CloseSvg @click="$root.$emit('closeModal')" />
      </div>
      <div class="title-modal">
        <div class="left">
          <Typography> Nömrə al </Typography>
        </div>
      </div>
      <div class="desc-modal">
        <Typography>
          Zəhmət olmasa almaq istədiyiniz buraxılış nömrəsini seçin. Əgər
          buraxılışın nömrəsini bilmirsinizsə
          <span
            class="border-span"
            @click="
              (isShowProp = false),
                $emit('closed'),
                selectedData = null,
                $router.push('/all-numbers/' + id)
            "
            >bütün nömrələr</span
          >
          səhifəsinə keçin
        </Typography>
      </div>
      <div class="select-box">
        <Select
          placeholder="Buraxılış nömrəsi"
          selectKey="value"
          :transparent="true"
          @selected="selected($event)"
          :data="getNumbers"
        />
      </div>
      <div class="button-box">
        <div class="button-item">
          <Btn @click="submit" mode="blue">
            <template v-slot:icon>
              <BasketSvg />
            </template>
            Buraxılış nömrəsi
          </Btn>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script>
import Modal from "@/components/common/Modal/";
import InputHolder from "@/components/common/InputHolder/";
import Select from "@/components/common/Select/";
import { event } from "@/event/";
import Btn from "@/components/common/Buttons/IconBtn";
import Typography from "@/components/common/Typography/";
import CloseSvg from "@/svgComponents/Close";
import BasketSvg from "@/svgComponents/Basket";
export default {
  data() {
    return {
      isShowProp: false,
      id: null,
      circulationId: null,
      selectedData: null,
      data: [],
    };
  },
  computed: {
    getNumbers() {
      return this.data.map((i) => {
        return i
      });
    },
  },
  methods: {
    selected(value) {
      this.selectedData = value;
    },
    submit(){
      let thisIs = this;
      this.$store.dispatch('auth/addBasket', {
        tarifId:0,
        inBasket: true,
        numberId: this.selectedData.key,
        circulationId: this.circulationId
      }).then(res => {
          this.isShowProp = false;
          setTimeout(() => {
             event.$emit('openFeedBack', {
                mode: 'success',
                message: 'Məhsul uğurla səbətə əlavə edildi'
             })
             thisIs.$store.dispatch("auth/getBasketList");
          }, 1500);
      }).catch(err => {
          this.isShowProp = false;
          setTimeout(() => {
             event.$emit('openFeedBack', {
                mode: 'error',
                message: 'Xəta baş verdi, xaiş olunur tekrar cəhd edin.'
             })
          }, 1500);
      })
    }
  },
  mounted() {
    let _this = this;
    event.$on("openNumberModal", function (payload) {
      _this.id = payload.id;
      _this.circulationId = payload.circulationId;
      _this.data = payload.data;
      _this.isShowProp = true;
    });
  },
  components: {
    Modal,
    Select,
    InputHolder,
    Btn,
    CloseSvg,
    BasketSvg,
    Typography,
  },
};
</script>

<style scoped>
.select-box {
  margin-bottom: 24px;
}
.button-item {
  margin-bottom: 16px;
}
.desc-modal {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  margin-bottom: 32px;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
}
.desc-modal span.border-span {
  cursor: pointer;
  border-bottom: 1px solid white;
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
  margin-bottom: 44px;
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