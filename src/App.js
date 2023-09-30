import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import Error from "./components/error";
import RouterFun from "./pages/browserRouter";
// import Register from "./test/test";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/ContacUs";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import RegisterPage from "./pages/Register";
import LoginForm from "./pages/Login";
import Favorites from "./pages/Favorites";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/Register" component={RegisterPage} />
          <Route exact path="/Login" component={LoginForm} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/movie/:id" component={MoviePage} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
