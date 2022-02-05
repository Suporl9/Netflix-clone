// import logo from './logo.svg';
import './CSS/App.css'
import { Route, Switch } from "react-router-dom";
import Main from "./Pages/Main";
import Login from './Pages/Login';
import Signup from "./Pages/Signup"
import Dashboard from './Pages/Dashboard';
import PrivateRoute from './Components/PrivateRoute';
function App() {
  return <Switch>
    <PrivateRoute>
    <Route path="/" exact component={Main}/>
    <Route path="/login" component={Login}/>
    <Route path="/signup" component={Signup}/>
    <Route path="/Dashboard" component={Dashboard}/>
  </Switch>;

}

export default App;
