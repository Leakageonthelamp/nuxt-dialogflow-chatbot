<template>
  <div class="rich-list">
    <div v-if="title" class="rich-list-title">{{ title }}</div>
    <div v-if="subtitle" class="rich-list-subtitle">{{ subtitle }}</div>
    <ul :aria-label="title" class="rich-list-content">
      <slot />
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title',
    },
    subtitle: {
      type: String,
      default: 'Subtitle',
    },
  },
}
</script>

<style lang="scss" scoped>
.rich-list {
  @apply p-4 rounded-lg bg-white shadow-lg;
  .rich-list-title {
    @apply text-xl leading-7;
  }
  .rich-list-subtitle {
    @apply leading-6 text-gray-400;
  }
  .rich-list-content {
    rich-list-style-type: none;
    @apply m-0 p-0;
  }
}
</style>
