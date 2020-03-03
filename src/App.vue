<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <el-button>btn</el-button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="red">am i red???</div>
    <div class="yellow">yellow</div>
    <foo/>
    <bar/>
  </div>
</template>

<script>
import { Button } from 'element-ui';
import HelloWorld from './components/HelloWorld.vue';
import Foo from './components/Foo.vue';
import Bar from './components/Bar.vue';
// import './index.css';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Foo,
    Bar,
    ElButton: Button,
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .red {
    color: red;
  }
}
</style>
