import { Switch, Route } from "react-router-dom";

import Container from "./components/Container";
import Navbar from "./components/SideBar/Navbar";
import DomainList from "./components/Body/DomainList/DomainList";
import HostsList from "./components/Body/DomainList/HostsList";
import OfferList from "./components/Body/DomainList/OfferList";

function App() {
  return (
    <Container>
      <div className="container-body">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <DomainList />
            </Route>
            <Route exact path="/hosts">
              <HostsList />
            </Route>
            <Route path="/offers">
              <OfferList />
            </Route>
          </Switch>
        </div>
      </div>
    </Container>
  );
}

export default App;
