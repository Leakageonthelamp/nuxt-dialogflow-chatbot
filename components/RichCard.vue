<template>
  <nuxt-link to="#" class="rich-card" tabindex="0">
    <img
      v-if="imageUri"
      class="rich-card-image"
      :src="imageUri"
      :alt="imageTitle || title"
    />
    <div class="rich-card-content">
      <div v-if="title" class="rich-card-title">{{ title }}</div>
      <div v-if="subTitle" class="rich-card-subtitle">{{ subTitle }}</div>
      <div v-if="text" class="rich-card-text">{{ text }}</div>
      <div :class="{ 'rich-card-action': $slots.default }"><slot /></div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    imageUri: {
      type: String,
      default: '',
    },
    imageTitle: {
      type: String,
      default: '',
    },
    subTitle: {
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
.rich-card {
  @apply bg-white shadow-lg rounded-lg;
  @apply hover:shadow-xl transition duration-300;
  .rich-card-image {
    @apply w-full h-auto object-cover rounded-tr-lg rounded-tl-lg;
  }
  .rich-card-content {
    @apply p-4;
    .rich-card-title {
      @apply text-xl leading-6 overflow-hidden truncate;
    }
    .rich-card-subtitle {
      @apply text-base leading-6 text-gray-400;
    }
    .rich-card-text {
      @apply text-sm leading-6 whitespace-normal text-gray-400;
    }
    .rich-card-actions {
      @apply pt-4;
    }
  }
}
</style>
