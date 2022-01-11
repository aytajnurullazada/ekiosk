<template>
    <svg width="1em" height="1em" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 1.80005V6.06672" :stroke="color" stroke-width="2" stroke-linecap="square"/>
<path d="M6 10.3333H6.00615" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>

<script>
    export default {
        props: {
            color:{
                type: String,
                default: 'white'
            }
        }
    }
</script>

<style scoped>

</style>