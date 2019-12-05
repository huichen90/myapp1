/*
TodoList 用于显示 todos 列表。
todos: Array 以 { text, completed } 形式显示的 todo 项数组。
onTodoClick(index: number) 当 todo 项被点击时调用的回调函数。
* */

import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) => (
    <ul>
        {todos.map((todo, index) => (
            <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
        ))}
    </ul>
);

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
};

export default TodoList