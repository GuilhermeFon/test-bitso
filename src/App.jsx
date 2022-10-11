import {Navbar} from "./components/Navbar/index";
import {CardMain} from "./components/CardMain/index";
import {BrowserRouter as Router} from "react-router-dom";

import "./styles/main.css";
import {Body} from "./components/Card";
import {Signup} from "./components/SignUp";
import {Footer} from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
      </Router>
      <CardMain />
      <Body />
      <Signup />
      <Footer />
    </>
  );
}

export default App;
