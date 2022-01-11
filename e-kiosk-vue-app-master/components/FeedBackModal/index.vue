<template>
  <Modal @closed="$emit('closed'), (isShowProp = false)" :isShow="isShowProp">
    <div class="modal-box">
      <div class="modal-title">
        <Typography> {{info.message}}</Typography>
      </div>
      <div class="flex-circle">
          <div class="item-circle shake-chunk shake-constant" v-if="info.mode == 'success'">
              <CheckSvg color="#5387ED"/>
          </div>
          <div class="item-circle error shake-opacity shake-constant" v-if="info.mode == 'error'">
              <Exclamation color="#EC3137"/>
          </div>
      </div>
      <div class="button-flex-box">
          <div class="col-flex">
              <Btn :icon="false" @click="isShowProp = false" mode="dark" :transparent="true" >Bağla</Btn>
          </div>
          <div class="col-flex">
             <Btn :icon="false" @click="isShowProp = false, $router.push('/')" mode="dark" :transparent="true" >Əsas səhifə</Btn>
          </div>
      </div>
    </div>
  </Modal>
</template>

<script>
import Modal from "@/components/common/Modal/";
import Btn from "@/components/common/Buttons/IconBtn";
import Typography from "@/components/common/Typography/";
import CheckSvg from '@/svgComponents/Check';
import Exclamation from '@/svgComponents/Exclamation';
import { event } from "@/event/";
export default {
  data() {
    return {
      isShowProp: false,
      comment: "",
      selected: 1,
      info: {
          mode: null,
          message: null
      },
    };
  },
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  methods: {},
  computed: {},
  mounted() {
    let _this = this;
    event.$on("openFeedBack", function (payload) {
      _this.info = payload;
      _this.isShowProp = true;
    });
  },
  watch: {
    isShow(value) {
      this.isShowProp = value;
    },
  },
  components: {
    Modal,
    Btn,
    Typography,
    Exclamation,
    CheckSvg
  },
};
</script>

<style scoped>
.button-flex-box{
    width: 100%;
    display: flex;
    align-items: center;
}
.button-flex-box .col-flex{
    width: 50%;
}
.button-flex-box .col-flex:first-child{
    padding-right: 6px;
}
.button-flex-box .col-flex:last-child{
    padding-left: 6px;
}
.flex-circle{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 44px;
}
.item-circle{
    width: 80px;
    height: 80px;
    position: relative;
    display: flex;
    font-size: 24px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
}
.item-circle{
    border: 3px solid #5387ED;
}
.item-circle.error{
    border: 3px solid #EC3137;
}
.modal-title {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
  margin-bottom: 44px;
}
.modal-box {
  background-color: #272727;
  padding: 40px;
  position: relative;
}

@media screen and (max-width: 500px) {
  .modal-box {
    width: 288px;
    padding: 16px;
  }
  .modal-title {
    margin-bottom: 32px;
    font-size: 24px;
  }
}
</style>