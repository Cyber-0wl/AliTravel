import "./App.css";
import { Route, Switch } from "react-router-dom";
// import About from "./components/forms/Offers/Offers";
import Contact from "./components/forms/Contact/Contact";
import Navbar from "./components/forms/Navbar/Navbar";
import PageNotFound from "./components/forms/PageNotFound";
import PrivateRoute from "./components/forms/PrivateRoutes";
import Services from "./components/forms/Services/Services";
import HomePage from "./pages/Home";
import LoginPage from "./components/forms/SignInForm";
import SignupPage from "./components/forms/SignUpForm";
import FormMemory from "./components/forms/formMemory/FormMemory";
import Offer from "./components/forms/Offers/Offers";
import Memories from "./components/forms/memories/Memories";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/service" component={Services} />
        <Route path="/offers" component={Offer} />
        <Route path="/formMemory" component={FormMemory} />
        <Route path="/memories" component={Memories} />
        <Route default component={PageNotFound} />
        
      </Switch>
      <Contact />
    </>
  );
}

export default App;
