<template>
    <div class="cell" v-bind:style="styleObject" @click="select">
        {{validation}}
    </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number
    }
  },
  computed: {
    styleObject: function () {
      return {
        backgroundColor: this.value ? 'pink' : 'yellow',
        zIndex: this.value ? '1' : 0
      }
    },
    validation: function () {
      return this.value ? this.value : ''
    }
  },
  methods: {
    select () {
      this.$emit('select', this.value)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .cell {
        width: 3rem;
        height: 3rem;
        border: 1px solid yellow;
        text-align: center;
        line-height: 3rem;
        transition: transform 0.25s ease-in-out;
        font-size: 2rem;
        margin: 0.05rem;
        color: red;
    }
</style>
