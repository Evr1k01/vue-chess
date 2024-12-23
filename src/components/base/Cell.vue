<template>
  <div :class="cellClass" @click="setCell">
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
import {computed, toRef} from "vue";

export default {
  name: "CellComponent",
  props: {
    cell: Cell,
    selected: Boolean
  },
  emits: ['setSelectedCell'],

  setup(props, context) {

    const cell = toRef(props, 'cell')
    const selected = toRef(props, 'selected')

    const cellClass = computed((): string => {
      return `cell ${selected.value ? 'selected' : ''} ${cell.value?.color}`;
    });

    const setCell = () => {
      context.emit('setSelectedCell', cell.value)
    }

    return {
      cellClass,
      setCell
    }
  }
}
</script>

<style scoped>

</style>