import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Layout from './components/layout/Layout'
import MainNavigation from "./components/layout/MainNavigation";
import Quotes from './components/quotes/quotes'
import AddQuote from './components/quotes/AddQuote'

function App() {
  return (
    <>
      <MainNavigation />

      <Layout>
        <Switch>
          <Route exact path="/welcome">
            <Redirect to="/welcome" />
          </Route>
          <Route path="/all-quotes" >
            <Quotes />
          </Route>
          <Route path="/add-quote">
            <AddQuote />
          </Route>
          <Route path="/">

          </Route>
        </Switch>
      </Layout>

    </>
  );
}

export default App;
