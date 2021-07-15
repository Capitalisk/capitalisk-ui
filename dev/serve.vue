<script>
import { defineComponent, ref } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import * as components from '@/entry.esm';
import { Input, Sample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  components: { Input },
  setup() {
    const inputRef = ref(null);

    return {
      inputRef,
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
  </div>
</template>
