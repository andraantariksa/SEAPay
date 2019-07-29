import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './component/navbar';
import Signup from './component/register/signup';
import Home from './component/home/home';
import Signin from './component/home/signin';

function NotFound({ location }) {
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default class App extends Component {
  state={
    loggedIn: false,
    user : ""
  }
  loggedIn = (user) => {
    this.setState({
      loggedIn:true,
      user:user
    })
  }
  render() {
    return (
    <Router>
      <main>
        <NavBar loggedIn={this.state.loggedIn}/>
        <Switch>
          <Route path="/" exact render={(props) => <Home {...props} user={this.state.user}/>} />
          <Route path="/signin" render={(props) => <Signin {...props} loggedIn={this.loggedIn}/> } />
          <Route path="/signup" render={(props) => <Signup {...props} loggedIn={this.loggedIn}/> } />
          <Route component={NotFound} />
        </Switch>
      </main>
    </Router>
    )
  }
}