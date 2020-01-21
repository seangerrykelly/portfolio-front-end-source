<template>
  <div id="app">
    <NavDrawer></NavDrawer>
    <AppBar></AppBar>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
  import AppBar from "@/components/navigation/AppBar";
  import NavDrawer from "@/components/navigation/NavDrawer";
  export default {
    components: {
      AppBar,
      NavDrawer
    }
  }
</script>