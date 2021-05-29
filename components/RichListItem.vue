<template>
  <li class="rich-list-item" tabindex="0">
    <a
      class="rich-list-item-content"
      target="_blank"
      rel="noopener noreferrer"
      :href="uri"
    >
      <div class="rich-list-item-title">{{ title }}</div>
      <span class="rich-list-item-description">{{ description }}</span>
      <span class="rich-list-item-footer">{{ footer }}</span>
    </a>
    <img
      v-if="imageUri"
      class="rich-list-item-image"
      :src="imageUri"
      :alt="imageTitle"
    />
  </li>
</template>

<script>
export default {
  props: {
    imageUri: {
      type: String,
      default: '',
    },
    imageTitle: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    footer: {
      type: String,
      default: '',
    },
    uri: {
      type: String,
      default: 'https://www.google.co.th',
    },
  },
}
</script>

<style lang="scss" scoped>
.rich-list-item {
  @apply cursor-pointer overflow-hidden pt-4 pb-4 border-b flex items-start;
  &:last-child {
    @apply border-b-0 pb-0;
  }
  .rich-list-item-image {
    @apply rounded-lg h-12 w-12 object-cover ml-4 float-right bg-white;
  }

  .rich-list-item-content {
    flex: 1;
    @apply inline-block mt-1 no-underline;
    .rich-list-item-title {
      @apply text-gray-400 leading-6;
    }
    .rich-list-item-description {
      @apply text-gray-400 leading-6 text-sm;
    }
    .rich-list-item-footer {
      @apply text-gray-400 mt-1 text-xs block;
    }
  }
}
</style>
