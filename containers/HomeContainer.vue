<template>
  <div class="home-container">
    <Header />
    <section class="chat">
      <error-message v-if="error" :message="error" />
      <section v-else aria-live="polite">
        <div v-for="(message, index) in messages" :key="`mes-${index}`">
          <rich-component v-if="message.from === 'user'" me>
            <rich-bubble :text="message.chat.text" me />
          </rich-component>

          <rich-component v-if="message.from === 'agent'" class="flex flex-col">
            <rich-bubble :text="message.chat.text" />
            <rich-component
              v-for="(component, indexComponent) in message.chat.payload"
              :key="`cp-${indexComponent}`"
              class="mt-1"
              fullwidth
            >
              <rich-card
                v-if="component.type === 'card'"
                :title="component.data.cardTitle.stringValue"
                :image-uri="component.data.cardImage.stringValue"
                :sub-title="component.data.cardSubtitle.stringValue"
                :text="component.data.cardText.stringValue"
              />

              <rich-carousel v-if="component.type === 'carousel'">
                <rich-card
                  v-for="(item, indexItem) in component.data"
                  :key="`i-${indexItem}`"
                  :title="item.cardTitle.stringValue"
                  :image-uri="item.cardImage.stringValue"
                  :text="item.cardText.stringValue"
                />
              </rich-carousel>

              <rich-list
                v-if="component.type === 'list'"
                :title="component.data.listTitle.stringValue"
                :subtitle="component.data.listSubtitle.stringValue"
              >
                <rich-list-item
                  v-for="(list, indexList) in component.data.list.listValue
                    .values"
                  :key="`ls-${indexList}`"
                  :title="list.structValue.fields.title.stringValue"
                  :description="list.structValue.fields.description.stringValue"
                  :image-uri="list.structValue.fields.imageUri.stringValue"
                />
              </rich-list>

              <rich-table-card
                v-if="component.type === 'table'"
              ></rich-table-card>
            </rich-component>
          </rich-component>
        </div>

        <div v-if="loading">
          <rich-component
            ><rich-bubble aria-hidden="true" loading
          /></rich-component>
        </div>
      </section>
    </section>

    <chat-field ref="input" @submit="send">
      <div v-for="(suggestion, index) in suggestions" :key="`sug-${index}`">
        <rich-suggesion
          v-if="suggestion.uri"
          :title="suggestion.title"
          :uri="suggestion.uri"
        />
        <rich-suggesion
          v-else
          :title="suggestion.title"
          @click.native="send({ text: suggestion.title })"
        />
      </div>
    </chat-field>
  </div>
</template>

<script>
import Header from '@/components/Header'
import ErrorMessage from '@/components/ErrorMessage'
import RichComponent from '~/components/RichComponent'
import RichBubble from '~/components/RichBubble'
import ChatField from '~/components/ChatField'
import RichSuggesion from '~/components/RichSuggesion'
import RichCarousel from '~/components/RichCarousel'
import RichCard from '~/components/RichCard'
import RichList from '~/components/RichList'
import RichListItem from '~/components/RichListItem'
import RichTableCard from '~/components/RichTableCard'

export default {
  components: {
    Header,
    ErrorMessage,
    RichComponent,
    RichBubble,
    ChatField,
    RichSuggesion,
    RichCarousel,
    RichCard,
    RichList,
    RichListItem,
    RichTableCard,
  },
  data: () => ({
    error: null,
    loading: false,
    messages: [],
    suggestions: [],
  }),
  methods: {
    async send(value) {
      const queryInput = {
        from: 'user',
        chat: value,
      }
      await this.messages.push(queryInput)
      window.scrollTo(0, document.body.scrollHeight)
      this.loading = true
      if (value.text) {
        const request = {
          session: '12345',
          queryInput: {
            text: {
              text: value.text,
              languageCode: 'en-US',
            },
          },
        }
        const response = await this.$axios.$post('/handlers/message', request)
        const queryInput = {
          from: 'agent',
          chat: response,
        }
        await this.messages.push(queryInput)
        console.log(this.messages)
        await response.payload.forEach((py) => {
          if (py.type === 'suggestion') {
            this.setSuggestion(py.data)
          }
        })
        this.loading = false
        window.scrollTo(0, document.body.scrollHeight)
      }
    },
    setSuggestion(payload) {
      const newData = payload.map((x) => {
        return {
          title: x.title.stringValue,
          uri: x.uri.stringValue,
        }
      })
      this.suggestions = newData
    },
  },
}
</script>

<style lang="scss" scoped>
body {
  @apply m-0 p-0;
}

.chat {
  @apply max-w-xl mx-auto;
  padding: 70px 12px 140px 12px;
}
</style>
