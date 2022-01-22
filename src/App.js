import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainHeader from "./components/MainHeader/MainHeader";
import MiddleHeader from "./components/MiddleHeader/MiddleHeader";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import PricingSection from "./components/PricingSection/PricingSection";
import SignSection from "./components/SignSection/SignSection";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import BankDeposit from "./components/BankDeposite/BankDeposit";
import CheckOut from "./components/CheckOut/CheckOut";

function App() {
  return (
    <Router>
      <MainHeader></MainHeader>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/page">
          <BankDeposit></BankDeposit>
        </Route>
        <Route path="/loans">
          <CheckOut></CheckOut>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
