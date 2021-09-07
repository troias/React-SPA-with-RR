import React from 'react'
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom'
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'

const QuoteDetail = (props) => {
    //  console.log("QuoteState", typeof props.quoteDetail[0].id)
    const match = useRouteMatch()
    const params = useParams()
    const paramsId = +params.quoteID
    const quote = props.quoteDetail.find(x => x.id === paramsId)

    console.log("match", match)





    if (!quote) {
        return <p>No quote found</p>
    }

    return (
        <div>

            <HighlightedQuote text={quote.text} author={quote.author} />

            <Route path={`${match.path}`} exact>
                <div className="centered">

                    <Link to={`${match.path}/comments`} className="btn--flat" >
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
