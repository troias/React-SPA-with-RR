import {useReducer} from 'react'
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Layout from './components/layout/Layout'
import MainNavigation from "./components/layout/MainNavigation";

import AllQuotes from './pages/AllQuotes'
import NewQuote from './pages/NewQuote'
import QuoteDetail  from "./pages/QuoteDetail";


const defaultState = []

const defaultReducer = (state, action) => {
  switch (action.type) {
    case "ADD-QUOTE":
   
   
    return [{
      ...action.payload
    }]

      
  
    default: return state
  }
}

function App() {
  const [state, dispatch] = useReducer(defaultReducer, defaultState)
  console.log("state", state)
  const addQuoteHandler = (item) => {
    console.log("item", item)
    dispatch({
      type: "ADD-QUOTE",
      payload: item
    })
  }

  return (
    <>
      <MainNavigation />

      <Layout>
        <Switch>
          <Route exact path="/welcome">
            <Redirect to="/welcome" />
          </Route>
          <Route exact path="/quotes" >
            <AllQuotes quotes={state} />
          </Route>
          <Route path="/quotes/:quoteID" >
            <QuoteDetail quoteDetail={state} />
          </Route>
          <Route path="/add-quote">
            <NewQuote addQuote={addQuoteHandler} />
          </Route>
          <Route path="/">

          </Route>
        </Switch>
      </Layout>

    </>
  );
}

export default App;
