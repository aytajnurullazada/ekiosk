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
    <div class="head-title">
      <Typography tag="p">Bizimlə əlaqə</Typography>
    </div>
    <div class="flex-auth-box">
      <div class="col-auth">
        <div class="auth-content-box">
          <div class="contact-flex">
            <div class="left-contact-flex">
              <div class="lcf-title">
                <Typography tag="span">Şikayət və təkliflər</Typography>
              </div>
              <div class="lcf-desc">
                <Typography tag="span">
                  Hər hansı çətinliklə qarşılaşmısınızsa narahat olmayın.
                  Bizimlə əlaqə yaratmaq üçün bizə zəng edə, email ünvanımıza
                  məktub yaza və ya elə aşağıdakı məlumatları doldurmaqla
                  şikayət və təkliflrinizi yaza bilərsiniz
                </Typography>
              </div>
              <div class="input-box">
                <div class="input-item">
                  <InputHolder
                    :transparent="true"
                    v-model="$v.name_surname.$model"
                    typeHolder="text"
                    placeholder="Ad, soyad"
                    errorText="Ad, Soyad 3 ilə 25 simvol aralıqın da olmalıdır"
                    :error="$v.name_surname.$error"
                  />
                </div>
                <div class="input-item">
                  <InputHolder
                    :transparent="true"
                    v-model="$v.email.$model"
                    errorText="Email zəruridir"
                    :error="$v.email.$error"
                    typeHolder="email"
                    placeholder="E-mail"
                  />
                </div>
                <div class="input-item">
                  <Select
                     :key="keySelect"
                    placeholder="Müraciətin növü"
                    selectKey="name"
                    @selected="type = $event"
                    :data="getContactTypes"
                  />
                </div>
                <div class="input-item">
                  <textarea
                    :class="{ errorArea: $v.message.$error }"
                    v-model="$v.message.$model"
                    errorText=""
                    placeholder="Müraciətin mətni"
                    class="text-area"
                  ></textarea>
                  <Typography
                    v-if="$v.message.$error"
                    class="error-text"
                    tag="span"
                  >
                    Müraciətin mətni minimum 25 maksimum 100 simvol olmalıdır
                  </Typography>
                </div>
                <div class="button-box">
                  <Btn @click="submit" :isDisabled="$v.$invalid">Göndər</Btn>
                </div>
              </div>
            </div>
            <div class="right-contact-flex">
              <google-map id="map" ref="Map"> </google-map>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-box-news">
      <div class="flex-box-blue">
        <div class="flex-col-box">
          <div class="col-flex">
            <div class="circle-col-box">
              <div class="bg"></div>
              <LocSvg color="#5387ED" />
            </div>
            <div class="text-box">
              <Typography tag="span"
                >Bakı şəhəri, Bakıxanov küçəsi 13</Typography
              >
            </div>
          </div>
          <div class="col-flex">
            <div class="circle-col-box">
              <div class="bg"></div>
              <DateSvg color="#5387ED" />
            </div>
            <div class="text-box">
              <Typography tag="span"
                >Bazar ertəsi - Cümə : 09:00 - 18:00</Typography
              >
            </div>
          </div>
          <div class="col-flex margin-bottom-clear">
            <div class="circle-col-box">
              <div class="bg"></div>
              <PhoneSvg color="#5387ED" />
            </div>
            <div class="text-box">
              <Typography tag="span">999 Çağrı Mərkəzi</Typography>
            </div>
          </div>
          <div class="col-flex margin-bottom-clear">
            <div class="circle-col-box">
              <div class="bg"></div>
              <MailFillSvg color="#5387ED" />
            </div>
            <div class="text-box">
              <Typography tag="span">info@e-kiosk.az</Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="map-box-mobile">
      <google-map id="map" ref="Map"> </google-map>
    </div>
  </div>
</template>

