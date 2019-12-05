/*
Link 带有 callback 回调功能的链接
onClick() 当点击链接时会触发
* */

import React from 'react'
import PropTypes from 'prop-types'  //对props中数据类型进行检测及限制

const Link = ({ active, children, onClick }) => {
    if (active) {
        return <span>{children}</span>
    }

    return (
        <a
            href=""
            onClick={e => {
                e.preventDefault();
                onClick()
            }}
        >
            {children}
        </a>
    )
};

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Link