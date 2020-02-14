<template>
  <div id="app">
  <login></login>
  <privado></privado>
  </div>
</template>

<script>
import privado from './components/privado.vue'
import login from './components/login.vue'
export default {
  name: 'app',
  components: {
    login,
    privado
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
