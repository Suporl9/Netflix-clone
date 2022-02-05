// import logo from './logo.svg';
import './CSS/App.css'
import { Route, Switch } from "react-router-dom";
import Main from "./Pages/Main";
import Login from './Pages/Login';
import Signup from "./Pages/Signup"
import AuthProvider from './context/AuthProvider';
function App() {
  return <Switch>
    <AuthProvider>
    <Route path="/" exact component={Main}/>
    <Route path="/login" component={Login}/>
    <Route path="/signup" component={Signup}/>
    
  </Switch>;

}

export default App;
