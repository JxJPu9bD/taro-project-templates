<%if (framework === 'react') {-%>
import React, { Component } from 'react'
<%} else if (framework === 'nerv') { -%>
import Nerv, { Component } from 'nervjs'
<%} else if (framework === 'vue') { -%>
import Vue from 'vue'
<%} else if (framework === 'vue3') { -%>
import { createApp } from 'vue'
<%}-%>
<%if (locals.typescript) {-%>
import Taro, { Config } from '@tarojs/taro'
<%} else { -%>
import Taro from '@tarojs/taro'
<%}-%>
import Index from './pages/index'

import './app.<%= cssExt %>'

<% if (framework === 'react' || framework === 'nerv') { -%>
class App extends Component {

  componentDidMount () {
    if (process.env.TARO_ENV === 'weapp') {
      Taro.cloud.init()
    }
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}
<%}-%>
<% if (framework === 'vue') { -%>
const App = new Vue({
  onShow (options) {
  },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  }
})
<%}-%>
<% if (framework === 'vue3') { -%>
const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
<%}-%>

export default App
