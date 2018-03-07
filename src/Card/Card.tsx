import React from 'react'
import './Card.less'

interface CardState {
    className?: string,
    style?: object,
    children?: any,
}

const Card = (props: CardState) => {
    return (
        <div className={`asui-card ${props.className || ''}`} style={{ ...props.style }}>{props.children}</div>
    )
}

export default Card
