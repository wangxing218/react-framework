import React from 'react'
import { render } from 'react-dom'
import styles from './style.module.scss'

const Deafults = {
  duration: 2000,
  style: {}
}
class Toast extends React.Component {
  state = {
    show: false,
    content: '',
    ...Deafults
  }
  render() {
    return (
      <div className={styles.meaToast} style={{ display: this.state.show ? 'block' : 'none' }}>
        <div className={styles.meaToastMessage}>
          {this.state.content}
        </div>
      </div>
    )
  }
  // 显示
  show = (content, options = {}) => {
    if (this._tick) {
      clearTimeout(this._tick)
      this._tick = null
    }
    this.setState({
      ...Deafults,
      show: true,
      content: content,
      ...options,
    }, () => {
      this._tick = setTimeout(() => {
        this.hide()
      }, this.state.duration)
    })
  }
  // 隐藏
  hide = () => {
    if (this._tick) {
      clearTimeout(this._tick)
      this._tick = null
    }
    this.setState({
      show: false,
    })
  }
}
export {
  Toast,
}
export default {
  show(content, options) {
    if (!this._obj) {
      this._obj = document.createElement('div')
      this._objCom = render(<Toast />, this._obj)
      document.body.appendChild(this._obj)
    }
    this._objCom.show(content, options)
  }
}