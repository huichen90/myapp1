import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
    let input;

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();              //取消事件的默认动作
                    if (!input.value.trim()) {       //去除字符串的头尾空格,如果没有输入，直接返回
                        return
                    }
                    dispatch(addTodo(input.value));
                    console.log('添加任务：',input.value)
                    input.value = ''
                }}
            >
                <input                          //通过回调函数才能让node拿到input的dom元素，
                    ref={node => {              // 然后利用ref的属性可以获取元素的输入
                        input = node
                    }}
                />
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    )
};
AddTodo = connect()(AddTodo);

export default AddTodo