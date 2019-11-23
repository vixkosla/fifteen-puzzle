<template>
  <transition-group name=flip-list tag="div" class="playground">
    <cell-item v-for="cell in cells" v-bind:key="cell.value" v-bind:value="cell.value" v-on:select="handler"></cell-item>
  </transition-group>
</template>

<script>
import Cell from "@/components/Cell.vue"
import Point from "@/assets/point.js"

export default {
  components: {
    "cell-item": Cell
  },
  data () {
    return {
      dimension: 4,
      cells: [],
      defaultCells: [],
      whiteSpace: {},
      countOfMix: 100,
      counter: null
    };
  },
  mounted() {

    this.fillPlayground(this.cells, this.dimension)
    this.fillPlayground(this.defaultCells, this.dimension)
    this.defaultWhiteSpace(this.whiteSpace, this.dimension)
    this.mixPlayground()

  },
  methods: {
    fillPlayground (array, m) {
      for (let i = 0; i < m ; i++) {
        for (let j = 0; j < m ; j++) {
          const object = {
            y: i,
            x: j,
            value: m * i + j + 1
          }
          array.push(object);
        }
      }
      array[ m * m - 1 ].value = 0
    },
    defaultWhiteSpace (obj, m) {
      this.$set(obj, 'y', m - 1)
      this.$set(obj, 'x', m - 1)
      this.$set(obj, 'index', m * m - 1)
    },
    swapWhiteSpace (xi,yi) {
      // find required index of certain cell's value 
      const index = this.cells.findIndex(cell => cell.x === xi && cell.y === yi)
      // change values of whitespace and certain cell in the model
      this.cells[this.whiteSpace.index].value = this.cells[index].value
      this.cells[index].value = 0
      
      // save new coordinates of whitespaces to data
      this.whiteSpace.x = this.cells[index].x
      this.whiteSpace.y = this.cells[index].y
      this.whiteSpace.index = index 
    },
    handler (value) {
      const index = this.cells.findIndex(cell => cell.value === value)
      const xi = this.cells[index].x
      const yi = this.cells[index].y

      if (!this.validateWhiteSpace(xi, yi) && this.validateAdjacent(xi, yi)) {
        this.swapWhiteSpace(xi,yi)
        this.counter++
        this.$emit('counter', this.counter)
      }
    },
    validateLocation (xi, yi, m) {
      return xi < 0 || xi > m - 1 || yi > m - 1 || yi < 0 ? false : true;
    },
    validateWhiteSpace (xi, yi) {
      return xi === this.whiteSpace.x && yi === this.whiteSpace.y ? true : false; 
    },
    validateAdjacent (xi, yi) {
      if (yi === this.whiteSpace.y && 1 === Math.abs(this.whiteSpace.x - xi)) 
      return true;
      else if (xi === this.whiteSpace.x && 1 === Math.abs(this.whiteSpace.y - yi))
      return true;
      else return false;
    },
    randomeMove () {
      let up = new Point(this.whiteSpace.x - 1, this.whiteSpace.y ),
      down = new Point(this.whiteSpace.x + 1, this.whiteSpace.y),
      left = new Point(this.whiteSpace.x , this.whiteSpace.y - 1),
      right = new Point(this.whiteSpace.x , this.whiteSpace.y + 1);

      let randomMove = undefined;
      let randomNumber = undefined;

      do {
        randomNumber = Math.floor(Math.random()*4);
        switch (randomNumber) {
          case 0:
            randomMove = up;
            break;
          case 1:
            randomMove = down;
            break;
          case 2:
            randomMove = left;
            break;
          case 3:
            randomMove = right; 
            break;
        } 
      } while (!this.validateLocation(randomMove.x, randomMove.y, this.dimension));
      this.swapWhiteSpace (randomMove.x, randomMove.y);
    },
    mixPlayground () {
      for (let i = 0; i < this.countOfMix; i++) {
        this.randomeMove()
      } 
    },
    checkGameScore () {
      let result = true;
      for (let i = 0; i < this.cells.length; i++) {
        if (this.cells[i].value != this.defaultCells[i].value) {
          result = false
        }
      }
      return result;
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .playground {
    display: flex;
    flex-wrap: wrap;
    width: 13rem;
    height: 13rem;
    border: 0.05rem solid yellow;
    margin: 0.2rem auto;
    background-color: yellow;
  }

  .flip-list-move {
    transition: transform 0.35s;
  }
</style>
