import React from 'react';

export default class Circle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var divStyle = {
            opacity: this.props.opacity
        };
        return (
            <div className="circle" style={divStyle}></div>
        );
    }
}
