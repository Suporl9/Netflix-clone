// import logo from './logo.svg';
import './CSS/App.css'
import { Route, Switch } from "react-router-dom";
import Main from "./Pages/Main";
import Login from './Pages/Login';
import Signup from "./Pages/Signup"
import Dashboard from './Pages/Dashboard';
function App() {
  return <Switch>
    <Private
    <Route path="/" exact component={Main}/>
    <Route path="/login" component={Login}/>
    <Route path="/signup" component={Signup}/>
    <Route path="/Dashboard" component={Dashboard}/>
  </Switch>;

}

export default App;
