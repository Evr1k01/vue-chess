<template>
  <div class="main">
    <board-component :board="board"></board-component>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";
import {Board} from "@/components/Board";
import BoardComponent from '@/components/base/Board.vue'

export default defineComponent({
  components: {
    BoardComponent
  },

  setup() {

    const board = ref(new Board());

    const restart = () => {
      const newBoard = new Board()
      newBoard.initBoard()
      newBoard.addFigures()
      board.value = newBoard
      console.log(board.value.cells)
    }

    onMounted(() => {
      restart();
    });

    return {
      board
    }
  }
})
</script>