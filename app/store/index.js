import { createStore } from 'redux'

// 数据
const initialState = {
  // 登录用户
  user: 'admin',
  // 个数
  count: 0
}

// action处理
const actionHandle = {
  setUser(state, action) {
    state.user = action.value
    return state
  },
  setCount(state, action) {
    console.log(state, action)
    state.count = state.count + 1
    return state
  },
}

const store = (state, action) => {
  const handle = actionHandle[action.type]
  if (typeof handle === 'function') {
    return {...handle(initialState, action)}
  }
  return initialState
}

export default createStore(store)