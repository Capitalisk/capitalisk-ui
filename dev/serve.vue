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
    const popupActive = ref(false);
    const selectRef = ref('mainnet');

    return {
      inputRef,
      switchRef,
      notificationRef,
      popupActive,
      selectRef,
      openNotification: () => {
        notificationRef.value.notify({
          message: 'Testing the notification',
          seconds: 2,
        });
      },
      togglePopup: () => (popupActive.value = !popupActive.value),
    };
  },
});
</script>

<template>
  <div id="app">
    <Notification ref="notificationRef" />
    <Sample />
    <Input
      v-model="inputRef"
      :rules="[(val) => !!val || (val && val.length <= 0) || 'Required']"
      prefix="R$"
      suffix="Money"
    />
    <Button value="Button" @click="openNotification" />
    <Switch v-model="switchRef" />
    <Copy value="Copy me" />
    <Avatar />
    <Loading />
    <div class="relative">
      <Button value="Open popup" @click="togglePopup" />
      <Popup v-if="popupActive">
        <div class="flex column">
          <div>Testing this</div>
          <div>Testing this</div>
          <div>Testing this</div>
          <div>Testing this</div>
          <div>Testing this</div>
        </div>
      </Popup>
    </div>
    <Section>
      This is a long text in the Section component
    </Section>
    <Select v-model="selectRef" :options="['mainnet', 'testnet']" />
    <Tooltip content="This is a tooltip" />
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
