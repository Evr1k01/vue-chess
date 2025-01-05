<template>
  <div class="main">
    <board-component
        :board="board"
        :current-player="currentPlayer"
        @update-board="updateBoard"
        @swap-player="swapPlayer"
    >
    </board-component>
    <div>
      <lost-figures title="Black" :lost-figures="board.lostBlackFigures"></lost-figures>
      <lost-figures title="White" :lost-figures="board.lostWhiteFigures"></lost-figures>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref, watch} from "vue";
import {Board} from "@/components/Board";
import {Player} from "@/components/Player";
import BoardComponent from '@/components/base/Board.vue'
import LostFigures from "@/components/base/LostFigures.vue";
import Color from "@/helpers/enums/Color";

export default defineComponent({
  components: {
    BoardComponent,
    LostFigures
  },

  setup() {

    const board = ref<Board>(new Board());
    const whitePlayer = ref(new Player(Color.WHITE))
    const blackPlayer = ref(new Player(Color.BLACK))
    const currentPlayer = ref<Player | null>(null)

    const restart = () => {
      const newBoard = new Board()
      newBoard.initBoard()
      newBoard.addFigures()
      board.value = newBoard
    }

    const updateBoard = (updateBoard: Board) => {
      board.value = updateBoard
    }

    const swapPlayer = () => {
      currentPlayer.value = currentPlayer.value?.color === Color.WHITE
          ? {...blackPlayer.value}
          : {...whitePlayer.value}
    }

    onMounted(() => {
      restart();
      currentPlayer.value = {...whitePlayer.value}
    });

    return {
      board,
      updateBoard,
      currentPlayer,
      swapPlayer,
    }
  }
})
</script>