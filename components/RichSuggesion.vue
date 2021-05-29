<template>
  <a v-if="uri" class="rich-suggestion link" :href="uri" target="_blank">{{
    title
  }}</a>
  <button v-else class="rich-suggestion">{{ title }}</button>
</template>

<script>
export default {
  props: {
    uri: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.rich-suggestion {
  padding: 8px 12px;
  @apply inline-block rounded-full border cursor-pointer mr-2 mb-2;
  @apply hover:bg-green-500 hover:text-white transition duration-200;
  &.link {
    @apply text-blue-400 hover:text-white hover:bg-blue-400 underline;
  }
  &:focus {
    @apply outline-none;
  }
}
</style>
