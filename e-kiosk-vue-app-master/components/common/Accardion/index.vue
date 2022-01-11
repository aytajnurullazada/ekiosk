<template>
  <div class="accardion-box v-accardion-box" :class="{active: isOpen}">
    <div class="accardion-head" @click="isOpen = !isOpen">
      <div class="title-accardion">
        <slot name="title" />
      </div>
      <div class="right-icon">
        <slot name="icon" v-if="$slots['icon']" />
        <svg
          v-else
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
    <div class="accardion-content" v-if="isOpen">
        <div class="v-content">
            <slot name="content"/>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            isOpen: false
        }
    },
    watch: {
        isOpen(value){
            this.$emit('isActive', value)
        }
    },
    mounted(){
        let _this = this;
        this.$root.$emit('close', function(){
            _this.isOpen = false;
        });
        window.addEventListener('click', (e) => {
            if (!this.$el.contains(e.target)){
                _this.isOpen = false;
            }
        })
    }
};
</script>

<style scoped>
.accardion-box {
  width: 100%;
  position: relative;
    border: 1px solid #505050;
}
.accardion-box.active{
  border: 1px solid #5387ED;
}
.accardion-box.active .title-accardion{
    color: #5387ED !important;
    font-weight: 500 !important;
}
.accardion-box.active .accardion-head{
    padding-bottom: 24px;
}
.accardion-box.active .right-icon svg{
    transition: 0.3s;
    transform: rotateX(-180deg);
}
.right-icon svg{
    transition: 0.3s;
}
.accardion-content{
    background: #1a1a1a;
    width: 100%;
    position: relative;
    max-height: 370px;
    overflow: auto;
    padding-bottom: 30px;
}
.accardion-box .v-content{
    text-align: start;
    padding-right: 30px;
    padding-left: 30px;
}
.accardion-head {
  position: relative;
  text-align: start;
  padding: 30px;
  cursor: pointer;
  padding-right: 80px;
  background: #1a1a1a;
  display: flex;
  align-items: center;
}
/* .title-accardion {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
} */
.title-accardion * {
  margin: 0;
}
.title-accardion{
      font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
}
.accardion-head .right-icon {
  display: flex;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 30px;
}
@media screen and (max-width: 500px){
    .accardion-head{
        padding-top: 24px;
        padding-left: 16px;
        padding-right: 54px;
    }
    .accardion-box{
        width: 100%;
    }
    .right-icon{
        top: 24px !important;
        right: 16px !important;
        transform: inherit !important;
    }
    .v-content{
        padding-right: 16px !important;
        padding-left: 16px !important;
    }
}
</style>