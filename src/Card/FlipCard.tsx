import React, { Children } from 'react'
import './FlipCard.less'
import Card from './Card'

interface FlipCardProps {
    className?: string,
    type?: string,
    style?: object,
    children?: any,
}

interface FlipCardState {
    isFlip: boolean,
}

class FlipCard extends React.Component<FlipCardProps, FlipCardState> {
    public state: FlipCardState;
    constructor(props: FlipCardProps) {
        super(props);
        this.state = {
            isFlip: false,
        }
    }

    onFlip(isFlip: boolean) {
        this.setState({ isFlip })
    }

    render() {
        const cardData = { style: this.props.style };
        return (
            <div
                className={`asui-card-flip-box ${this.state.isFlip ? 'asui-card-flip' : ''} ${this.props.className || ''} `}
                onClick={() => this.onFlip(!this.state.isFlip)}
            >
                <Card className="asui-card-front" {...cardData} >
                    {this.props.children}
                </Card>
                <Card className="asui-card-back" {...cardData} >
                    xxxxasfa
                </Card>
            </div>
        )
    }
}

export default FlipCard
