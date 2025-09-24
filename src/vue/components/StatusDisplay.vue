<template>
  <div>
    <p>{{ statusMessage }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    isOnline: {
      type: Boolean,
      required: true,
    },
    message: {
      type: String,
      default: 'Offline',
    },
  },
  computed: {
    statusMessage(): string {
      // El mutante cambiará '||' a '&&'.
      if (this.isOnline || this.message.length === 0) {
        return 'Status: Online';
      } else {
        return `Status: ${this.message}`;
      }
    },
  },
});
</script>