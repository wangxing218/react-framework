import React from 'react'
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

// 页面
import Login from '../page/login'
import Layout from '../page/layout'
import Error from '../page/error'
import Home from '../page/home'

export default () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login} exact wefwe="213123" />
      <Route path="/error" component={Error} exact />
      <Route path="/" render={(props) => (
        <Layout {...props}>
          <Switch>
            <Route path="/" component={Home} exact />
            <Redirect from="*" to="/error" />
          </Switch>
        </Layout>
      )}></Route>
    </Switch>
  </Router>
)

