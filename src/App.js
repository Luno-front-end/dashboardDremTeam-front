import { Switch, Route } from "react-router-dom";

import Container from "./components/Container";
import Navbar from "./components/SideBar/Navbar";
import DomainList from "./components/Body/Lists/DomainList";
import OfferList from "./components/Body/Lists/OfferList";
import HostsList from "./components/Body/Lists/HostsList";

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
            <Route path="/hosts">
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
