<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p>Testing out custom directives in <span v-highlight.blink="'#26cc60'">vue</span></p>
    <p v-highlight="'red'">Hello</p>
    <p v-highlight.blink="'green'">Hello</p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
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
  margin: 60px auto;
  max-width: 400px;
}
</style>
