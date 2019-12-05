//根组件，渲染余下的所有内容
//展示型的 TodoList 组件需要一个类似 VisibleTodoList 的容器
// 来监听 Redux store 变化并处理如何过滤出要显示的数据。
// 为了实现状态过滤，需要实现 FilterLink 的容器组件来渲染 Link 并在点击时触发对应的 action
import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);

export default App