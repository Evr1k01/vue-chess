<template>
  <div class="lost-figures">
    <h3>{{title}}</h3>
    <div class="figures-container">
      <div v-for="(figure, index) in lostFigures" :key="index">
        <img
          v-if="figure.logo"
          width="20"
          height="20"
          :src="figure.logo"
          :alt="figure.name">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Figure} from "@/components/Figure";
import type {PropType} from "vue";

export default {
  name: "LostFigures",
  props: {
    title: String,
    lostFigures: Array as PropType<Figure[]>
  },

  setup(props) {

    return {
    }
  }
}
</script>

<style scoped>

</style>