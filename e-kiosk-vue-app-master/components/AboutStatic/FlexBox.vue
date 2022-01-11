<template>
    <div class="flex-box" :class="{reverse}">
        <div class="flex-col">
            <img v-if="src" :src="src" alt="">
        </div>
        <div class="flex-col">
            <div class="title-box">
                <Typography>
                    {{title}}
                </Typography>
            </div>  
            <div class="desc-box">
                <Typography>
                    <slot/>
                </Typography>
            </div>
        </div>
    </div>  
</template>

<script>
    import Typography from "@/components/common/Typography/";
    export default {
        props: {
            title: {
                type: [String, Number],
                default: ''
            },
            reverse: {
                type: Boolean,
                default: false
            },
            src: {
                type: [String, Number],
                default: null
            }
        },
        components:{
            Typography
        }
    }
</script>

<style scoped>
    .title-box{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        margin-bottom: 32px;
        font-weight: normal;
        font-size: 36px;
        line-height: 42px;
        font-weight: 400;
        color: #FFFFFF;
    }
    .flex-box{
        display: flex;
        position: relative;
    }
    .flex-box.reverse{
        flex-direction: row-reverse;
    }
    .flex-box.reverse .flex-col:first-child{
        padding-left: 20px;
        padding-right: 0;
    }
    .flex-box.reverse .flex-col:last-child{
        padding-left: 0px;
        padding-right: 20px;
    }
    .flex-col{
        width: 50%;
    }
    .flex-col:first-child{
        padding-right: 20px;
        height: 404px;
    }
    .flex-col img{
        width: 100%;
        height: 100%;
        position: relative;
        object-fit: cover;
    }
    .flex-col:last-child {
        padding-left: 20px;
    }
    .desc-box{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 30px;
        color: #FFFFFF;
    }
    @media screen and (max-width: 992px){
        .flex-box{
            flex-wrap: wrap;
        }
        .flex-col{
            width: 100%;
            padding: 0 !important;
            margin-bottom: 40px;
        }
    }
     @media screen and (max-width: 500px){
        .flex-col:first-child{
            height: 240px;
        }
        .flex-box{
            flex-direction: column-reverse;
        }
        .flex-box.reverse{
            flex-direction: column-reverse;
        }
        .flex-col:first-child{
            margin-bottom: 0;
        }
        .title-box{
            width: 100%;
            font-weight: 500;
            text-align: center;
            font-size: 24px;
            line-height: 28px;
        }
        .desc-box{
            font-weight: 300;
            font-size: 16px;
            line-height: 28px;
        }
        .flex-col{
            margin-bottom: 32px;
        }
    }   
</style>