<template>
  <div class="container">
    <h1>FIFTEENPUZZLEGAME</h1>
    <div class="parameter">
      <score-block v-bind:score="score"></score-block>
      <timer-block></timer-block>
    </div>
    <the-puzzle v-on:counter="getScore"></the-puzzle>
  </div>
</template>

<script>
import ThePuzzle from "./Puzzle.vue";
import Timer from "./Timer.vue"
import Score from "./Score.vue"

export default {
  data () {
    return {
      score: 0
    }
  },
  components: {
    "the-puzzle": ThePuzzle,
    "timer-block": Timer,
    "score-block": Score
  },
  methods: {
    getScore (score) {
      this.score = score
    }
  }
}
</script>

<style scoped lang="scss">
    .container {
        width: 13rem;
        margin: 0 auto;
        font-family: 'Courier New', Courier, monospace;

    }

    .parameter {
      display: flex;
      font-weight: 600;
      font-size: 1.5rem;
      color: red;
    }

    h1 {
      font-size: 1.2rem;
      text-align: center;
      margin: 0;
      color: red;
    }
</style>