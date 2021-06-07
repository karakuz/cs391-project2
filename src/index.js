import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route} from 'react-router-dom';
import App from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './components/Login/Login';
import Navigationbar from './components/Navbar/Navigationbar';
import Signup from './components/Signup/Signup';
import "../node_modules/bootswatch/dist/darkly/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Navigationbar/>
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);