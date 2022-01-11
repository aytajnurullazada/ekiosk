<template>
  <section class="profile-section" >
    <Header :customStyle="customStyle" />
    <Faq :data="faqData"/>
    <Footer :paralax="true" />
  </section>
</template>

<script>
import Faq from "@/components/Faq/";
import Header from "@/components/common/Header/";
import Footer from "@/components/common/Footer/";
export default {
  components: {
    Faq,
    Header,
    Footer
  },
  computed: {
    faqData(){
      return [
        {
          name: 'Abunəlik',
          id: 1,
          children: [
             {
               title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis feugiat velit feugiat quis. In.',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat nec arcu integer vitae. Elit sed mauris senectus elit dictum augue feugiat in. Pharetra, in tincidunt volutpat non blandit molestie amet nec diam. Lacus faucibus ullamcorper turpis senectus est, diam urna. Sed lacus, integer amet, vehicula nunc nisl vestibulum nec mattis. Lobortis amet sem nulla sed quis augue.'
             },
              {
               title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis feugiat velit feugiat quis. In.',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat nec arcu integer vitae. Elit sed mauris senectus elit dictum augue feugiat in. Pharetra, in tincidunt volutpat non blandit molestie amet nec diam. Lacus faucibus ullamcorper turpis senectus est, diam urna. Sed lacus, integer amet, vehicula nunc nisl vestibulum nec mattis. Lobortis amet sem nulla sed quis augue.'
             },
              {
               title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis feugiat velit feugiat quis. In.',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat nec arcu integer vitae. Elit sed mauris senectus elit dictum augue feugiat in. Pharetra, in tincidunt volutpat non blandit molestie amet nec diam. Lacus faucibus ullamcorper turpis senectus est, diam urna. Sed lacus, integer amet, vehicula nunc nisl vestibulum nec mattis. Lobortis amet sem nulla sed quis augue.'
             },
              {
               title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis feugiat velit feugiat quis. In.',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat nec arcu integer vitae. Elit sed mauris senectus elit dictum augue feugiat in. Pharetra, in tincidunt volutpat non blandit molestie amet nec diam. Lacus faucibus ullamcorper turpis senectus est, diam urna. Sed lacus, integer amet, vehicula nunc nisl vestibulum nec mattis. Lobortis amet sem nulla sed quis augue.'
             },
              {
               title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis feugiat velit feugiat quis. In.',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat nec arcu integer vitae. Elit sed mauris senectus elit dictum augue feugiat in. Pharetra, in tincidunt volutpat non blandit molestie amet nec diam. Lacus faucibus ullamcorper turpis senectus est, diam urna. Sed lacus, integer amet, vehicula nunc nisl vestibulum nec mattis. Lobortis amet sem nulla sed quis augue.'
             },
              {
               title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis feugiat velit feugiat quis. In.',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat nec arcu integer vitae. Elit sed mauris senectus elit dictum augue feugiat in. Pharetra, in tincidunt volutpat non blandit molestie amet nec diam. Lacus faucibus ullamcorper turpis senectus est, diam urna. Sed lacus, integer amet, vehicula nunc nisl vestibulum nec mattis. Lobortis amet sem nulla sed quis augue.'
             },
              {
               title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis feugiat velit feugiat quis. In.',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat nec arcu integer vitae. Elit sed mauris senectus elit dictum augue feugiat in. Pharetra, in tincidunt volutpat non blandit molestie amet nec diam. Lacus faucibus ullamcorper turpis senectus est, diam urna. Sed lacus, integer amet, vehicula nunc nisl vestibulum nec mattis. Lobortis amet sem nulla sed quis augue.'
             }
          ]
        },
        {
          name: 'Ödəniş',
          id: 2,
          children: [
             {
               title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis feugiat velit feugiat quis. In.',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat nec arcu integer vitae. Elit sed mauris senectus elit dictum augue feugiat in. Pharetra, in tincidunt volutpat non blandit molestie amet nec diam. Lacus faucibus ullamcorper turpis senectus est, diam urna. Sed lacus, integer amet, vehicula nunc nisl vestibulum nec mattis. Lobortis amet sem nulla sed quis augue.'
             },
              {
               title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis feugiat velit feugiat quis. In.',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat nec arcu integer vitae. Elit sed mauris senectus elit dictum augue feugiat in. Pharetra, in tincidunt volutpat non blandit molestie amet nec diam. Lacus faucibus ullamcorper turpis senectus est, diam urna. Sed lacus, integer amet, vehicula nunc nisl vestibulum nec mattis. Lobortis amet sem nulla sed quis augue.'
             },
              {
               title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis feugiat velit feugiat quis. In.',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat nec arcu integer vitae. Elit sed mauris senectus elit dictum augue feugiat in. Pharetra, in tincidunt volutpat non blandit molestie amet nec diam. Lacus faucibus ullamcorper turpis senectus est, diam urna. Sed lacus, integer amet, vehicula nunc nisl vestibulum nec mattis. Lobortis amet sem nulla sed quis augue.'
             },
              {
               title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis feugiat velit feugiat quis. In.',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat nec arcu integer vitae. Elit sed mauris senectus elit dictum augue feugiat in. Pharetra, in tincidunt volutpat non blandit molestie amet nec diam. Lacus faucibus ullamcorper turpis senectus est, diam urna. Sed lacus, integer amet, vehicula nunc nisl vestibulum nec mattis. Lobortis amet sem nulla sed quis augue.'
             },
              {
               title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis feugiat velit feugiat quis. In.',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat nec arcu integer vitae. Elit sed mauris senectus elit dictum augue feugiat in. Pharetra, in tincidunt volutpat non blandit molestie amet nec diam. Lacus faucibus ullamcorper turpis senectus est, diam urna. Sed lacus, integer amet, vehicula nunc nisl vestibulum nec mattis. Lobortis amet sem nulla sed quis augue.'
             },
              {
               title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis feugiat velit feugiat quis. In.',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat nec arcu integer vitae. Elit sed mauris senectus elit dictum augue feugiat in. Pharetra, in tincidunt volutpat non blandit molestie amet nec diam. Lacus faucibus ullamcorper turpis senectus est, diam urna. Sed lacus, integer amet, vehicula nunc nisl vestibulum nec mattis. Lobortis amet sem nulla sed quis augue.'
             },
              {
               title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis feugiat velit feugiat quis. In.',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat nec arcu integer vitae. Elit sed mauris senectus elit dictum augue feugiat in. Pharetra, in tincidunt volutpat non blandit molestie amet nec diam. Lacus faucibus ullamcorper turpis senectus est, diam urna. Sed lacus, integer amet, vehicula nunc nisl vestibulum nec mattis. Lobortis amet sem nulla sed quis augue.'
             }
          ]
        },
        {
          name: 'Bildirişlər',
          id: 3,
          children: [
             {
               title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis feugiat velit feugiat quis. In.',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat nec arcu integer vitae. Elit sed mauris senectus elit dictum augue feugiat in. Pharetra, in tincidunt volutpat non blandit molestie amet nec diam. Lacus faucibus ullamcorper turpis senectus est, diam urna. Sed lacus, integer amet, vehicula nunc nisl vestibulum nec mattis. Lobortis amet sem nulla sed quis augue.'
             },
              {
               title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis feugiat velit feugiat quis. In.',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat nec arcu integer vitae. Elit sed mauris senectus elit dictum augue feugiat in. Pharetra, in tincidunt volutpat non blandit molestie amet nec diam. Lacus faucibus ullamcorper turpis senectus est, diam urna. Sed lacus, integer amet, vehicula nunc nisl vestibulum nec mattis. Lobortis amet sem nulla sed quis augue.'
             },
              {
               title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis feugiat velit feugiat quis. In.',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat nec arcu integer vitae. Elit sed mauris senectus elit dictum augue feugiat in. Pharetra, in tincidunt volutpat non blandit molestie amet nec diam. Lacus faucibus ullamcorper turpis senectus est, diam urna. Sed lacus, integer amet, vehicula nunc nisl vestibulum nec mattis. Lobortis amet sem nulla sed quis augue.'
             },
              {
               title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis feugiat velit feugiat quis. In.',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat nec arcu integer vitae. Elit sed mauris senectus elit dictum augue feugiat in. Pharetra, in tincidunt volutpat non blandit molestie amet nec diam. Lacus faucibus ullamcorper turpis senectus est, diam urna. Sed lacus, integer amet, vehicula nunc nisl vestibulum nec mattis. Lobortis amet sem nulla sed quis augue.'
             },
              {
               title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis feugiat velit feugiat quis. In.',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat nec arcu integer vitae. Elit sed mauris senectus elit dictum augue feugiat in. Pharetra, in tincidunt volutpat non blandit molestie amet nec diam. Lacus faucibus ullamcorper turpis senectus est, diam urna. Sed lacus, integer amet, vehicula nunc nisl vestibulum nec mattis. Lobortis amet sem nulla sed quis augue.'
             },
              {
               title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis feugiat velit feugiat quis. In.',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat nec arcu integer vitae. Elit sed mauris senectus elit dictum augue feugiat in. Pharetra, in tincidunt volutpat non blandit molestie amet nec diam. Lacus faucibus ullamcorper turpis senectus est, diam urna. Sed lacus, integer amet, vehicula nunc nisl vestibulum nec mattis. Lobortis amet sem nulla sed quis augue.'
             },
              {
               title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis feugiat velit feugiat quis. In.',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat nec arcu integer vitae. Elit sed mauris senectus elit dictum augue feugiat in. Pharetra, in tincidunt volutpat non blandit molestie amet nec diam. Lacus faucibus ullamcorper turpis senectus est, diam urna. Sed lacus, integer amet, vehicula nunc nisl vestibulum nec mattis. Lobortis amet sem nulla sed quis augue.'
             }
          ]
        },
        {
          name: 'Qeydiyyat',
          id: 4,
          children: [
             {
               title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis feugiat velit feugiat quis. In.',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat nec arcu integer vitae. Elit sed mauris senectus elit dictum augue feugiat in. Pharetra, in tincidunt volutpat non blandit molestie amet nec diam. Lacus faucibus ullamcorper turpis senectus est, diam urna. Sed lacus, integer amet, vehicula nunc nisl vestibulum nec mattis. Lobortis amet sem nulla sed quis augue.'
             },
              {
               title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis feugiat velit feugiat quis. In.',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat nec arcu integer vitae. Elit sed mauris senectus elit dictum augue feugiat in. Pharetra, in tincidunt volutpat non blandit molestie amet nec diam. Lacus faucibus ullamcorper turpis senectus est, diam urna. Sed lacus, integer amet, vehicula nunc nisl vestibulum nec mattis. Lobortis amet sem nulla sed quis augue.'
             },
              {
               title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis feugiat velit feugiat quis. In.',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat nec arcu integer vitae. Elit sed mauris senectus elit dictum augue feugiat in. Pharetra, in tincidunt volutpat non blandit molestie amet nec diam. Lacus faucibus ullamcorper turpis senectus est, diam urna. Sed lacus, integer amet, vehicula nunc nisl vestibulum nec mattis. Lobortis amet sem nulla sed quis augue.'
             },
              {
               title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis feugiat velit feugiat quis. In.',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat nec arcu integer vitae. Elit sed mauris senectus elit dictum augue feugiat in. Pharetra, in tincidunt volutpat non blandit molestie amet nec diam. Lacus faucibus ullamcorper turpis senectus est, diam urna. Sed lacus, integer amet, vehicula nunc nisl vestibulum nec mattis. Lobortis amet sem nulla sed quis augue.'
             },
              {
               title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis feugiat velit feugiat quis. In.',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat nec arcu integer vitae. Elit sed mauris senectus elit dictum augue feugiat in. Pharetra, in tincidunt volutpat non blandit molestie amet nec diam. Lacus faucibus ullamcorper turpis senectus est, diam urna. Sed lacus, integer amet, vehicula nunc nisl vestibulum nec mattis. Lobortis amet sem nulla sed quis augue.'
             },
              {
               title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis feugiat velit feugiat quis. In.',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat nec arcu integer vitae. Elit sed mauris senectus elit dictum augue feugiat in. Pharetra, in tincidunt volutpat non blandit molestie amet nec diam. Lacus faucibus ullamcorper turpis senectus est, diam urna. Sed lacus, integer amet, vehicula nunc nisl vestibulum nec mattis. Lobortis amet sem nulla sed quis augue.'
             },
              {
               title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis feugiat velit feugiat quis. In.',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat nec arcu integer vitae. Elit sed mauris senectus elit dictum augue feugiat in. Pharetra, in tincidunt volutpat non blandit molestie amet nec diam. Lacus faucibus ullamcorper turpis senectus est, diam urna. Sed lacus, integer amet, vehicula nunc nisl vestibulum nec mattis. Lobortis amet sem nulla sed quis augue.'
             }
          ]
        },
        {
          name: 'Qiymətləndirmə',
          id: 5,
          children: [
             {
               title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis feugiat velit feugiat quis. In.',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat nec arcu integer vitae. Elit sed mauris senectus elit dictum augue feugiat in. Pharetra, in tincidunt volutpat non blandit molestie amet nec diam. Lacus faucibus ullamcorper turpis senectus est, diam urna. Sed lacus, integer amet, vehicula nunc nisl vestibulum nec mattis. Lobortis amet sem nulla sed quis augue.'
             },
              {
               title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis feugiat velit feugiat quis. In.',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat nec arcu integer vitae. Elit sed mauris senectus elit dictum augue feugiat in. Pharetra, in tincidunt volutpat non blandit molestie amet nec diam. Lacus faucibus ullamcorper turpis senectus est, diam urna. Sed lacus, integer amet, vehicula nunc nisl vestibulum nec mattis. Lobortis amet sem nulla sed quis augue.'
             },
              {
               title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis feugiat velit feugiat quis. In.',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat nec arcu integer vitae. Elit sed mauris senectus elit dictum augue feugiat in. Pharetra, in tincidunt volutpat non blandit molestie amet nec diam. Lacus faucibus ullamcorper turpis senectus est, diam urna. Sed lacus, integer amet, vehicula nunc nisl vestibulum nec mattis. Lobortis amet sem nulla sed quis augue.'
             },
              {
               title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis feugiat velit feugiat quis. In.',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat nec arcu integer vitae. Elit sed mauris senectus elit dictum augue feugiat in. Pharetra, in tincidunt volutpat non blandit molestie amet nec diam. Lacus faucibus ullamcorper turpis senectus est, diam urna. Sed lacus, integer amet, vehicula nunc nisl vestibulum nec mattis. Lobortis amet sem nulla sed quis augue.'
             },
              {
               title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis feugiat velit feugiat quis. In.',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat nec arcu integer vitae. Elit sed mauris senectus elit dictum augue feugiat in. Pharetra, in tincidunt volutpat non blandit molestie amet nec diam. Lacus faucibus ullamcorper turpis senectus est, diam urna. Sed lacus, integer amet, vehicula nunc nisl vestibulum nec mattis. Lobortis amet sem nulla sed quis augue.'
             },
              {
               title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis feugiat velit feugiat quis. In.',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat nec arcu integer vitae. Elit sed mauris senectus elit dictum augue feugiat in. Pharetra, in tincidunt volutpat non blandit molestie amet nec diam. Lacus faucibus ullamcorper turpis senectus est, diam urna. Sed lacus, integer amet, vehicula nunc nisl vestibulum nec mattis. Lobortis amet sem nulla sed quis augue.'
             },
              {
               title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis feugiat velit feugiat quis. In.',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat nec arcu integer vitae. Elit sed mauris senectus elit dictum augue feugiat in. Pharetra, in tincidunt volutpat non blandit molestie amet nec diam. Lacus faucibus ullamcorper turpis senectus est, diam urna. Sed lacus, integer amet, vehicula nunc nisl vestibulum nec mattis. Lobortis amet sem nulla sed quis augue.'
             }
          ]
        }
      ]
    },
    customStyle() {
      return {
        backgroundColor: "#1A1A1A",
        position: "relative",
      };
    },
  },
};
</script>

<style  scoped>
</style>