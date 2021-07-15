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
    const switchRef = ref(false);
    const notificationRef = ref(null);

    return {
      inputRef,
      switchRef,
      notificationRef,
      openNotification: () => {
        notificationRef.value.notify({
          message: 'Testing the notification',
          seconds: 2,
        });
      },
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
    <Button value="Button" @click="openNotification" />
    <Tooltip content="This is a tooltip" />
    <Switch v-model="switchRef" />
    <Notification ref="notificationRef" />
  </div>
</template>

<style scoped>
@import url('./serve.css');

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}
</style>
