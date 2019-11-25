<template>
  <div class="score">{{score}}</div>
</template>

<script>
export default {
  props: {
    score: {
      type: Number
    }
  }
}
</script>

<style lang="scss" scoped>
    .score {
        width: $parametr-width;
        border: 1px solid red;
        text-align: center
    }
</style>