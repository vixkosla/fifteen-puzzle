<template>
  <div class="timer">
    {{ minutes }}:{{ seconds }}
  </div>
</template>

<script>
export default {
  data () {
      return {
          startTime: null,
          currentTime: null
      }
  },
  mounted() {
      this.startTime = new Date()
      this.currentTime = new Date()
      setInterval(() => {
          this.currentTime = new Date()
      }, 1000)
  },
  computed: {
      delay: function () {
        return Math.floor((this.currentTime - this.startTime) / 1000)
      },
      seconds: function () {
        return this.delay % 60
      },
      minutes: function () {
        return (this.delay - this.seconds) / 60
      }
      
  }
}
</script>

<style lang="scss" scoped>
    .timer {
        border: 1px solid red;
        width: $parametr-width;
        text-align: center;
    }
</style>