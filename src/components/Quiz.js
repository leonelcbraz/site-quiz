import React, { Component } from 'react';

class Quiz extends Component {

    render() {
        return (
            <div className="quiz">
                {this.props.children}
            </div>
        );
    }
}

export default Quiz; // Don’t forget to use export default!