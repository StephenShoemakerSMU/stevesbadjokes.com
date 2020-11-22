
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./Home.js";

function App() {
  return (
    <Router>
      <Switch>
            <Route path="/allJokes">
              
            </Route>
            <Route path="/submit">
              
            </Route>
            <Route path="/">
              <Home />
            </Route>
      </Switch>

    </Router>
  );
}

export default App;
