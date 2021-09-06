import React from 'react'
import { useParams, Route, Link } from 'react-router-dom'
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'

const QuoteDetail = (props) => {
        //  console.log("QuoteState", typeof props.quoteDetail[0].id)

    const params = useParams()
    const paramsId = +params.quoteID
    const quote = props.quoteDetail.find(x => x.id === paramsId)

    console.log("quote", quote)
 
  

 

    if (!quote) {
        return <p>No quote found</p>
    }

    return (
        <div>
            <Link to={`/quotes/${params.quoteID}/comments`} >
               
                <HighlightedQuote text={quote.text} author={quote.author} />
             
                </Link>
      
            <Route path={`/quotes/${params.quoteID}/comments`}>
                <Comments />
            </Route>
        </div>
    )
}

export default QuoteDetail
