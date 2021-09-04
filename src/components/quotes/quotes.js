import React from 'react'
import { Link } from 'react-router-dom'
import QuotesList from '../quotes/QuoteList'




const Quotes = (props) => {
console.log("QuoteList", props.quotes)
    return (
      
        <div>
             {/* quotes={props.quotes} */}
          <QuotesList quotes={props.quotes} /> 
        </div>
    )
}

export default Quotes
