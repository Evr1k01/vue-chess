<template>
  <div class="board">
    <div v-for="(row, index) in board.cells" :key="index">
      <cell-component
        ref="cellComp"
        v-for="(cell, cellIndex) in row"
        :key="cellIndex"
        :cell="cell"
        :selected="isCellSelected(cell)"
        @set-selected-cell="setSelectedCell"
      ></cell-component>
    </div>
  </div>
</template>

<script lang="ts">
import {Board} from "@/components/Board";
import CellComponent from "@/components/base/Cell.vue";
import {ref} from "vue";
import {Cell} from "@/components/Cell";

export default {
  name: "BoardComponent",
  components: {
    CellComponent
  },
  props: {
    board: Board
  },

  setup() {
    const selectedCell = ref<Cell | null>(null)

    const setSelectedCell = (cell: Cell) => {
      selectedCell.value = cell
    }

    const isCellSelected = (cell: Cell): boolean => {
      return selectedCell.value !== null
          && cell.x === selectedCell.value.x
          && cell.y === selectedCell.value.y
    }

    return {
      setSelectedCell,
      isCellSelected
    }
  }
}

</script>

<style scoped>

</style>