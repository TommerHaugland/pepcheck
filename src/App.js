import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Readme from "./components/Readme";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Readme} path="/readme" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
