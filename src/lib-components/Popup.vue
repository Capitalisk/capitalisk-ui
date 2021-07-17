<template>
  <div class="popup">
    <Section>
      <slot />
    </Section>
  </div>
</template>

<script>
import Section from './Section';

export default {
  name: 'Popup',
  setup() {},
  components: { Section },
};
</script>

<style scoped>
.popup {
  position: absolute;
  transform: translateY(var(--unit-2));
  right: 0;
  min-width: 300px;
  z-index: 999;
}
</style>
