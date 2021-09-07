import { useReducer, useEffect, useCallback } from 'react'
import {
  Switch,
  Route,
  Redirect,
  useHistory
} from "react-router-dom";
import Layout from './components/layout/Layout'
import MainNavigation from "./components/layout/MainNavigation";
import useHttp from './hooks/use-http'
import AllQuotes from './pages/AllQuotes'
import NewQuote from './pages/NewQuote'
import QuoteDetail from "./pages/QuoteDetail";
import NotFound from './pages/NotFound';
import { getAllComments, getAllQuotes } from './lib/api'


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
  const { sendRequest, status, data: loadedQuotes } = useHttp(getAllQuotes)
  const histroy = useHistory()

  //   console.log("sendRequest", test.sendRequest )

  // console.log("useHttpState", test)

  const pullAllQuotes =  useCallback(() => {
    sendRequest()
  }, [sendRequest])

  useEffect(() => {
    pullAllQuotes()
    return () => {

    };
    // console.log("quoteObj", quoteObj)
  }, [pullAllQuotes])



  const addQuoteHandler = (item) => {

    dispatch({
      type: "ADD-QUOTE",
      payload: item
    })
    histroy.replace("/quotes")
  }
  console.log("loadedQuotes", loadedQuotes)
  console.log("currState", state)
  console.log("status", status)
  const addCommentHandler = (item) => {
    // const req = test.sendRequest(item)
    // console.log("FocusItem", req )
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
            <AllQuotes quotes={loadedQuotes} status={status} />
          </Route>
          <Route path="/quotes/:quoteID" >
            <QuoteDetail addComment={addCommentHandler} quoteDetail={loadedQuotes} />
          </Route>
          <Route path="/add-quote">
            <NewQuote addQuote={addQuoteHandler} />
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
