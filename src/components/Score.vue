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
        width: 6.5rem;
        border: 1px solid red;
        text-align: center
    }
</style>