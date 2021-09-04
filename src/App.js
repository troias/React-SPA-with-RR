import {useReducer} from 'react'
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Layout from './components/layout/Layout'
import MainNavigation from "./components/layout/MainNavigation";
import Quotes from './components/quotes/quotes'
import AddQuote from './components/quotes/AddQuote'
import  QuoteDetail  from "./components/quotes/QuoteDetail";


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
            <Quotes quotes={state} />
          </Route>
          <Route path="/quotes/:quoteID" >
            <QuoteDetail quoteDetail={state} />
          </Route>
          <Route path="/add-quote">
            <AddQuote addQuote={addQuoteHandler} />
          </Route>
          <Route path="/">

          </Route>
        </Switch>
      </Layout>

    </>
  );
}

export default App;
