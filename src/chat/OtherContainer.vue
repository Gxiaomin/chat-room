<template>
  <!-- 模拟对方发送消息窗口 -->
  <div class="other-form" v-if="isOther">
    <textarea class="other-textarea" v-model="inputVal"></textarea>
    <div class="footer">
      <button class="cancel" @click="isOther = false; inputVal = ''">取消</button>
      <button @click="onSend">发送</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isOther: false,
      inputVal: ''
    }
  },

  methods: {
    show () {
      this.isOther = true
    },

    // 发送消息
    onSend () {
      if (!this.inputVal) return

      let params = {
        _: Math.random().toString(16).substring(3, 8),
        user_type: 'other',
        user: '小强',
        create_at: new Date(),
        msg: this.inputVal
      }
      this.$store.commit('UPDATE_MSG_LIST', params)

      this.inputVal = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.other-form {
  clear: both;
  width: 80%;
  border: solid 1px #ddd;
  border-radius: 4px;
  overflow: hidden;
  .other-textarea {
    width: 100%;
    height: 100px;
    border: none;
    border-bottom: solid 1px #ddd;
    padding: 10px;
    box-sizing: border-box;
  }
  .footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 50px;
    overflow: hidden;
    button {
      width: 70px;
      height: 30px;
      margin-right: 10px;
    }
  }
}
</style>
