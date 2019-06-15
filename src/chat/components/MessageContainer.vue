<template>
  <div class="msg-list">
    <!-- 消息主体 -->
    <div v-for="item in msgList" :key="item.id" :class="['msg-item', item.user_type]">
      <div class="user-img">
        <img :src="`/static/${item.user_type}.png`" alt="用户头像">
      </div>
      <div class="content-box">
        <div class="content">
            <p class="send-time" v-text="item.create_at"></p>
            <div class="msg-content">
              <p v-html="isIndexofURL(item.msg)"></p>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { isIndexofURL } from '../../utils/tools'

export default {
  updated () {
    this.$nextTick(() => {
      this.scrollToBottom()
    })
  },

  methods: {
    // 滚动条自动保持在最底部
    scrollToBottom () {
      let box = document.querySelector('.msg-list')
      box.scrollTop = box.scrollHeight
    },

    // 替换字符串中所包含URL -> <a></a>
    isIndexofURL (str) {
      let regexp = /((http|https):\/\/([\w\-]+\.)+[\w\-]+(\/[\w\u4e00-\u9fa5\-\.\/?\@\%\!\&=\+\~\:\#\;\,]*)?)/ig

      if (regexp.test(str)) {
        str = str.replace(regexp, "<a target='_blank' href='$1'>$1</a>")
      }
      return str
    }
  },

  computed: {
    ...mapState({
      msgList: state => state.messageList
    })
  }
}
</script>
