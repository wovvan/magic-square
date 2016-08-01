import React from 'react';
import Circle from './Circle.jsx';

export default class Squares extends React.Component {
    constructor(props) {
        super(props);
        this.renderSquare = this.renderSquare.bind(this);
    }

    render() {
        const squares = this.props.items;
        return <div className="squares">{squares.map(this.renderSquare)}</div>;
    }

    renderSquare(square) {
        return (
            <div className="square" key={`square${square.id}`} onClick={this.props.showCicle.bind(null, square.id)}>
                <Circle opacity={square.opacity}/>
            </div>
        );
    }
}
