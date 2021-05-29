<template>
  <div class="warpper">
    <HomeContainer />
    <!-- <button class="fixed bottom-0" @click="sendQuery">Send</button> -->
  </div>
</template>

<script>
import HomeContainer from '@/containers/HomeContainer.vue'

export default {
  components: { HomeContainer },

  methods: {
    async sendQuery() {
      const response = await this.$axios.$post('/handlers/message', {
        sessionId: 'abc1234',
        query: 'Hello',
      })
      console.log(response)
    },
  },
}
</script>
