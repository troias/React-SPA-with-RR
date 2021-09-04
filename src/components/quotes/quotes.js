import React from 'react'
import QuotesList from '../quotes/QuoteList'

const quotes = [{
    id: 1, 
    author: "troias", 
    test: "test"
  }]

 const Quotes = () => {
    return (
        <div>
     <QuotesList quotes={quotes}/>
        </div>
    )
}

export default Quotes
