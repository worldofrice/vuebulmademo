<template>
  <article :class="`message is-${color}`">
    <div class="message-header">
      <p>{{ title }}</p>
    </div>
    <div class="message-body">
      {{ message }}
    </div>
  </article>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: '',
    validator: function (value) {
      return ['dark', 'primary', 'link', 'info', 'success', 'warning', 'danger', ''].includes(value);
    }
  }
});
</script>