<template id="template">
  <div id="app">
    <Navbar class="navbar"></Navbar>
    <Display class="display"></Display>
    <!-- <Test :msg="msg" /> -->
  </div>
</template>

<script>
import Test from "./components/Test.vue";
import Display from "./components/Display.vue";
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Test,
    Display,
    Navbar
  },
  data() {
    return {
      msg: "It works!"
    };
  },
};
</script>

<style>
  #template {
    height: 100%;
  }
  #app {
    height: 100%;
  }
  .navbar {
    background-color: #263F5B;
    float: left;
    width: 20%;
    height: 100%;
  }
  .display {
    background-color: #2CC470;
    float: right;
    width: 80%;
    height: 100%;
  }
</style>