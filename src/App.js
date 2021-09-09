import React, { useEffect, useCallback, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainNavigation from "./components/layout/MainNavigation";
import useHttp from "./hooks/use-http";
import { getAllQuotes } from "./lib/api";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const AllQuotes = React.lazy(() => import("./pages/AllQuotes"));

function App() {
  const { sendRequest, status, data: loadedQuotes } = useHttp(getAllQuotes);

  const pullAllQuotes = useCallback(() => {
    sendRequest();
  }, [sendRequest]);

  useEffect(() => {
    pullAllQuotes();
    return () => {};
  }, [pullAllQuotes]);

  return (
    <>
      <MainNavigation />
      <Layout>
        <Suspense
          fallback={
            <div>
              <LoadingSpinner />
            </div>
          }
        >
          <Switch>
            <Route exact path="/">
              <Redirect to="/quotes" />
            </Route>
            <Route exact path="/quotes">
              <AllQuotes quotes={loadedQuotes} status={status} />
            </Route>
            <Route path="/quotes/:quoteID">
              <QuoteDetail />
            </Route>
            <Route path="/add-quote">
              <NewQuote />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
