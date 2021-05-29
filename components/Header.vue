<template>
  <header class="top-head">
    <div class="top-head-container">
      <img
        v-if="agent.avatarUri"
        class="top-head-icon"
        :alt="agent.displayName"
        :src="agent.avatarUri"
      />
      <img
        v-else
        class="top-head-icon"
        src="https://console.dialogflow.com/api-client/assets/img/logo-short.png"
        :alt="agent.displayName"
      />
      <div class="top-head-info">
        <div class="top-head-title">{{ agent.displayName }}</div>
        <div class="top-head-subtitle">This is test app for digital flow</div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  //   props: {
  //     agent: {
  //       type: Object,
  //       default: () => {},
  //     },
  //   },

  data: () => ({
    agent: {
      displayName: 'Agent01',
    },
  }),
}
</script>

<style lang="scss" scoped>
.top-head {
  @apply fixed w-full flex top-0 h-10 bg-white z-20;
  .top-head-container {
    @apply p-8 flex flex-1 items-center bg-white;
    .top-head-icon {
      @apply w-10 h-10 object-cover;
    }
    .top-head-info {
      @apply inline-block ml-2;
    }
    .top-head-title {
      @apply text-lg leading-4;
    }
    .top-head-subtitle {
      @apply text-sm text-gray-500;
    }
  }
}
</style>
