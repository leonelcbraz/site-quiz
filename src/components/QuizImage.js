import React, { Component } from 'react';

class QuizImage extends Component {

    render() {
        return (
            <img src={this.props.src} alt={this.props.alt}/>
        );
    }
}

export default QuizImage; // Don’t forget to use export default!