import { useEffect, useCallback } from 'react'
import {
  Switch,
  Route,
  Redirect,
 
} from "react-router-dom";
import Layout from './components/layout/Layout'
import MainNavigation from "./components/layout/MainNavigation";
import useHttp from './hooks/use-http'
import AllQuotes from './pages/AllQuotes'
import NewQuote from './pages/NewQuote'
import QuoteDetail from "./pages/QuoteDetail";
import NotFound from './pages/NotFound';
import {  getAllQuotes } from './lib/api'


function App() {


  const { sendRequest, status, data: loadedQuotes } = useHttp(getAllQuotes)


  const pullAllQuotes =  useCallback(() => {
    sendRequest()
  }, [sendRequest])


  useEffect(() => {
    pullAllQuotes()
    return () => {

    };

  }, [pullAllQuotes])







  return (
    <>
      <MainNavigation />

      <Layout>
        <Switch>

          <Route exact path="/">
            <Redirect to="/quotes" />
          </Route>
          <Route exact path="/quotes" >
            <AllQuotes quotes={loadedQuotes} status={status} />
          </Route>
          <Route path="/quotes/:quoteID" >
            <QuoteDetail />
          </Route>
          <Route path="/add-quote">
            <NewQuote />
          </Route>

          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Layout>

    </>
  );
}

export default App;
