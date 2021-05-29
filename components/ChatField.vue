<template>
  <div class="chat-field">
    <div class="chat-field-container">
      <transition name="chat-field-suggestions-animation">
        <div v-if="query.length == 0" class="chat-field-suggestions">
          <slot />
        </div>
      </transition>
      <div class="chat-field-flexible">
        <input
          v-model="query"
          class="chat-field-input"
          type="text"
          autofocus
          placeholder="Message"
          :disabled="disabled"
          @keypress.enter="submit({ text: query })"
        />

        <transition name="chat-field-button-animation" mode="out-in">
          <button
            key="send"
            class="chat-field-action"
            title="Send"
            :disabled="disabled"
            @click="submit({ text: query })"
          >
            <solid-arrow-narrow-up-icon class="w-10 h-8 text-blue-500" />
          </button>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    query: '',
    disabled: false,
  }),
  methods: {
    submit(submission) {
      if (submission.text && submission.text.length > 0) {
        this.$emit('submit', submission)
        this.query = ''
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.chat-field {
  @apply fixed bg-white bottom-0 left-0 w-full z-10;
  .chat-field-container {
    @apply max-w-xl mx-auto p-3 bg-white;
    .chat-field-flexible {
      @apply flex rounded-full border;
      .chat-field-input {
        padding: 10px 0 10px 12px;
        // border-radius: 40px 0 0 40px;
        @apply text-base w-full border-none rounded-full bg-transparent;
        &:focus {
          @apply outline-none;
        }
        &:disabled {
          @apply cursor-not-allowed;
        }
      }
      .chat-field-action {
        padding: 10px 12px;
        @apply cursor-pointer text-2xl flex;
        &:disabled {
          @apply cursor-not-allowed;
        }
      }
    }

    .chat-field-suggestions {
      @apply overflow-x-scroll overflow-y-hidden whitespace-nowrap flex;
      &::-webkit-scrollbar {
        @apply hidden;
      }
    }
  }
}

.chat-field-suggestions-animation-enter-active,
.chat-field-suggestions-animation-leave-active {
  transition: all 0.15s ease;
}
.chat-field-suggestions-animation-enter,
.chat-field-suggestions-animation-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
.chat-field-button-animation-enter-active,
.chat-field-button-animation-leave-active {
  transition: all 0.15s ease;
}
.chat-field-button-animation-enter,
.chat-field-button-animation-leave-to {
  transform: scale(0);
  opacity: 0;
}
</style>
