import '@babel/polyfill'
import { hot } from 'react-hot-loader/root'
import React from 'react'
import { render } from 'react-dom'
import app from './app'

import 'antd/dist/antd.css'
import '@css/common.scss'
import '@css/home.scss'

// 热更新
const App = hot(app)
render(
  <App />,
  document.getElementById('app')
)
