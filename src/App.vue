<template>
  <div id="app">
    <div class="container">
      <div class="panel">
        <header>
          <button @click="onChat">开始聊天</button>
        </header>
        <div class="main">
          <chat-container ref="chatRoom"></chat-container>
        </div>
      </div>
      <div class="panel">
        <header>
          <button @click="onOtherChat">模拟B</button>
        </header>
        <div class="main">
          <other-container ref="otherRoom"></other-container>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChatContainer from './chat/ChatContainer.vue'
import OtherContainer from './chat/OtherContainer.vue'

export default {
  name: 'app',

  components: {
    ChatContainer,
    OtherContainer
  },

  methods: {
    onChat () {
      this.$refs.chatRoom.show()
    },

    onOtherChat () {
      this.$refs.otherRoom.show()
    }
  }
}
</script>
