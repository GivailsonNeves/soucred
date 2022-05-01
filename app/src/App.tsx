import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import DoSimulation from "./pages/DoSimulation";
import Home from "./pages/Home";
import LootFgts from "./pages/LootFgts";
import { Dispatch } from "./store";

export interface AppProps {
  initAll?: any;
}

const App: React.FC<AppProps> = ({ initAll }) => {
  const [fullLoading, setFullLoading] = useState<boolean>(true);
  const [t] = useTranslation();

  useEffect(() => {
    const loadData = async () => {
      const result = await initAll();
      if (result) {
        setFullLoading(true);
      }
    };
    loadData().catch(console.error);
  }, [setFullLoading, initAll]);

  return fullLoading ? (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/saque-fgts">
          <LootFgts />
        </Route>
        <Route path="/credito">
          <DoSimulation />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route path="/blog/:slug">
          <BlogArticle />
        </Route>
      </Switch>
    </Router>
  ) : (
    <div className="loader-element">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">{t("general.loading")}</span>
      </Spinner>
      <p>{t("general.loading")}</p>
    </div>
  );
};

const mapDispatch = (dispatch: Dispatch) => ({
  initAll: async () =>
    Promise.all([
      dispatch.socialLinks.getAsync(),
      dispatch.about.getAsync(),
      dispatch.team.getAsync(),
      dispatch.about.getAsync(),
      dispatch.office.getAsync(),
      dispatch.contact.getAsync(),
      dispatch.address.getAsync(),
      dispatch.actions.getAsync(),
    ]),
});

// export default connect(null, mapDispatch)(App);
export default App;
