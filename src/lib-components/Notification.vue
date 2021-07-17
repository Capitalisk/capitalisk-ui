<template>
  <template v-if="notifications">
    <div
      v-for="(notification, i) in notifications"
      :key="i"
      class="notification pa-4 ma-2"
      :class="notification.error ? 'danger' : ''"
      :ref="
        (el) => {
          if (el) divs[i] = el;
        }
      "
    >
      <div class="close-btn cursor-pointer" @click="denotify(i)">
        &#10005;
      </div>
      <div class="break mr-2">{{ notification.message }}</div>
    </div>
  </template>
</template>

<script>
import { onBeforeUpdate, onUpdated, reactive, ref, defineComponent } from 'vue';

export default defineComponent({
  name: 'Notification',
  setup() {
    const divs = ref([]);

    onBeforeUpdate(() => (divs.value = []));

    onUpdated(() => {
      for (let i = 0; i < divs.value.length; i++) {
        const notification = divs.value[i];
        const bottom = (notification.offsetHeight + 10) * i;
        notification.style.bottom = `${bottom}px`;
      }
    });

    const notifications = reactive([]);

    const denotify = (index) => notifications.splice(index, 1);
    const notify = (n) => {
      notifications.push(n);
      if (n.seconds)
        setTimeout(() => {
          const index = notifications.findIndex((m) => m === n.message);
          denotify(index);
        }, n.seconds * 1000);
    };

    return {
      notifications,
      divs,
      notify,
      denotify,
    };
  },
});
</script>

<style scoped>
.notification {
  position: fixed;
  border: 1px solid var(--dark);
  border-radius: var(--border-radius);
  bottom: 0px;
  right: 0px;
  background-color: var(--primary);
  max-width: 30vw;
  z-index: 10;
}

.notification.danger {
  border: 1px solid var(--danger);
  color: var(--danger);
  font-weight: 900;
}

.close-btn {
  position: absolute;
  right: var(--unit-2);
  font-size: var(--unit-2);
  color: var(--dark) !important;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
