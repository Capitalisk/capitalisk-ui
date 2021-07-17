<template>
  <div class="loading flex justify-center align-center">
    <i class="fa fa-circle-notch fa-spin mr-1"></i>
    Loading
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Loading',
  props: {
    size: {
      type: Number,
      default: 25,
    },
  },
});
</script>

<style scoped>
.loading {
  margin: var(--unit-2) 0;
  width: 100%;
}
</style>
