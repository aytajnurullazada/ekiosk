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
    <div class="head-title show-mobile">
      <Typography tag="p"
        >{{ isLoginScreen ? "Hesaba daxil ol" : "Qeydiyyat" }}
      </Typography>
    </div>
    <div class="flex-auth-box">
      <div class="col-auth" :class="{ active: isLoginScreen }">
        <div class="auth-content-box">
          <div class="content-title">
            <Typography tag="p">Giriş</Typography>
          </div>
          <div class="input-items">
            <div class="item-input">
              <InputHolder
                v-model.trim="$v.login.email.$model"
                errorText="Email zəruridir"
                :error="$v.login.email.$error"
                typeHolder="text"
                label="Email"
              />
            </div>
            <div class="item-input clear">
              <InputHolder
                v-model.trim="$v.login.password.$model"
                :error="$v.login.password.$error"
                errorText="Şifrə 6 ilə 20 simvol aralıqın da olmalıdır"
                typeHolder="password"
                label="Şifrə"
              />
            </div>
            <div class="forgot-password">
              <Typography tag="span" @click="$router.push('/forgot-password')">Şifrəni unutmusunuz?</Typography>
            </div>
            <div class="button-box">
              <Btn @click="loginAccount" :isDisabled="$v.login.$invalid">
                Daxil ol
              </Btn>
            </div>
            <div class="alert-box" v-if="showSuccessLogin">
              <Alert
                mode="success"
                @closed="showSuccessLogin = false"
                :isShowProp="true"
                text="Daxil olunur..."
              />
            </div>
            <div class="alert-box" v-if="showErrorLogin">
              <Alert
                mode="error"
                @closed="showErrorLogin = false"
                :isShowProp="true"
                :text="errorMessageLogin"
              />
            </div>

            <div class="get-register">
              <Typography tag="p">
                Qeydiyyatınız yoxdur? O zaman
                <br />
                <br />
                <Typography tag="span" @click="isLoginScreen = false"
                  >Qeydiyyatdan keçin</Typography
                >
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div class="col-auth" :class="{ active: !isLoginScreen }">
        <div class="auth-content-box">
          <div class="content-title">
            <Typography tag="p">Qeydiyyat</Typography>
          </div>
          <div class="input-items">
            <div class="item-input">
              <InputHolder
                v-model.trim="$v.register.name.$model"
                typeHolder="text"
                errorText="Ad 3 ilə 20 simvol aralıqın da olmalıdır"
                :error="$v.register.name.$error"
                label="Ad"
              />
            </div>
            <div class="item-input">
              <InputHolder
                v-model.trim="$v.register.surname.$model"
                typeHolder="text"
                errorText="Soyad 3 ilə 20 simvol aralıqın da olmalıdır"
                :error="$v.register.surname.$error"
                label="Soyad"
              />
            </div>
            <div class="item-input">
              <InputHolder
                v-model.trim="$v.register.patronymic.$model"
                typeHolder="text"
                errorText="Ata adı 3 ilə 10 simvol aralıqın da olmalıdır"
                :error="$v.register.patronymic.$error"
                label="Ata adı"
              />
            </div>
            <div class="item-input">
              <InputHolder
                v-model.trim="$v.register.email.$model"
                typeHolder="text"
                errorText="Email zəruridir"
                :error="$v.register.email.$error"
                label="Email"
              />
            </div>
            <div class="item-input">
              <InputHolder
                v-model.trim="$v.register.phone.$model"
                typeHolder="text"
                mask="+994 (##) ### ## ##"
                label="Telefon nömrəsi"
                errorText="Telefon nömrəsi zəruridir"
                :error="$v.register.phone.$error"
              />
            </div>
            <div class="item-input">
              <InputHolder
                v-model.trim="$v.register.password.$model"
                typeHolder="password"
                label="Şifrə"
                 errorText="Şifrə 6 ilə 20 simvol aralıqın da olmalıdır"
                :error="$v.register.password.$error"
              />
            </div>

            <div class="item-input">
              <InputHolder
                v-model.trim="$v.register.passwordConfirm.$model"
                typeHolder="password"
                errorText="Daxil edilmiş şifrələr fərqlidir"
                :error="$v.register.passwordConfirm.$error"
                label="Şifrənin təkrarı"
              />
            </div>

            <div class="button-box">
              <Btn :isDisabled="$v.register.$invalid" @click="createAccount">
                Qeydiyyatı bitir</Btn
              >
            </div>
            <div class="alert-box" v-if="showSuccessRegister">
              <Alert
                mode="success"
                @closed="showSuccessRegister = false"
                :isShowProp="true"
                text="Qeydiyyat olundu. Tamamlamaq üçün e-mailə keçin."
              />
            </div>
            <div class="alert-box" v-if="showErrorRegister">
              <Alert
                mode="error"
                @closed="showErrorRegister = false"
                :isShowProp="true"
                :text="errorMessageRegister"
              />
            </div>
            <div class="get-register">
              <Typography tag="p">
                Artıq qeydiyyatdan keçmisən?
                <br /><br />
                <Typography @click="isLoginScreen = true" tag="span"
                  >Daxil ol</Typography
                >
              </Typography>
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
import Alert from "@/components/common/Alert/";
import {
  required,
  minLength,
  email,
  maxLength,
  sameAs,
} from "vuelidate/lib/validators";
import Btn from "@/components/common/Buttons/";
import MailIcon from "@/svgComponents/Mail";
export default {
  components: {
    InputHolder,
    Typography,
    Alert,
    Btn,
    MailIcon,
  },
  watch: {
    showSuccessLogin(value){
      if(value)
       setTimeout(() => {
          window.location = '/'
       }, 1500);
    }
  },
  validations: {
    login: {
      password: {
        required,
        minLength: minLength(6),
      },
      email: {
        email,
        required,
      },
    },
    register: {
      patronymic: {
        minLength: minLength(3),
        maxLength: maxLength(10),
      },
      name: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(20),
      },
      surname: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(20),
      },
      password: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(20),
      },
      passwordConfirm: {
        sameAsPassword: sameAs("password"),
        required,
        minLength: minLength(6),
        maxLength: maxLength(20),
      },
      phone: {
        minLength: minLength(19),
        maxLength: maxLength(19),
        required,
      },
      email: {
        email,
        required,
      },
    },
  },
  methods: {
    resetRegister() {
      this.register = {
        password: "",
        name: "",
        surname: "",
        patronymic: "",
        passwordConfirm: "",
        email: "",
        phone: "",
      };
      this.$v.$reset();
    },
    resetLogin() {
      this.login = {
        password: "",
        email: "",
      };
      this.$v.$reset();
    },
    loginAccount() {
      this.$store
        .dispatch("auth/loginAccount", this.login)
        .then((res) => {
          this.showErrorLogin = false;
          this.showSuccessLogin = true;
          this.resetLogin();
          // this.$store.dispatch('auth/getUserDetail');
        })
        .catch((err) => {
          this.errorMessageLogin = err.response.data.status.message;
          this.showSuccessLogin = false;
          this.showErrorLogin = true;
        });
    },
    createAccount() {
      this.$store
        .dispatch("auth/register", this.register)
        .then((res) => {
          this.showErrorRegister = false;
          this.showSuccessRegister = true;
          this.resetRegister();
        })
        .catch((err) => {
          this.errorMessageRegister = err.response.data.title;
          this.showSuccessRegister = false;
          this.showErrorRegister = true;
        });
    },
  },
  data() {
    return {
      showSuccessLogin: false,
      showErrorLogin: false,
      showErrorRegister: false,
      showSuccessRegister: false,
      errorMessageLogin: "",
      errorMessageRegister: "",
      register: {
        password: "",
        name: "",
        surname: "",
        patronymic: "",
        passwordConfirm: "",
        email: "",
        phone: "",
      },
      login: {
        email: "",
        password: "",
      },
      isLoginScreen: true,
    };
  },
};
</script>

