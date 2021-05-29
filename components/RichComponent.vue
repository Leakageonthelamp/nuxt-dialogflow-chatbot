<template>
  <div class="rich-component" :class="{ me: me, fullwidth: fullwidth }">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    me: {
      type: Boolean,
      default: false,
    },
    fullwidth: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
* {
  @apply flex-grow;
}

.rich-component {
  animation: show 0.8s ease forwards;
  @apply pb-2 w-full md:w-9/12 break-words flex opacity-0;

  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translateY(-4px);
    }
  }

  &.me {
    @apply flex-row-reverse float-right;
  }
  &.fullwidth {
    @apply w-full;
  }
}
</style>
