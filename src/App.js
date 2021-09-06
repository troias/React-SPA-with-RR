import { useReducer } from 'react'
import {
  Switch,
  Route,
  Redirect,
  useHistory
} from "react-router-dom";
import Layout from './components/layout/Layout'
import MainNavigation from "./components/layout/MainNavigation";

import AllQuotes from './pages/AllQuotes'
import NewQuote from './pages/NewQuote'
import QuoteDetail from "./pages/QuoteDetail";
import NotFound from './pages/NotFound';

const defaultState = []

const defaultReducer = (state, action) => {
  switch (action.type) {
    case "ADD-QUOTE":


      return [
        ...state,
        {

          ...action.payload
        }]

    case "ADD-COMMENT":

      
      return [
        ...state,
        {
        ...action.payload
      }]

  


    default: return state
  }
}


function App() {

  const [state, dispatch] = useReducer(defaultReducer, defaultState)
  console.log("currState", state )
  const histroy = useHistory()
  console.log("histroy", histroy)




  const addQuoteHandler = (item) => {

    dispatch({
      type: "ADD-QUOTE",
      payload: item
    })
    histroy.replace("/quotes")
  }

  const addCommentHandler = (item) => {
    dispatch({
      type: "ADD-COMMENT",
      payload: item
    })
    console.log("FocusItem", item )
  }


  return (
    <>
      <MainNavigation />

      <Layout>
        <Switch>

          <Route exact path="/">
            <Redirect to="/quotes" />
          </Route>
          <Route exact path="/quotes" >
            <AllQuotes quotes={state} />
          </Route>
          <Route path="/quotes/:quoteID" >
            <QuoteDetail addComment={addCommentHandler} quoteDetail={state} />
          </Route>
          <Route path="/add-quote">
            <NewQuote  addQuote={addQuoteHandler} />
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
