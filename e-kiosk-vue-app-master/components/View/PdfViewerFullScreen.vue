<template>
    <div class="fixed-modal">
        <div class="close-modal" @click="$emit('close')">
            <CloseSvg color="white"/>
        </div>
        <div class="pdf-viewer-box">
            <slot/>
        </div>
    </div>
</template>

<script>
    import CloseSvg from '@/svgComponents/Close';
    export default {
        components: {
            CloseSvg
        }
    }
</script>

<style  scoped>
    .pdf-viewer-box{
        position: relative;
        width: 100%;
        height: 100%;
    }
    .fixed-modal{
        position: fixed;
        width: 100%;
        height: 100vh;
        background-color: #1A1A1A;
        z-index: 99999;
        left: 0;
        padding: 80px;
        padding-top: 40px;
        padding-bottom: 40px;
        border: 20px solid #5387ED;
        top: 0;
    }
    .close-modal{
        cursor: pointer;
        position: absolute;
        right: 20px;
        top: 25px;
        font-size: 30px;
    }
    @media screen and (max-width: 991px){
        .fixed-modal{
            padding: 16px !important;
            border: 5px solid #5387ED;
        }
         .close-modal{
             right: 16px;
             top: 16px;
             font-size: 24px;
         }
    }
</style>