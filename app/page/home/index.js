import React from 'react'
import {
  Row,
  Col,
  Button,
  Input,
  Table,
  DatePicker,
  Pagination
} from 'antd'
import Toast from '@component/toast'
import ajax from '@service/ajax'
import styles from './style.module.scss'

export default class Home extends React.Component {
  state = {
    pageIndex: 1,
    total: 0,
    loading: false,
    dataList: []
  }
  render() {
    return (
      <div className="cf">
        <Row className="pd-bg">
          <Col span={6}>
            <Button type="primary" icon="plus" onClick={this.add}>添加 </Button>
          </Col>
          <Col span={18} className="text-right">
            <span className="pdl-sm">用户：</span>
            <Input className="width-md"
              placeholder="用户名"
              allowClear
            />
            <span className="pdl-sm">时间：</span>
            <DatePicker.RangePicker
              style={{ width: 280 }}
            />
            <Button className="mgl-sm" onClick={this.getList}>搜索</Button>
          </Col>
        </Row>
        <Table
          rowKey="id"
          loading={this.state.loading}
          columns={[
            {
              title: '序号',
              render: (text, record, index) => {
                return (this.state.pageIndex - 1) * 10 + index + 1
              },
            },
            {
              title: 'id',
              dataIndex: 'id',
              key: 'id',
            },
            {
              title: '用户名',
              dataIndex: 'username',
              key: 'username',
            },
            {
              title: '邮箱',
              dataIndex: 'email',
              key: 'email',
            },
            {
              title: '登录时间',
              dataIndex: 'time',
              key: 'time',
            },
          ]}
          pagination={{
            current: this.state.pageIndex,
            total: this.state.total,
            showTotal: total => `共${total}条`,
            onChange: this.getList,
            className: 'pdr-bg'
          }}
          dataSource={this.state.dataList}
        />
      </div>
    )
  }
  componentDidMount() {
    this.getList()
  }
  // 获取数据
  getList = pageIndex => {
    this.state.pageIndex = typeof pageIndex == 'number' ? pageIndex : 1
    this.state.loading = true
    this.setState(this.state)
    ajax.get('/list', {
      pageIndex: this.state.pageIndex
    }).then(resp => {
      console.log(this.state)
      this.setState({
        dataList: resp.data,
        total: resp.total,
        loading: false
      })
    })
  }
  // 点击添加
  add = () => {
    Toast.show('测试自定义组件')
  }
}