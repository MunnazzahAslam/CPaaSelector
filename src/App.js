import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Pricing from './components/Pricing/Pricing';
import ScrollToTop from './components/ScrollToTop';
import DashboardPage from './components/DashboardPage/DashboardPage';

//import Login from './components/Login/Login';
//import SignUp from './components/SignUp/SignUp';
import GlobalStyles from './globalStyles';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import {Navbar} from './components';
import {Footer} from './components';

function App() {
  return (
    <Router>
      <GlobalStyles/>
      <ScrollToTop />
      <Navbar/>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/services" exact component={Services}/>
          <Route path="/about" exact component={About}/>
          <Route path="/blog" exact component={Blog}/>
          <Route path="/pricing" exact component={Pricing}/>
     {/*  <Route path="/login" exact component={Login}/> */}    
          <Route path="/signup" exact component={DashboardPage}/>
        </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
