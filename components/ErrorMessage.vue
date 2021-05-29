<template>
  <div class="error-message">
    <solid-exclamation-circle-icon class="w-16 h-16 text-red-400" />
    <div class="error-message-description">
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.error-message {
  @apply flex flex-col items-center;
  .error-message-description {
    @apply text-base break-words text-center text-gray-400 mt-1;
  }
}
</style>
