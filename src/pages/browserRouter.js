import {
  BrowserRouter,
  Route,
  Router,
  Switch,
} from "react-router-dom/cjs/react-router-dom";
import Home from "./Home";
import Contact from "./ContacUs";

function RouterFun() {
  <BrowserRouter>
    <Route path="/" component={Home} />
    <Route path="/contact" component={Contact} />
  </BrowserRouter>;
}

export default RouterFun;
