<template>
    <v-content>
        <app-img></app-img>
        <HelloWorld />
        <router-link tag="button" class="v-btn v-btn--flat v-btn--small theme--light primary--text" to="/about/children">Children</router-link>
    </v-content>
</template>

<script>
  import HelloWorld from '../components/HelloWorld';
  import Img from '../components/Img';

  export default {
    data() {
      return {
        name: 'Hellon'
      }
    },
    components: {
      HelloWorld,
      'app-img': Img
    },
    // beforeRouteEnter: (to, from, next) => {
    //   next(vm => {
    //     alert('hello ' + vm.name);
    //   })
    // },
    // beforeRouteLeave: (to, from, next) => {
    //   if(confirm('您确认离开吗?') == true) {
    //     next();
    //   } else {
    //     next(false);
    //   }
    // }
  }
</script>
