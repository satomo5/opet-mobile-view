import React, { Component } from 'react';
import Quiz from './components/quizPage';
import { BrowserRouter as Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

// -- Import icon from font awesome
library.add(faChevronLeft);
library.add(faChevronUp);
library.add(faChevronDown);

class App extends Component {
  render() {
    return (
      <Route>
        <div className="container"> 
          <Quiz />
        </div>
      </Route>
    );
  }
}

export default App;
