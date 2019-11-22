import React from 'react'
import { connect } from 'react-redux'
import { Icon, Input, Button, Row, Col, message } from 'antd'
import styles from './style.module.scss'

class Login extends React.Component {
  state = {
    // 提交中
    loading: false,
    // 验证码地址
    vcode: '',
    // 提交数据
    data: {
      username: '',
      password: '',
      vcode: '',
    }
  }
  render() {
    return (
      <div className={styles.con}>
        <h3 className={styles.title}>欢迎登录</h3>
        <div className="pdb-bg">
          <Input size="large"
            prefix={<Icon className={styles.icon} type="user" />}
            maxLength={16}
            name="username"
            onChange={this.inputChange}
            placeholder="用户" />
        </div>
        <div className="pdb-bg">
          <Input size="large" prefix={<Icon className={styles.icon} type="lock" />}
            type="password"
            maxLength={16}
            name="password"
            onChange={this.inputChange}
            placeholder="密码" />
        </div>
        <Row className="pdb-bg">
          <Col span={12}>
            <Input size="large"
              prefix={<Icon className={styles.icon} type="line-height" />}
              maxLength={4}
              name="vcode"
              onChange={this.inputChange}
              placeholder="验证码" />
          </Col>
          <Col span={12} className="text-right">
            <img src={this.state.vcode} onClick={this.changeVcode} className={styles.vcode} />
          </Col>
        </Row>
        <div>
          <Button size="large" type="primary" block
            loading={this.state.loading}
            onClick={this.handleSubmit}>登录</Button>
        </div>
      </div>
    )
  }
  componentDidMount() {
    this.changeVcode()
  }
  // 切换验证码
  changeVcode = e => {
    let vcode = process.env.BASE_URL + '/vcode?' + Date.now()
    this.setState({
      vcode
    })
  }
  // 表单绑定
  inputChange = e => {
    this.state.data[e.target.name] = e.target.value
    this.setState({
      data: this.state.data
    })
  }
  // 提交
  handleSubmit = e => {
    e.preventDefault()
    const { username } = this.state.data
    if (!username) return message.info('请输入用户名')
    this.setState({
      loading: true
    })
    this.props.setUser(username)
    setTimeout(() => {
      this.props.history.push('/')
    }, 1000)
  }
}

export default connect(null, dispatch => ({
  setUser(value) { dispatch({ type: 'setUser', value }) }
}))(Login)