<script>
import Btn from "@/components/common/Buttons/";
import Typography from "@/components/common/Typography/";
import InputHolder from "@/components/common/InputHolder/";
import LocSvg from "@/svgComponents/Loc";
import PhoneSvg from "@/svgComponents/Phone";
import DateSvg from "@/svgComponents/Date";
import MailIcon from "@/svgComponents/Mail";
import {event} from '@/event/';
import Select from "@/components/common/Select/";
import {
  required,
  minLength,
  email,
  maxLength
} from "vuelidate/lib/validators";
import MailFillSvg from "@/svgComponents/MailFill";
export default {
  components: {
    InputHolder,
    Btn,
    Select,
    MailFillSvg,
    PhoneSvg,
    LocSvg,
    DateSvg,
    Typography,
    MailIcon,
  },
  validations: {
    name_surname: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(25),
    },
    type: {
      required,
    },
    message: {
      required,
      minLength: minLength(25),
      maxLength: maxLength(100),
    },
    email: {
      email,
      required,
    },
  },
  methods:{
    reset(){
      this.keySelect++;
      this.message = "";
      this.email = "";
      this.typeId = null;
      this.name_surname = "";
      this.$v.$reset();
    },
    submit(){
      let _this = this;
      let data = {
        fullName: this.name_surname,
        email: this.email,
        message: this.message,
        typeId: this.type.id
      }
      this.$store.dispatch('common/addContactPost', data).then(res => {
        _this.reset();
         event.$emit('openFeedBack', {
            mode: 'success',
            message: 'Müraciyyətiniz uğurla göndərildi'
         })
      }).catch(err => {
         event.$emit('openFeedBack', {
            mode: 'error',
            message: 'Xəta baş verdi, xaiş olunur tekrar cəhd edin.'
         })
      })
    }
  },
  computed: {
    getContactTypes(){
      return this.$store.getters['common/getContactTypes'];
    }
  },
  data() {
    return {
      keySelect: 0,
      type: null,
      message: "",
      email: "",
      name_surname: "",
    };
  },
};
</script>

