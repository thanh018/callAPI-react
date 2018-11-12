import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu/Menu.js';
import routes from './routes';
import { Switch, BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Menu></Menu>
          <div className="container">
            <div className="row">
              { this.showContent(routes) }
            </div>
          </div>
        </div>
      </Router>
    );
  }

  showContent = (routes) => {
    var result = null;
    if(routes.length > 0) {
      result = routes.map((route, index) =>  {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          );
      });
    }

    return <Switch>{result}</Switch>;
  }
}

export default App;
