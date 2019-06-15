<template>
  <div class="chat-footer">
    <textarea class="input-textarea" v-model.lazy="inputVal"></textarea>
    <button class="send" @click="onSend">发送</button>
  </div>
</template>

<script>

export default {
  data () {
    return {
      inputVal: ''
    }
  },

  methods: {
    // 发送消息
    onSend () {
      if (!this.inputVal) return

      let params = {
        _: Math.random().toString(16).substring(3, 8),
        user_type: 'self',
        user: '张三',
        create_at: new Date(),
        msg: this.inputVal
      }
      this.$store.commit('UPDATE_MSG_LIST', params)

      this.inputVal = ''
    }
  }
}
</script>
