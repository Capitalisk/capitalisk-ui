<template>
  <div class="clsk-ui-avatar">L</div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    color: {
      type: String,
      default: 'warning',
    },
    textColor: {
      type: String,
    },
  },
  setup(props, { slots }) {
    console.log(slots);
    return {};
  },
};
</script>

<style scoped>
.clsk-ui-avatar {
  height: var(--unit-6);
  width: var(--unit-6);
  border-radius: 50%;
  background-color: blue;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(var(--unit-6) / 2);
}
</style>
