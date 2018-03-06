import React from 'react';

const Card = ({ width = 100, height = 100, children = null, ...props }) => {
    return (
        <div className="asui-card" style={{ width, height }}>{children}</div>
    )
}

export default Card;