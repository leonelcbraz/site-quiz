import React, { Component } from 'react';

class QuizNav extends Component {

    render() {

        let buttons = [];
        
        if(!this.props.first) buttons.push( <button key="anterior">Anterior</button> );
        if(!this.props.last) buttons.push( <button key="proximo">Próximo</button> );

        return (
            <div>
                {buttons}
            </div>
        );
    }
}

export default QuizNav; // Don’t forget to use export default!