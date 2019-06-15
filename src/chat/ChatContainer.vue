<template>
  <div class="chat-wrapper" v-show="isShow">
    <chat-header @onClose="isShow = false"></chat-header>
    <chat-body></chat-body>
    <send-panel></send-panel>
  </div>
</template>

<script>
import ChatHeader from './components/ChatHeader.vue'
import ChatBody from './components/ChatBody.vue'
import SendPanel from './components/SendPanel.vue'

export default {
  components: {
    ChatHeader,
    ChatBody,
    SendPanel
  },

  data () {
    return {
      isShow: false
    }
  },

  methods: {
    show () {
      this.isShow = true
    }
  }
}
</script>

