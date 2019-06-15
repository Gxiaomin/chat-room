<template>
  <!-- 窗口主体 -->
  <div class="chat-main">
    <message-container></message-container>
  </div>
</template>

<script>
import MessageContainer from './MessageContainer.vue';

export default {
  components: {
    MessageContainer
  }
}
</script>

