<template>
  <div id="app">
    <v-header></v-header>
    <v-nav></v-nav>
    <router-view/>
    <v-footer></v-footer>  
  </div>
</template>

<script>
import VHeader from '@/component/header/header'
import VNav from '@/component/nav/nav'
import VFooter from '@/component/footer/footer'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: 'App',
  components:{
    VHeader,
    VNav,
    VFooter
  },
    beforeRouteEnter (to, from, next) {
       console.log(to)
       console.log(from)
       console.log(next)
       next();
    },
    beforeRouteUpdate (to, from, next) {
       console.log(to)
       console.log(from)
       console.log(next)
       next();
    },
     beforeRouteLeave (to, from, next) {
       console.log(to)
       console.log(from)
       console.log(next)
       next();
    },
}
</script>

<style>
@import '../../assets/css/reset.css'
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 /* text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
}
</style>

