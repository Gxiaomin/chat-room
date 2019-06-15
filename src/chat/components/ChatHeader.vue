<template>
  <!-- 窗口头部 -->
  <div class="chat-header">
    <div class="user">
      <img class="user-logo" src="../../assets/images/other.png"/>
      <span class="user-name">花花</span>
    </div>
    <div class="close">
      <img src="../../assets/images/close.png" @click="onCloseBtnClick"/>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // 关闭
    onCloseBtnClick () {
      this.$emit('onClose')
    }
  }
}
</script>