<style  scoped>
.error-text{
    opacity: 0.7;
    font-family: "Roboto", sans-serif;
    color: #EC3137;
}
.errorArea{
  border: 1px solid #EC3137 !important;
}
.margin-bottom-clear {
  margin-bottom: 0 !important;
}
.map-box-mobile {
  display: none;
}
.circle-col-box {
  width: 32px;
  font-size: 14px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  margin-right: 12px;
}
.text-box {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
}
.circle-col-box .bg {
  width: 100%;
  border-radius: 50%;
  background: #ffffff;
  opacity: 0.1;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
}
.flex-col-box .col-flex {
  padding-right: 15px;
  width: 50%;
  display: flex;
  position: relative;
  margin-bottom: 34px;
  align-items: center;
}
.flex-col-box {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.flex-box-blue {
  height: 170px;
  position: relative;
  width: 100%;
  padding: 40px;
  display: flex;
  align-items: center;
  background: #272727;
}
.bottom-box-news {
  width: 100%;
  position: relative;
  padding-right: 102px;
  padding-bottom: 88px;
  padding-left: 102px;
}
.bottom-box-news:after {
  position: absolute;
  height: 100%;
  content: "";
  top: 0;
  left: -1px;
  width: 1px;
  background-color: #505050;
}
.right-contact-flex {
  width: 100%;
  max-width: 600px;
  margin-left: auto;
  position: relative;
  height: 730px;
}
.input-item {
  margin-bottom: 32px;
}
.input-box:last-child {
  margin-bottom: 40px;
}
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
  height: 112px;
  resize: none;
}
.text-area::placeholder {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #858585;
}
.lcf-title {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  color: #ffffff;
  margin-bottom: 32px;
}
.lcf-desc {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  margin-bottom: 48px;
  line-height: 30px;
  color: #ffffff;
}
.input-box {
  width: 410px;
  position: relative;
}
.contact-flex {
  width: 100%;
  margin-bottom: 104px;
  display: flex;
  align-items: flex-start;
  position: relative;
}
.left-contact-flex {
  padding-right: 20px;
  max-width: 500px;
  width: 500px;
}
.tab-content-box {
  transition: 0.6s;
}
.content-item {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
}
.item-flex-box:not(:last-child) {
  margin-bottom: 16px;
}
.left-tab-li {
  padding: 0;
  list-style: none;
  margin: 0;
  position: relative;
}
.left-tab-li li.active {
  color: #5387ed;
  font-weight: 500;
  font-size: 18px;
  transition: 0.3s;
}
.left-tab-li li {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  transition: 0.3s;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
}
.left-tab-li li:not(:last-child) {
  margin-bottom: 32px;
}
.left-tab-li li span {
  cursor: pointer;
}
.left-box-flex {
  padding-right: 15px;
  width: 100%;
}
.right-box-flex {
  width: 790px;
  min-width: 790px;
  padding-left: 15px;
}
.full-flex {
  width: 100%;
  position: relative;
  display: flex;
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
  padding-bottom: 0;
  min-height: 100vh;
  width: 100%;
  background-color: #1a1a1a;
  position: relative;
  padding-left: 102px;
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
  .bottom-box-news {
    padding-left: 50px;
    padding-right: 50px;
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
  .left-box {
    display: none;
  }
  .full-flex {
    display: block;
  }
  .left-box-flex {
    width: 100%;
    padding: 0 !important;
  }
  .left-tab-li {
    overflow: auto;
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 40px;
  }
  .left-tab-li li {
    font-size: 16px;
  }
  .left-tab-li li.active {
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
  }
  .left-tab-li li.active::after {
    position: absolute;
    content: "";
    transition: 0.3s;
    left: 0;
    bottom: 0;
    height: 1px;
    background-color: #5387ed;
    width: 100%;
  }
  .left-tab-li li {
    margin-bottom: 0 !important;
    padding-right: 24px;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding-left: 24px;
  }
  .right-box-flex {
    padding: 0 !important;
    min-width: auto !important;
    width: 100%;
  }
}
@media screen and (max-width: 991px) {
  .contact-flex {
    flex-wrap: wrap;
  }
  .flex-box-blue {
    margin-bottom: 64px;
  }
  .map-box-mobile {
    position: relative;
  }
  .bottom-box-news {
    padding-bottom: 0 !important;
  }
  .lcf-title {
    font-family: "Roboto", sans-serif;
    margin-bottom: 40px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
  }
  .lcf-desc {
    margin-bottom: 32px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 28px;
  }
  .left-contact-flex,
  .right-box-flex {
    width: 100%;
    padding: 0 !important;
    max-width: 100%;
  }
  .input-box {
    width: 100%;
    max-width: 400px;
    margin-bottom: 0 !important;
  }
  .right-contact-flex {
    width: 100%;
    height: 320px;
    max-width: 100%;
  }
  .contact-flex {
    margin-bottom: 0;
  }
  .flex-box-blue {
    padding: 16px;
    padding-top: 24px;
    padding-bottom: 14px;
    height: auto;
  }
  .col-auth {
    padding-bottom: 64px !important;
  }
  .bottom-box-news {
    padding-bottom: 0px !important;
  }
  .col-flex {
    width: 100% !important;
    margin-bottom: 24px !important;
  }
  .col-flex:last-child {
    margin-bottom: 0 !important;
  }
  .text-box {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
  }
  .right-contact-flex {
    display: none;
  }
  .map-box-mobile {
    width: 100%;
    height: 320px;
    position: relative;
    display: block;
  }
}

@media screen and (max-width: 500px) {
  .bottom-box-news {
    padding-left: 16px;
    padding-right: 16px;
  }
  .head-title {
    height: 115px;
    font-size: 30px;
    display: flex;
    padding-left: 16px;
    padding-right: 16px;
    align-items: center;
    justify-content: center;
  }
  .col-auth {
    padding: 0 !important;
    padding-top: 40px !important;
    padding-bottom: 72px !important;
    width: 100%;
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