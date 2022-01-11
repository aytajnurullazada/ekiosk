<template>
  <div class="input-box">
    <div class="label-box" v-if="label">
      <Typography tag="p">{{ label }}</Typography>
    </div>
    <div class="flex-input-box" :class="{ haveIcon: haveIcon, transparentInput: transparent, invalid: error }">
      <input @blur="$emit('blur')" v-mask="mask ? mask : false" :placeholder="placeholder" :value="value" @input="$emit('input', $event.target.value)" :type="propType" />
      <div class="absolute-icon" v-if="haveIcon">
        <EyeOpen v-if="propType == 'text'" @click="togglePassword" />
        <EyeClose v-else @click="togglePassword" />
      </div>
    </div>
   <div class="error-box" v-if="error">
      <Typography tag="span">{{ errorText }}</Typography>
   </div>
  </div>
</template>

<script>
import Typography from "@/components/common/Typography/";
import EyeOpen from "@/svgComponents/EyeOpen";
import EyeClose from "@/svgComponents/EyeClose";
export default {
  props: {
    errorText: {
        type: String
    },
    error:{
      type: Boolean,
      default: false
    },
    value: {
        type: String
    },
    mask: {
        type: String
    },
    transparent: {
        type: Boolean,
        default: false
    },
    label: {
      type: [String, Number],
      default: null,
    },
    placeholder: {
      type: String,
      default: ''
    },
    typeHolder: {
      type: String,
      default: "text",
    },
  },
  data() {
    return {
      isError: false,
      propType: "text",
    };
  },
  mounted() {
    this.propType = this.typeHolder;
    this.isError = this.error;
  },
  watch: {
    error(value){
      this.isError = value;
    }
  },
  methods: {
    togglePassword() {
      if (this.typeHolder == "password") {
        if (this.propType == "password") this.propType = "text";
        else this.propType = "password";
      }
    },
  },
  computed: {
    haveIcon() {
      return this.typeHolder == "password";
    },
  },
  components: {
    Typography,
    EyeClose,
    EyeOpen,
  },
};
</script>

<style  scoped>
.transparentInput {
  background-color: transparent !important;
}
.absolute-icon {
  position: absolute;
  right: 20px;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 20px;
}
.flex-input-box {
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  height: 56px;
  background: #1a1a1a;
  border: 1px solid #505050;
  cursor: pointer;
  box-sizing: border-box;
}
.flex-input-box.invalid{
  border: 1px solid #EC3137;
  margin-bottom: 5px;
}
.error-box{
  opacity: 0.7;
  font-family: "Roboto", sans-serif;
  color: #EC3137;
}
.flex-input-box input {
  width: 100%;
  height: 100%;
  border: none;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  background-color: transparent;
  padding-left: 20px;
  padding-right: 20px;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  outline: none;
}
.flex-input-box.haveIcon input {
  padding-right: 50px;
}
.input-box {
  width: 100%;
  position: relative;
}
.label-box {
  width: 100%;
  margin-bottom: 12px;
  position: relative;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
}
@media screen and (max-width: 500px){
  .flex-input-box{
    height: 48px;
  }
}
</style>