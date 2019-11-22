import 'core-js/features/promise'
import 'core-js/features/set'
import 'core-js/features/map'
import 'core-js/features/string'
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