<style  scoped>
.alert-box {
  padding-top: 24px;
  padding-bottom: 24px;
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
.forgot-password span{
  position: relative;
  cursor: pointer;
  padding-bottom: 10px;
  transition: 0.5s;
}
.forgot-password span::after{
  width: 0%;
  transition: 0.5s;
  content: "";
  height: 1px;
  position: absolute;
  left: 50%;
  opacity: 0;
  transform: translateX(-50%);
  bottom: 0px;
  background-color: white;
}

.forgot-password span:hover::after{
  width: 100%;
  transition: 0.5s;
  opacity: 0.6;
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
  margin-bottom: 56px;
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
  width: 50%;
  background-color: #1a1a1a;
  position: relative;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  justify-content: center;
}
.col-auth:last-child {
  background-color: #1a1a1a;
}
.col-auth:last-child::after {
  position: absolute;
  top: 0;
  width: 1px;
  left: -1px;
  height: 100%;
  background-color: #505050;
  content: "";
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
  .nav-left-menu {
    display: none;
  }
   .left-box{
    display: none;
  }
}
@media screen and (max-width: 500px) {
  .head-title {
    height: 115px;
    padding-left: 44px;
    padding-right: 44px;
    font-size: 30px;
  }
  .col-auth:not(.active) {
    display: none;
  }
  .item-input {
    margin-bottom: 40px;
  }
  .content-title {
    display: none;
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