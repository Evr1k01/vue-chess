<template>
  <div :class="cellClass" @click="setCell" :style="{ background: cell.figure && cell.available ? 'green' : '' }">
    <template v-if="cell.figure">
      <img :src="cell.figure.logo" :alt="cell.figure.name">
    </template>
    <template v-if="!cell.figure && cell.available">
      <div class="available"></div>
    </template>
  </div>
</template>

<script lang="ts">
import {Cell} from "@/components/Cell";
import {computed, PropType, toRef} from "vue";

export default {
  name: "CellComponent",
  props: {
    cell: Object as PropType<Cell>,
    selected: Boolean,
    currentSelected: Object as PropType<Cell>
  },
  emits: ['setSelectedCell'],

  setup(props, context) {

    const cell = toRef(props, 'cell')
    const isSelected = toRef(props, 'selected')
    const currentSelected = toRef(props, 'currentSelected')

    const cellClass = computed((): string => {
      return `cell ${isSelected.value ? 'selected' : ''} ${cell.value?.color}`;
    });

    const setCell = () => {
      if (currentSelected.value && currentSelected.value !== cell.value && currentSelected.value.figure?.canMoveFigure(cell.value as Cell)) {
        currentSelected.value?.moveFigure(cell.value)
        context.emit('setSelectedCell', null)
      } else {
        context.emit('setSelectedCell', cell.value)
      }
    }

    return {
      cellClass,
      setCell,
    }
  }
}
</script>

<style scoped>

</style>