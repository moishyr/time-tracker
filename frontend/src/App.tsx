import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
