import React from 'react'
import { connect } from 'react-redux'
import styles from './style.module.scss'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


class Wrap extends React.Component {
  render() {
    return (
      <Layout className={styles.layout}>
        <Header className={styles.header}>
          <img src={require('@image/logo.gif')} className={styles.logo} onClick={() => this.props.history.push('/')} />
          <Menu
            mode="horizontal"
            style={{ lineHeight: '64px', float: 'right' }}
          >
            <Menu.Item key="2"> <Icon type="user" /> {this.props.user}</Menu.Item>
            <Menu.Item key="3" onClick={() => this.props.history.push('/login')}>退出</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className={styles.side} >
            <Menu
              mode="inline"
              theme="dark"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
            >
              <Menu.Item key="home"><Icon type="home" />首页</Menu.Item>
              <SubMenu
                key="setting"
                title={<span><Icon type="setting" />用户中心</span>}
              >
                <Menu.Item key="user">用户列表</Menu.Item>
                <Menu.Item key="auth">权限管理</Menu.Item>
                <Menu.Item key="feedback">意见反馈</Menu.Item>
              </SubMenu>
              <SubMenu
                key="news"
                title={<span><Icon type="container" />内容管理</span>}
              >
                <Menu.Item key="news-1">内容分类</Menu.Item>
                <Menu.Item key="news-2">添加新闻</Menu.Item>
                <Menu.Item key="news-3">标签管理</Menu.Item>
                <Menu.Item key="news-4">归档</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item>列表</Breadcrumb.Item>
              <Breadcrumb.Item>详情</Breadcrumb.Item>
            </Breadcrumb>
            <Content className={styles.content}>
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
  componentDidMount() {
  }
}
const mapStateToProps = (state) => ({
  user: state.user
})
export default connect(mapStateToProps)(Wrap)