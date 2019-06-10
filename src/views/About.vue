<template>
  <v-content>
    <v-container>
      <h1>This is an about page</h1>
      <v-btn flat small color="warning" @click="goToHome">Home</v-btn>
    </v-container>
    <router-view></router-view>
  </v-content>
</template>
<script>
  export default {
    data() {
      return {
        name: 'Hellon',
        childrenShow: false
      }
    },
    methods: {
      goToHome() {
        this.$router.replace({name: 'home'});
      }
    },
  }
</script>
<style>
  .v-content__wrap {
    text-align: center;
  }
</style>