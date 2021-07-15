<script>
import { defineComponent, ref } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import * as components from '@/entry.esm';
import * as components from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  components,
  setup() {
    const inputRef = ref(null);

    return {
      inputRef,
      logButton: () => console.log('button clicked'),
    };
  },
});
</script>

<template>
  <div id="app">
    <Sample />
    <Input
      v-model="inputRef"
      :rules="[(val) => !!val || (val && val.length <= 0) || 'Required']"
      prefix="R$"
      suffix="Money"
    />
    <Button value="Button" @click="logButton" />
  </div>
</template>

<style scoped>
@import url('./serve.css');
</style>
