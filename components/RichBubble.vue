<template>
  <div class="rich-bubble" tabindex="0" :class="{ me: me, loading: loading }">
    {{ text }}
    <vue-element-loading
      :active="loading"
      spinner="mini-spinner"
      color="#9ca3af"
    />
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Loading',
    },
    me: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.rich-bubble {
  max-width: fit-content;
  @apply inline-block relative;
  @apply p-3 border rounded-tl-none rounded-full bg-gray-200;
  @apply break-words flex-grow-0;
  &::before {
    @apply content-start absolute left-0 top-0 -mt-2 -ml-1;
  }
  &.me {
    @apply border bg-green-500 rounded-tr-none rounded-tl-full;
    &::before {
      content: '';
    }
    &::after {
      @apply absolute right-0 top-0 -mt-2 -ml-1;
    }
  }
  &.loading {
    border-style: none;
    @apply h-12 animate-pulse border-none px-5;
  }
}
</style>
