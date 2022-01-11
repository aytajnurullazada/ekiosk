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
              <Typography @click="$router.push('/all-newspapers')"> Qəzetlər </Typography>
            </li>
          </ul>
        </div>
        <div class="mail-box" @click="$router.push('/contact')">
          <MailIcon />
        </div>
      </div>
    </div>
    <div class="head-title">
      <Typography tag="p">Şəxsi kabinet</Typography>
    </div>
    <div class="flex-auth-box">
      <div class="col-auth">
        <div class="auth-content-box">
          <div class="content-title">
            <Typography tag="p">Şifrənin sıfırlanması</Typography>
          </div>
          <div class="content-desc">
            <Typography tag="p"
              >Şifrənizin sıfırlanması üçün zəhmət olmasa qeydiyyatdan
              keçdiyiniz e-malinizi daxil edin. “Göndər” düyməsinə klik etdikdən
              sonra e-mailinizə link göndəriləcək. Həmin linkə klik etməklə yeni
              şifrənizi daxil edə bilərsiniz</Typography
            >
          </div>
          <div class="input-items" >
            <div class="item-input" v-if="showPlatform">
              <InputHolder
                v-model="$v.email.$model"
                typeHolder="text"
                errorText="Email zəruridir"
                :error="$v.email.$error"
                label="Email"
              />
            </div>
            <div class="button-box" v-if="showPlatform">
              <Btn @click="sendEmail" :isDisabled="$v.$invalid"> Təsdiqlə </Btn>
            </div>
            <div class="alert-box" v-if="alert.show">
              <Alert
                :mode="alert.mode"
                @closed="alert.show = false"
                :isShowProp="true"
                :text="alert.message"
              />
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
import Btn from "@/components/common/Buttons/";
import Alert from "@/components/common/Alert/";
import MailIcon from "@/svgComponents/Mail";
import { required, email } from "vuelidate/lib/validators";
export default {
  components: {
    InputHolder,
    Typography,
    Alert,
    Btn,
    MailIcon,
  },
  validations: {
    email: {
      email,
      required,
    },
  },
  methods: {
    sendEmail() {
      this.$store
        .dispatch("auth/sendEmail", this.email)
        .then((res) => {
          this.alert = {
            message: 'Şifrənizi yeniləmək üçün e-mail ünvanınıza link göndərilmişdir.',
            show: true,
            mode: "success",
          };
          this.email = "";
          this.$v.$reset();
          this.showPlatform = false;
        })
        .catch((err) => {
          this.alert = {
            message: err.response.data.message,
            show: true,
            mode: "error",
          };
        });
    },
  },
  data() {
    return {
      email: "",
      showPlatform: true,
      alert: {
        message: null,
        show: false,
        mode: null,
      },
    };
  },
};
</script>

<style  scoped>
.alert-box {
  padding-top: 56px;
  padding-bottom: 24px;
}
.input-items {
  width: 410px;
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
.content-desc {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  margin-bottom: 56px;
  line-height: 26px;
  color: #ffffff;
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
.item-input {
  width: 100%;
  margin-bottom: 56px;
}
.item-input.clear {
  margin-bottom: 0;
}
.content-title {
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 40px;
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
@media screen and (max-width: 767px) {
  .input-items {
    width: 100%;
  }
}
@media screen and (max-width: 500px) {
  .head-title {
    height: 115px;
    padding-left: 44px;
    padding-right: 44px;
    font-size: 30px;
  }
  .item-input {
    margin-bottom: 40px;
  }

  .head-title:not(.show-mobile) {
    display: none;
  }
  .col-auth {
    padding: 0 !important;
    padding-top: 40px !important;
    padding-bottom: 72px !important;
    width: 100%;
  }
  .flex-auth-box {
    padding-left: 44px;
    padding-right: 44px;
  }
  .flex-auth-box::after {
    display: none;
  }
  .col-auth::after {
    display: none !important;
  }
}
</style>