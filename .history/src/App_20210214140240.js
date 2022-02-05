// import logo from './logo.svg';
import './CSS/App.css'
import { Route, Switch } from "react-router-dom";
import Main from "./Pages/Main";
import Login from './Pages/Login';
function App() {
  return <Switch>
    <Route path="/" exact component={Main}/>
    <Route path="/login" component={Login}/>
    <Route path=""
  </Switch>;

}

export default App;
