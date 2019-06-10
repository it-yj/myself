<template>
  <v-app>
    <app-header></app-header>
    <router-view></router-view>
    <router-view name="a"></router-view>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
  export default {
    name: 'App',
    components: {
      appHeader: Header,
      appFooter: Footer
    },
    data () {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style>

</style>
