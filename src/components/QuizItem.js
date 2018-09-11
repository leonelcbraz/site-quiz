import React, { Component } from 'react';

class QuizItem extends Component {

    render() {
        return (
            <div className="quiz-item">
                {this.props.children}
            </div>
        );
    }
}

export default QuizItem; // Don’t forget to use export default!