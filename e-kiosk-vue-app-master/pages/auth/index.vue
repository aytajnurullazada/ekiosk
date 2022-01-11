<template>
    <section class="auth-section" >
        <Header :customStyle="customStyle"/>
        <Auth />
        <Footer :paralax="false"/>
    </section>
</template>

<script>
    import Auth from '@/components/Auth/';
    import Header from '@/components/common/Header';
    import Footer from '@/components/common/Footer';
    export default {
        components: {
            Auth,
            Header,
            Footer
        },
        computed:{
            customStyle(){
                return {
                    backgroundColor: '#1A1A1A',
                    position: 'relative',
                }
            }
        }
    }
</script>

<style  scoped>

</style>