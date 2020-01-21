<template>
  <v-content>
    <v-layout></v-layout>
    <HelloWorld></HelloWorld>
  </v-content>
</template>

<script>

  import HelloWorld from "@/components/HelloWorld";
export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
