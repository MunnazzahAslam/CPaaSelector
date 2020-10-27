import React from 'react';
import GlobalStyles from './globalStyles';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import {Navbar} from './components';
function App() {
  return (
    <Router>
      <GlobalStyles/>
      <Navbar/>
        <Switch></Switch>
    </Router>
  );
}

export default App;
