<template>
  <div id="app">
    <the-game></the-game>
  </div>
</template>

<script>
import TheGame from "./components/TheGame.vue"

export default {
  name: "app",
  components: {
    "the-game": TheGame
  }
};
</script>

<style lang="scss">
#app {
  display: block;
}
</style>
