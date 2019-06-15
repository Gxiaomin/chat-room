import { buildList } from '../utils/tools'

export default {
  // 更新消息列表
  UPDATE_MSG_LIST (state, msg) {
    state.messageList = buildList(state.messageList, msg)
  }
}
