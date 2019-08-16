import React from 'react'
import Router from './router'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import zhcn from 'antd/es/locale/zh_CN'
import store from '../store'



export default () => (
  <ConfigProvider locale={zhcn}>
    <Provider store={store}>
      <Router />
    </Provider>
  </ConfigProvider>
)