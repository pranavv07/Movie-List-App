<template>
  <Header></Header>
  <Navbar></Navbar>
  <router-view />
</template>
<script>
import Header from "@/components/Header.vue";
import Navbar from "@/components/Navbar.vue";
export default {
  components: {
    Header,
    Navbar,
  },
  data() {
    return {};
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0;
  background-color: black;
  color: white;
  overflow-y: scroll;
  height: 100vh;
}
button {
  cursor: pointer;
}
</style>
