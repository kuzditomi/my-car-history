<template>
    <div>
        <div class="greeting">Szia{{exclamationMarks}}</div>
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Szia extends Vue {
  enthusiasm = 5;
  increment() { 
    this.enthusiasm++;
  }
  decrement() {
    if (this.enthusiasm > 1) {
      this.enthusiasm--;
    }
  }
  get exclamationMarks(): string {
    return Array(this.enthusiasm + 1).join("!");
  }
}
</script>

<style>
.greeting {
  color: red;
}
</style>
