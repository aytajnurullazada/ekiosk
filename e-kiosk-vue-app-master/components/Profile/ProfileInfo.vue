<template>
  <div class="profile-box">
    <div class="input-box">
      <InputHolder
        v-model.trim="$v.name.$model"
        typeHolder="text"
        label="Ad"
        errorText="Ad 3 ilə 20 simvol aralıqın da olmalıdır"
        :error="$v.name.$error"
      />
    </div>
    <div class="input-box">
      <InputHolder
        v-model.trim="$v.surname.$model"
        typeHolder="text"
        errorText="Soyad 3 ilə 20 simvol aralıqın da olmalıdır"
        :error="$v.surname.$error"
        label="Soyad"
      />
    </div>
    <div class="input-box">
      <InputHolder
        v-model.trim="$v.email.$model"
        errorText="Email zəruridir"
        :error="$v.email.$error"
        typeHolder="text"
        label="E-mail"
      />
    </div>
    <div class="input-box">
      <InputHolder
        v-model.trim="$v.phone.$model"
        typeHolder="text"
        errorText="Telefon nömrəsi zəruridir"
        :error="$v.phone.$error"
        label="Telefon nömrəsi"
      />
    </div>
    <div class="input-box">
      <InputHolder
        v-model.trim="$v.oldPassword.$model"
        typeHolder="password"
        errorText="Köhnə şifrə zəruridir"
        :error="$v.oldPassword.$error"
        label="Köhnə şifrə"
      />
    </div>
    <div class="input-box">
      <InputHolder
        v-model.trim="$v.password.$model"
        typeHolder="password"
        :error="$v.password.$error"
        errorText="Şifrə 6 ilə 20 simvol aralıqın da olmalıdır"
        label="Yeni şifrə"
      />
    </div>
    <div class="input-box">
      <InputHolder
        v-model.trim="$v.passwordConfirm.$model"
        typeHolder="password"
        errorText="Daxil edilmiş şifrələr fərqlidir"
        :error="$v.passwordConfirm.$error"
        label="Yeni şifrənin təkrarı"
      />
    </div>
    <div class="button-box">
      <Btn :isDisabled="$v.$invalid" @click="setProfile">Yadda saxla</Btn>
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
</template>

<script>
import Typography from "@/components/common/Typography/";
import InputHolder from "@/components/common/InputHolder/";
import Btn from "@/components/common/Buttons/";
import Alert from "@/components/common/Alert/";
import {
  required,
  minLength,
  email,
  maxLength,
  sameAs,
} from "vuelidate/lib/validators";
export default {
  data() {
    return {
      alert: {
        message: null,
        show: false,
        mode: null,
      },
      name: "",
      surname: "",
      email: "",
      phone: "",
      oldPassword: "",
      password: "",
      passwordConfirm: "",
    };
  },
  validations: {
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
      minLength: minLength(6),
      maxLength: maxLength(20),
    },
    oldPassword: {
      minLength: minLength(6),
      required,
      maxLength: maxLength(20),
    },
    passwordConfirm: {
      sameAsPassword: sameAs("password"),
      minLength: minLength(6),
      maxLength: maxLength(20),
    },
    phone: {
      required,
      minLength: minLength(19),
      maxLength: maxLength(19),
    },
    email: {
      email,
      required
    },
  },
  components: {
    Typography,
    InputHolder,
    Btn,
    Alert,
  },
  computed: {
    getUser() {
      return this.$store.getters["auth/getUser"];
    },
  },
  methods: {
    setData(value) {
      this.phone = value.phoneNumber;
      this.name = value.name;
      this.surname = value.surname;
      this.email = value.email;
    },
    setProfile() {
      let data = {
        oldPassword: this.oldPassword,
        email: this.email,
        phone: this.phone,
        name: this.name,
        surname: this.surname,
      };
      this.password != "" ? (data["password"] = this.password) : false;
      this.passwordConfirm != ""
        ? (data["passwordConfirm"] = this.passwordConfirm)
        : false;
      this.$store
        .dispatch("auth/setProfile", data)
        .then((res) => {
          this.alert = {
            mode: "error",
            message: "Profile məlumatları uğurla dəyişdirildi",
            show: true,
          };
        })
        .catch((err) => {
          this.alert = {
            mode: "error",
            message: err.response.data.title || "Xəta baş verdi",
            show: true,
          };
        });
    },
  },
  mounted() {
    this.setData(this.getUser);
  },
};
</script>

<style  scoped>
.alert-box {
  padding-top: 24px;
  padding-bottom: 24px;
}
.profile-box {
  width: 410px;
  max-width: 100%;
}

.input-box {
  margin-bottom: 56px;
}
</style>