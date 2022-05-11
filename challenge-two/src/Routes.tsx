import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "components/Navbar";
import Home from "pages/Home";
import GithubSearch from "pages/GithubSearch";

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/githubsearch">
        <GithubSearch />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
