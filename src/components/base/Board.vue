<template>
  <div class="game-container">
    <h3 class="current-player">
      Current player: <span :class="`player-${currentPlayer?.color}`">{{ currentPlayer?.color }}</span>
    </h3>
    <div class="board">
      <div v-for="(row, index) in propsBoard.cells" :key="index">
        <cell-component
          v-for="(cell, cellIndex) in row"
          :key="cellIndex"
          :cell="cell"
          :selected="isCellSelected(cell)"
          :currentSelected="selectedCell"
          @set-selected-cell="setSelectedCell"
        ></cell-component>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Board} from "@/components/Board";
import CellComponent from "@/components/base/Cell.vue";
import {ref, toRef, watch} from "vue";
import type {PropType} from "vue";
import {Cell} from "@/components/Cell";
import {Player} from "@/components/Player";

export default {
  name: "BoardComponent",
  components: {
    CellComponent
  },
  props: {
    board: Board,
    currentPlayer: Object as PropType<Player | null>
  },
  emits: ['updateBoard', 'swapPlayer'],

  setup(props, context) {
    const selectedCell = ref<Cell | null>(null)
    const propsBoard = toRef(props, 'board')
    const currentPlayer = toRef(props, 'currentPlayer')

    const updateBoard = () => {
      if (propsBoard.value instanceof Board) {
        const bd = propsBoard.value.getBoardCopy()
        context.emit('updateBoard', bd)
      }
    }

    const highlightCell = (selectedCell: Cell) => {
      (propsBoard.value as Board).highlightCell(selectedCell)
    }

    const setSelectedCell = (cell: Cell | null) => {
      if (!cell) {
        swapPlayer()
        selectedCell.value = null
      } else {
          if (cell.figure?.color === currentPlayer.value?.color) {
            selectedCell.value = cell
          }
        }
      }

    const isCellSelected = (cell: Cell): boolean => {
      return selectedCell.value !== null
          && cell.x === selectedCell.value.x
          && cell.y === selectedCell.value.y
    }

    const swapPlayer = () => {
      context.emit('swapPlayer')
    }

    watch(selectedCell, () => {
      highlightCell(selectedCell.value as Cell)
    })

    return {
      propsBoard,
      selectedCell,
      setSelectedCell,
      isCellSelected,
      swapPlayer
    }
  }
}

</script>

<style scoped>

</style>