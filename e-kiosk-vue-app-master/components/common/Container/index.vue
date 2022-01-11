<template>
    <div class="vue-container">
       <div class="inner-container" v-if="mode == 'inner'">
            <slot/>
       </div>
       <b-container v-if="mode == 'bootstrap'">
            <slot/>
       </b-container>
    </div>
</template>

<script>
    export default {
        props: {
            mode: {
                type: String,
                default: 'bootstrap'
            }
        }
    }
</script>

<style>
    .vue-container .container{
        height: 100% !important;
        position: relative;
    }
</style>
<style scoped>
.inner-container{
    width: 100%;
    position: relative;
    height: 100%;
    z-index: 99;
}
@media screen and (min-width: 1199px){
    .inner-container{
        padding-left: 120px;
        padding-right: 120px;
        position: relative;
    }
}
@media screen and (max-width: 991px){
    .inner-container{
        padding-left: 24px;
        padding-right: 24px;
        position: relative;
    }
}
@media screen and (max-width: 580px){
    .inner-container{
        padding-left: 16px;
        padding-right: 16px;
        position: relative;
    }
}
.vue-container{
    height: 100%;
    z-index: 999;
    position: relative;
}
 /* @media screen and (min-width: 1199px){
     .vue-container{
         padding-left: 120px;
         padding-right: 120px;
     }
 }
 @media screen and (max-width: 1199px){
     .vue-container{
         padding-left: 34px;
         padding-right: 34px;
     }
 }
 @media screen and (max-width: 992px){
     .vue-container{
         padding-left: 24px;
         padding-right: 24px;
     }
 }
 @media screen and (max-width: 580px){
     .vue-container{
         padding-left: 16px;
         padding-right: 16px;
     }
 } */
</style>