import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WrongPage from "./pages/WrongPage";
import Mains from "./pages/Mains";
import SignUp from "./pages/SignUp";
import Auth from "./services/context/Auth";
import PrivateRouter from "./services/router/PrivateRouter";
import CheckIfSign from "./services/router/CheckIfSign";
import SignIn from "./pages/SignIn";
import Loading from "./components/Loading";

function App() {
  return (
    <Auth>
      <div
        className="App"
        style={{ backgroundColor: "black", color: "#E5E5E5" }}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Loading" component={Loading} />
            <Route path="/signup" component={SignIn} />
            <PrivateRouter exact path="/main" component={Mains} />
            <CheckIfSign exact path="/signin" component={SignUp} />
            <Route component={WrongPage} />
          </Switch>
        </Router>
      </div>
    </Auth>
  );
}

export default App;
