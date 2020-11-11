import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from './components/ResetPassword';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/forgotpassword" component={ForgotPassword}></Route>
        <Route path="/resetpassword/:token" component={ResetPassword}></Route>
      </Switch>
    </div>
  );
}

export default App;
