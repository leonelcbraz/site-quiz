import React, { Component } from 'react';

class QuizTitle extends Component {

    render() {
        return (
            <h1>{this.props.title}</h1>
        );
    }
}

export default QuizTitle; // Don’t forget to use export default!