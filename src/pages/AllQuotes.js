import React from 'react'
import QuotesList from "../components/quotes/QuoteList"


const AllQuotes = (props) => {
    return (
        <div>
            <QuotesList quotes={props.quotes} />
        </div>
    )
}

export default AllQuotes
