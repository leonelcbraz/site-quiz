import React, { Component } from 'react';
import logo from './img/question.png';
import './App.css';
import Quiz from './components/Quiz';
import QuizItem from './components/QuizItem';
import QuizTitle from './components/QuizTitle';
import QuizImage from './components/QuizImage';
import QuizNav from './components/QuizNav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Site Quiz: Onde fazer meu site?</h1>
        </header>
        <div className="App-content">
          <Quiz>
            <QuizItem>
              <QuizTitle title="Slide 1"/>
              <QuizImage src={logo}/>
              <QuizNav first/>
            </QuizItem>
            <QuizItem>
              <QuizTitle title="Slide 2"/>
              <QuizImage src={logo}/>
              <QuizNav/>
            </QuizItem>
            <QuizItem>
              <QuizTitle title="Slide 3"/>
              <QuizImage src={logo}/>
              <QuizNav last/>
            </QuizItem>
          </Quiz>
        </div>
        <footer className="App-footer">
          <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></div>
        </footer>
      </div>
    );
  }
}

export default App;
