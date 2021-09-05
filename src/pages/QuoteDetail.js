import React from 'react'
import { useParams, Route, Link } from 'react-router-dom'
import Comments from '../components/comments/Comments'
const QuoteDetail = () => {
    const params = useParams()
    console.log("paramsId", params )
    return (
        <div>
            <Link to={`/quotes/${params.quoteID}/comments`} ><p>{params.quoteID}</p></Link>
            <Route path={`/quotes/${params.quoteID}/comments`}>
                <Comments />
            </Route>
        </div>
    )
}

export default QuoteDetail
