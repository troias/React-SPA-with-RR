import React, { useEffect } from 'react'
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom'
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import useHttp from '../hooks/use-http'
import { getSingleQuote } from '../lib/api'
import LoadingSpinner from '../components/UI/LoadingSpinner'

const QuoteDetail = () => {


    const match = useRouteMatch()
    const params = useParams()

 
    const { quoteID } = params
  
    const { sendRequest, status, error, data: loadedQuotes } = useHttp(getSingleQuote, true)


    useEffect(() => {
        sendRequest(quoteID)
     
    }, [sendRequest, quoteID])

    if (status === "pending") {
        return (
            <div className="">
                <LoadingSpinner />
            </div>
        )
    }
    if (status === "error") {
        <p>{error}</p>

    }
    if (!loadedQuotes) {
        return (
            <p>
                No quote found
            </p>
        )

    }

    
    return (
        <div>

            <HighlightedQuote text={loadedQuotes.text} author={loadedQuotes.author} />
        <p> {loadedQuotes.id} </p>
            <Route path={`${match.path}`} exact>
                <div className="centered">

                    <Link to={`${match.url}/comments`} className="btn--flat" >
                        Load Comments
                    </Link>
                </div>
            </Route>


            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </div>
    )
}

export default QuoteDetail
